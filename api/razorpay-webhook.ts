export default async function handler(req: any, res: any) {
  try {
    console.log("🔔 Razorpay Webhook Event Received Payload:");
    console.dir(req.body, { depth: null });
    
    // Acknowledging the webhook to Razorpay so it doesn't repeatedly retry 
    res.status(200).send("OK");
  } catch (error) {
    console.error("Webhook processing error:", error);
    res.status(500).send("Internal Server Error");
  }
}
