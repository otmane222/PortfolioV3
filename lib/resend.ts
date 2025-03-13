'use server'

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : any) => {
    const { name, email, message } = formData;
    
    try {
        // Send email using Resend
        await resend.emails.send({
        from: 'OrcDev <onboarding@resend.dev>',
        to: 'otmaneaboulghit@gmail.com',
        subject: `New Message from ${name}`,
        html: `
            <h1>New Message from ${name}</h1>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `,
        });
    } catch (error) {
        console.error('Failed to send message');
    }
};  