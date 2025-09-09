# Contact Form Setup Guide

## Option 1: Formspree (Recommended - Easiest)

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy the form endpoint URL (it will look like `https://formspree.io/f/xpzgwqeq`)
4. Replace the URL in `Contact.js` line 35 with your actual Formspree endpoint
5. Test the form - emails will be sent to your email address

## Option 2: EmailJS (Alternative)

If you prefer EmailJS instead:

1. Go to [EmailJS.com](https://www.emailjs.com) and create a free account
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Install EmailJS: `npm install @emailjs/browser`
5. Update the Contact.js file to use EmailJS instead

## Current Implementation

The contact form is now set up to:
- Send real emails (not just show alerts)
- Display success/error messages
- Automatically clear the form after successful submission
- Send emails to: delakkiya2@gmail.com

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (delakkiya2@gmail.com) for the message
4. You should also receive a copy of the submission in your Formspree dashboard

## Troubleshooting

- If emails aren't arriving, check your spam folder
- Verify the Formspree endpoint URL is correct
- Make sure your Formspree account is activated
- Check the browser console for any error messages

## Formspree Free Plan Limits

- 50 submissions per month
- Basic spam protection
- Email notifications
- Form analytics

For more submissions, consider upgrading to a paid plan.
