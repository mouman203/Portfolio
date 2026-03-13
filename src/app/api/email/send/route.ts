import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        console.log("hello", name, email, message);
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'arrousmouman468@gmail.com',
            subject: `New Portfolio Message from ${name}`,
            html: `<p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`
        });
        console.log(data);
        console.log(error);
        if (error) return NextResponse.json({ error }, { status: 400 });
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}