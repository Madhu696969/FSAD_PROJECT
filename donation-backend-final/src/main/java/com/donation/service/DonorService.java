package com.donation.service;

import com.donation.entity.DonateItem;
import com.donation.entity.Donor;
import com.donation.entity.DonorFeedback;
import com.donation.repository.DonateItemRepository;
import com.donation.repository.DonorFeedbackRepository;
import com.donation.repository.DonorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService {

    private final DonorRepository donorRepository;
    private final DonateItemRepository donateItemRepository;
    private final DonorFeedbackRepository donorFeedbackRepository;

    public DonorService(DonorRepository donorRepository,
                        DonateItemRepository donateItemRepository,
                        DonorFeedbackRepository donorFeedbackRepository) {
        this.donorRepository = donorRepository;
        this.donateItemRepository = donateItemRepository;
        this.donorFeedbackRepository = donorFeedbackRepository;
    }

    public Donor register(Donor donor) {
        if (donorRepository.existsByEmail(donor.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        return donorRepository.save(donor);
    }

    public Donor getProfile(Long donorId) {
        return donorRepository.findById(donorId)
                .orElseThrow(() -> new RuntimeException("Donor not found"));
    }

    public DonateItem donateItem(Long donorId, DonateItem item) {
        Donor donor = donorRepository.findById(donorId)
                .orElseThrow(() -> new RuntimeException("Donor not found"));
        item.setDonor(donor);
        item.setStatus("AVAILABLE");
        return donateItemRepository.save(item);
    }

    public List<DonateItem> getMyItems(Long donorId) {
    	return donateItemRepository.findByDonorId(donorId);
    }

    public DonorFeedback submitFeedback(Long donorId, DonorFeedback feedback) {
        Donor donor = donorRepository.findById(donorId)
                .orElseThrow(() -> new RuntimeException("Donor not found"));
        feedback.setDonor(donor);
        return donorFeedbackRepository.save(feedback);
    }
}