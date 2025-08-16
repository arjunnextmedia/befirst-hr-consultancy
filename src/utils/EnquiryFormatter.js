

export const formatWhatsAppMessage = (formData) => {
    const { name, lastname, email, subject, notes } = formData;
    return encodeURIComponent(`
🌟 *NEW ENQUIRY FORM SUBMISSION* 🌟

👤 *CONTACT INFORMATION*
━━━━━━━━━━━━━━━━━━━━━━━━━
• *First Name:* ${name}
• *Last Name:* ${lastname}
• *Email Address:* ${email}

📌 *SUBJECT*
━━━━━━━━━━━━━━━━━━━━━━━━━
${subject}

📝 *MESSAGE DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━
${notes}

⏰ *Submitted On:* ${new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}
━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim());
};