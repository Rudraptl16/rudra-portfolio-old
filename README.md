# Rudra Patel - Developer Portfolio

Welcome to your new portfolio website! This project is built with React, Vite, Tailwind CSS, and Framer Motion.

## 1. Local Development

To run the site on your computer:
1. Make sure you have Node.js installed.
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```

## 2. Setting Up the Contact Form (EmailJS)

The contact form is built but needs your personal EmailJS keys to actually send emails to your inbox.

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
2. Add a new **Email Service** (e.g., Gmail) and copy your **Service ID**.
3. Create a new **Email Template**. This decides how the email looks when it reaches your inbox. Use these variables in your template:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Copy the **Template ID**.
5. Go to the Account tab and copy your **Public Key**.
6. Create a file named `.env` in the root of your project folder (next to `.env.example`).
7. Add your keys to the `.env` file like this:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```
   *Note: Do not share this `.env` file or commit it to GitHub. It is ignored by Git.*

## 3. Deploying to Vercel

1. Push this entire project folder to a new repository on your GitHub account.
2. Go to [Vercel.com](https://vercel.com/) and log in with GitHub.
3. Click **Add New Project** and select your newly created GitHub repository.
4. Open the **Environment Variables** section before clicking deploy.
5. Add your three EmailJS keys as environment variables here exactly as they are in your `.env` file.
6. Click **Deploy**.

## 4. Setting up custom domain (`patelrudra.in`)

Once your site is live on Vercel:
1. Go to your Vercel Project dashboard.
2. Navigate to **Settings** > **Domains**.
3. Add `patelrudra.in`.
4. Vercel will show you specific DNS records (usually an A Record and a CNAME).
5. Log into your domain registrar where you bought `patelrudra.in` and add those exact DNS records.
6. Wait a few minutes (sometimes up to 24 hours) for the DNS to propagate. Your site will then be accessible at your custom domain!

---
*Built with ❤️ by your AI Assistant.*
