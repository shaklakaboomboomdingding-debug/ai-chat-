import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to create Razorpay Order
  app.post("/api/create-order", async (req, res) => {
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
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  // API Route to handle Razorpay Webhooks
  app.post("/api/razorpay-webhook", (req, res) => {
    try {
      console.log("🔔 Razorpay Webhook Event Received Payload:");
      console.dir(req.body, { depth: null });
      
      // Acknowledging the webhook to Razorpay so it doesn't repeatedly retry 
      res.status(200).send("OK");
    } catch (error) {
      console.error("Webhook processing error:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
