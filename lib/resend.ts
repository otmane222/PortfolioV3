'use server'

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: FormData): Promise<{success: boolean, error?: string}> => {
  const { name, email, message } = formData;
  
  // Check message length
  if (!message) {
    return { success: false, error: 'Message is required' };
  }
  
  // Process message to ensure proper line breaks and encoding
  const processedMessage = message
    .trim()
    .replace(/\n/g, '<br />'); // Convert newlines to HTML breaks
  
  try {
    // Log for debugging
    console.log('Sending email with message length:', processedMessage.length);
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'OrcDev <onboarding@resend.dev>',
      to: 'otmaneaboulghit@gmail.com',
      subject: `New Message from ${name}`,
      html: `
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <div>
          <strong>Message:</strong>
          <div style="white-space: pre-wrap; margin-top: 10px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            ${processedMessage}
          </div>
        </div>
      `,
    });
    
    if (error) {
      console.error('Resend API error:', error);
      return { success: false, error: error.message };
    }
    
    console.log('Email sent successfully, data:', data);
    return { success: true };
  } catch (error) {
    console.error('Failed to send message:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};