import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

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
    const { 
      orderCreationId, 
      razorpayPaymentId, 
      razorpaySignature,
      courseName,
      userName,
      userPhone,
      userEmail
    } = await req.json();

    const signature = generatedSignature(orderCreationId, razorpayPaymentId);
    if (signature !== razorpaySignature) {
      return NextResponse.json({ message: "payment verification failed", isOk: false }, { status: 400 });
    }

    // Attempt to send emails if payment is successful
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 1. Email to the Enrolled User
        if (userEmail) {
            await transporter.sendMail({
                from: `"Nishant Mendhe Stock Classes" <${process.env.EMAIL_USER}>`,
                to: userEmail,
                subject: `Welcome to ${courseName}! Enrollment Confirmed`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                        <h2 style="color: #0F172A;">Enrollment Confirmed!</h2>
                        <p>Hi ${userName},</p>
                        <p>Thank you for enrolling in <strong>${courseName}</strong>.</p>
                        <p>We have successfully received your payment. We are excited to have you on board!</p>
                        <p>Stay tuned for further instructions, or reach out to our team on WhatsApp if you need immediate assistance.</p>
                        <br/>
                        <p>Best Regards,</p>
                        <p>Nishant Mendhe Team</p>
                    </div>
                `
            });
        }

        // 2. Notification Email to Admin
        await transporter.sendMail({
            from: `"Automated Notification" <${process.env.EMAIL_USER}>`,
            to: 'nisshantmenddhe.marketing@gmail.com',
            subject: `New Enrollment: ${courseName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #0F172A;">New Course Enrollment</h2>
                    <p>A new user has successfully registered for a course via Razorpay.</p>
                    <div style="background-color: #f6f7f9; padding: 16px; border-radius: 8px;">
                        <ul style="list-style-type: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 8px;"><strong>Name:</strong> ${userName || 'N/A'}</li>
                            <li style="margin-bottom: 8px;"><strong>Course:</strong> ${courseName || 'N/A'}</li>
                            <li style="margin-bottom: 8px;"><strong>Email:</strong> ${userEmail || 'N/A'}</li>
                            <li style="margin-bottom: 8px;"><strong>Phone:</strong> ${userPhone || 'N/A'}</li>
                            <li><strong>Order ID:</strong> ${orderCreationId}</li>
                        </ul>
                    </div>
                </div>
            `
        });
    } catch (emailError) {
        console.error("Failed to send notification emails:", emailError);
        // We still return true for payment success even if emails fail
    }

    return NextResponse.json({ message: "payment verified successfully, Thank you For Enrolling!", isOk: true });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ message: "Internal Server Error", isOk: false }, { status: 500 });
  }
}
