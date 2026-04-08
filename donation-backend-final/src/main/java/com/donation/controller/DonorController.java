package com.donation.controller;

import com.donation.entity.DonateItem;
import com.donation.entity.Donor;
import com.donation.entity.DonorFeedback;
import com.donation.service.DonorService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/donor")
public class DonorController {

    private final DonorService donorService;

    public DonorController(DonorService donorService) {
        this.donorService = donorService;
    }

    // ─── Signup ───────────────────────────────────────────
    @PostMapping("/signup")
    public Map<String, Object> register(@RequestBody Donor donor) {
        Donor saved = donorService.register(donor);
        Map<String, Object> response = new HashMap<>();
        response.put("token", "dummy-token");
        response.put("role", "DONOR");
        response.put("userId", saved.getId());
        response.put("name", saved.getName());
        response.put("email", saved.getEmail());
        return response;
    }

    // ─── Profile ──────────────────────────────────────────
    @GetMapping("/profile")
    public Donor getProfile(@RequestHeader("X-User-Id") Long donorId) {
        return donorService.getProfile(donorId);
    }

    // ─── Donate Item with Image (multipart only) ──────────
    @PostMapping(value = "/donateitem", consumes = "multipart/form-data")
    public DonateItem donateItem(
            @RequestHeader("X-User-Id") Long donorId,
            @RequestParam("donationType") String donationType,
            @RequestParam("itemName") String itemName,
            @RequestParam("quantity") int quantity,
            @RequestParam("condition") String condition,
            @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {

        DonateItem item = new DonateItem();
        item.setDonationType(donationType);
        item.setItemName(itemName);
        item.setQuantity(quantity);
        item.setCondition(condition);

        if (image != null && !image.isEmpty()) {
            String base64 = Base64.getEncoder().encodeToString(image.getBytes());
            String mimeType = image.getContentType();
            item.setImageBase64("data:" + mimeType + ";base64," + base64);
        }

        return donorService.donateItem(donorId, item);
    }

    // ─── Get My Donated Items ─────────────────────────────
    @GetMapping("/myitems")
    public List<DonateItem> getMyItems(@RequestHeader("X-User-Id") Long donorId) {
        return donorService.getMyItems(donorId);
    }

    // ─── Feedback ─────────────────────────────────────────
    @PostMapping("/feedback")
    public DonorFeedback submitFeedback(@RequestHeader("X-User-Id") Long donorId,
                                        @RequestBody DonorFeedback feedback) {
        return donorService.submitFeedback(donorId, feedback);
    }
}