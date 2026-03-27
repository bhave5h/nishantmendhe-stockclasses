import { NextResponse } from "next/server";
import Razorpay from "razorpay";
// @ts-ignore
import shortid from "shortid";

export async function POST(req: Request) {
  try {
    const { amount, name, phone, courseTitle } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
      key_secret: process.env.RAZORPAY_SECRET!,
    });

    const payment_capture = 1;
    const currency = "INR";
    const amountInPaise = amount * 100;

    const options = {
      amount: amountInPaise.toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {
        name: name || "Unknown Name",
        phone: phone || "Unknown Phone",
        course: courseTitle || "Unknown Course"
      }
    };

    const response = await razorpay.orders.create(options);

    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.error("Razorpay error:", error);
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 400 });
  }
}
