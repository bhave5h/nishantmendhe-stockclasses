import { NextResponse } from "next/server";
import crypto from "crypto";

const generatedSignature = (razorpayOrderId: string, razorpayPaymentId: string) => {
  const keySecret = process.env.RAZORPAY_SECRET;
  if (!keySecret) {
    throw new Error("Razorpay key secret is not defined in environment variables.");
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(req: Request) {
  try {
    const { orderCreationId, razorpayPaymentId, razorpaySignature } = await req.json();

    const signature = generatedSignature(orderCreationId, razorpayPaymentId);
    if (signature !== razorpaySignature) {
      return NextResponse.json({ message: "payment verification failed", isOk: false }, { status: 400 });
    }

    return NextResponse.json({ message: "payment verified successfully, Thank you For Enrolling!", isOk: true });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ message: "Internal Server Error", isOk: false }, { status: 500 });
  }
}
