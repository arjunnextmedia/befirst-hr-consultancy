// utils/whatsappFormatter.js
export const WhatsAppConsultMessageFormat = (data) => {
    const formattedDate = data.scheduleDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const message = `
🌟 *FREE CONSULTING REQUEST* 🌟

👤 *PERSONAL INFORMATION*
━━━━━━━━━━━━━━━━━━━━━━
• *Name:* ${data.name || 'Not provided'}
• *Email:* ${data.email || 'Not provided'}
• *Phone:* ${data.phone || 'Not provided'}

📋 *CONSULTATION DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━
• *Subject:* ${data.subject || 'Not specified'}
• *Preferred Date:* ${formattedDate}

📝 *DESCRIPTION*
━━━━━━━━━━━━━━━━━━━
${data.description || 'No additional details provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ *Submitted on:* ${new Date().toLocaleString()}
    `.trim();

    return encodeURIComponent(message);
};