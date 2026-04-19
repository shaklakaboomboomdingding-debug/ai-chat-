import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req: express.Request, res: express.Response) {
  // Only allow POST requests for creating orders
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, currency } = req.body;
    
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      return res.status(500).json({ error: "Razorpay credentials not configured." });
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const options = {
      amount: amount * 100, // amount in smallest currency unit (paise)
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    // Inject the public key into the response to avoid static-build variable loss on the frontend
    return res.status(200).json({ 
      ...order, 
      key_id: process.env.VITE_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID 
    });
  } catch (error) {
    console.error("Payment Order Error:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
}
