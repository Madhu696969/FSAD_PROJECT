import React, { useState, useRef } from 'react';
import HomeNavbar from '../NavBar/HomeNavbar';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ email: '', password: '', role: 'donor' });
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const otpRefs = useRef([]);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) { setErr('Fill all fields'); return; }
    setLoading(true); setErr('');
    try {
      await api.post('/auth/signin/request-otp', data);
      setStep(2); // ← switches view
    } catch (error) {
      setErr(error.response?.data?.message || 'Sign in failed. Check credentials.');
    } finally { setLoading(false); }
  };

  const handleOtpChange = (val, idx) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[idx] = digit;
    setOtp(next);
    if (digit && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKey = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0)
      otpRefs.current[idx - 1]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true); setErr('');
    try {
      const res = await api.post('/auth/signin/verify-otp', {
        email: data.email,
        otp:   otp.join(''),
        role:  data.role,
      });
      const { token, role, userId, name, email } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ userId, name, email, role }));
      if (role === 'DONOR')         navigate('/donor');
      else if (role === 'CONSUMER') navigate('/consumer');
      else if (role === 'ADMIN')    navigate('/admin/home');
    } catch (error) {
      setErr(error.response?.data?.message || 'Invalid or expired OTP.');
      setOtp(Array(6).fill(''));
      otpRefs.current[0]?.focus();
    } finally { setLoading(false); }
  };

  return (
    <div>
      <HomeNavbar />

      {/* ONE container div - no className dependency */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: 12,
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: 420,
          color: 'black'
        }}>

          {/* ── STEP 1: Credentials ── */}
          {step === 1 && (
            <div>
              <h2 style={{ marginBottom: 24, color: 'black' }}>Sign In</h2>
              {err && (
                <p style={{ color: 'red', marginBottom: 12, padding: '8px 12px', background: '#fff0f0', borderRadius: 6 }}>
                  {err}
                </p>
              )}
              <form onSubmit={handleSendOtp}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 6, color: '#333', fontWeight: 500 }}>Email</label>
                  <input
                    type="email" name="email"
                    placeholder="Enter your email"
                    required onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 15, color: 'black', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 6, color: '#333', fontWeight: 500 }}>Password</label>
                  <input
                    type="password" name="password"
                    placeholder="Enter your password"
                    required onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 15, color: 'black', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', marginBottom: 6, color: '#333', fontWeight: 500 }}>Role</label>
                  <select
                    name="role" onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 8, fontSize: 15, color: 'black', boxSizing: 'border-box' }}
                  >
                    <option value="donor">Donor</option>
                    <option value="consumer">Consumer</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button
                  type="submit" disabled={loading}
                  style={{ width: '100%', padding: '12px', background: loading ? '#aaa' : '#4CAF50', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 600 }}
                >
                  {loading ? 'Sending OTP...' : 'Send OTP →'}
                </button>
              </form>
            </div>
          )}

          {/* ── STEP 2: OTP Entry ── */}
          {step === 2 && (
            <div>
              <h2 style={{ marginBottom: 8, color: 'black' }}>Enter OTP</h2>
              <p style={{ color: '#555', marginBottom: 24, fontSize: 14 }}>
                6-digit code sent to <strong style={{ color: 'black' }}>{data.email}</strong>
              </p>
              {err && (
                <p style={{ color: 'red', marginBottom: 12, padding: '8px 12px', background: '#fff0f0', borderRadius: 6 }}>
                  {err}
                </p>
              )}
              <form onSubmit={handleVerify}>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={el => otpRefs.current[i] = el}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(e.target.value, i)}
                      onKeyDown={e => handleOtpKey(e, i)}
                      style={{
                        width: 50,
                        height: 56,
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                        border: digit ? '2px solid #4CAF50' : '2px solid #ccc',
                        borderRadius: 10,
                        outline: 'none',
                        color: 'black',
                        background: 'white',
                        cursor: 'text',
                        boxSizing: 'border-box'
                      }}
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading || otp.join('').length < 6}
                  style={{ width: '100%', padding: '12px', background: otp.join('').length < 6 ? '#aaa' : '#4CAF50', color: 'white', border: 'none', borderRadius: 8, fontSize: 16, cursor: otp.join('').length < 6 ? 'not-allowed' : 'pointer', fontWeight: 600, marginBottom: 12 }}
                >
                  {loading ? 'Verifying...' : 'Verify & Sign In ✓'}
                </button>

                <button
                  type="button"
                  onClick={() => { setStep(1); setOtp(Array(6).fill('')); setErr(''); }}
                  style={{ width: '100%', padding: '10px', background: 'transparent', color: '#555', border: '1px solid #ddd', borderRadius: 8, fontSize: 14, cursor: 'pointer' }}
                >
                  ← Back to Sign In
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SignIn;