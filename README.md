# Partner business website

An editable React + Vite + Tailwind CSS landing page with a keyboard-friendly review carousel and responsive contact form.

## Run locally

1. Install Node.js (Vite currently requires Node.js 20.19+ or 22.12+).
2. In this folder, run `npm install` and then `npm run dev`.

## Make it yours

- In `src/App.jsx`, update the `business` object with your partner's name, email, and location. Replace the sample testimonial text and customer names in `reviews` with real approved reviews.
- Update the hero and about copy, page title and description in `index.html`, and replace the Unsplash image URLs with your own photos.
- The form sends through EmailJS. Create a service and email template in EmailJS, set the template recipient to your partner's email, and use template variables `from_name`, `from_email`, `subject`, and `message`. Copy `.env.example` to `.env.local`, fill in the three EmailJS values, and restart the dev server. Keep the public key in the frontend as intended by EmailJS; do not put private keys there.
- Without EmailJS configured, submission displays a clear setup message and a direct email link instead of pretending the message was sent.

## Build

Run `npm run build` to make the production site in `dist/`.
