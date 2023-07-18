import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { SendEmailProps } from "@/api";

export async function POST(request: NextRequest) {
  const res: SendEmailProps = await request.json();
  console.log(res);

  if (!!res.from || !!res.message) {
    return NextResponse.json({ error: "Invaild request" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER!,
    port: parseInt(process.env.SMTP_PORT!, 10),
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASSWORD!,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER!,
    to: "lunazreturn@gamil.com",
    subject: `Request from ${res.from}`,
    text: res.message,
  };

  const sendmail = new Promise<string>((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info.response);
      }
    });
  });

  try {
    const result = await sendmail;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  console.log(process.env.SMTP_SERVER);
  return NextResponse.json({ error: "Hi" }, { status: 200 });
}
