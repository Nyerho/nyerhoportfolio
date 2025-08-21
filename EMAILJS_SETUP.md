# EmailJS Setup Instructions

Your portfolio now includes EmailJS integration for the contact form. Follow these steps to receive real messages:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup instructions for your email provider
4. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Message: {{subject}}

Hello Esiso,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Environment Variables
Update the `.env` file in your project with your actual values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Redeploy
After updating the `.env` file:
1. Run: `npm run build`
2. Run: `npm run deploy`

## 7. Test
Visit your live portfolio and test the contact form. You should receive emails at neroesiso@gmail.com

## Important Notes:
- EmailJS has a free tier limit of 200 emails/month
- Messages will be sent from your configured email service
- The form will show success/error messages to users
- All form data is validated before sending

## Troubleshooting:
- Check browser console for any errors
- Verify all IDs are correct in `.env` file
- Make sure EmailJS service is properly configured
- Test with a simple message first
