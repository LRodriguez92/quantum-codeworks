# Quantum Codeworks Website

A premium web development agency website built with Next.js 14, React, and Tailwind CSS. Features a modern, elegant design with smooth animations, responsive layouts, and optimized performance.

![Quantum Codeworks](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-gold-transparent-EdKV0yEOuegb4yhLN7yjBL7IZxoozW.png)

## Features

- 🎨 Modern, elegant design with premium aesthetics
- ⚡ Built with Next.js 14 and React for optimal performance
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design for all devices
- 🌙 Dark mode optimized
- 🔍 SEO optimized
- 📝 Contact form with spam protection
- 🖼️ Dynamic portfolio showcase
- 💨 Tailwind CSS for styling
- 🔄 Intersection Observer for scroll animations

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **UI Components:** Radix UI
- **Form Handling:** Web3Forms
- **Icons:** Lucide Icons
- **Fonts:** 
  - Poppins (Google Fonts)
  - Montserrat (Google Fonts)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quantum-codeworks.git
   cd quantum-codeworks
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then update the variables in `.env.local` with your values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**
   The site should now be running in development mode.


## Web3Forms Integration

This project uses Web3Forms to handle form submissions without requiring a backend server. Follow these steps to set up Web3Forms with hCaptcha:

### Setup Instructions

1. **Create a Web3Forms Account**
   - Go to [Web3Forms](https://web3forms.com/) and sign up for a free account
   - Create a new form and get your access key

2. **Update the Access Key**
   - Open `components/contact-form.tsx`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Web3Forms

3. **Set Up hCaptcha**
   - Sign up for an [hCaptcha account](https://www.hcaptcha.com/)
   - Get your sitekey from the hCaptcha dashboard
   - Replace the placeholder sitekey in `components/contact-form.tsx` with your actual sitekey

4. **Configure Email Notifications**
   - In your Web3Forms dashboard, configure where you want to receive form submissions
   - You can set up email notifications, Slack notifications, or webhook integrations

5. **Testing**
   - Test the form to ensure submissions are being received
   - Check your Web3Forms dashboard to see submissions
   - Verify that hCaptcha is working correctly

### Additional Configuration Options

- **Custom Subject**: You can modify the email subject by changing the `subject` hidden input
- **Custom From Name**: You can modify the from name by changing the `from_name` hidden input
- **Redirect After Submission**: You can set a redirect URL by updating the `redirect` hidden input
- **Spam Protection**: The form includes a honeypot field to prevent spam submissions

## Key Features

### Smooth Scroll Animations
- Custom scroll reveal animations for elements
- Intersection Observer for performance
- Smooth section navigation

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scroll to sections
- Active section highlighting

### Portfolio Showcase
- Dynamic portfolio items
- Image optimization
- Hover effects
- Detailed project views

### Contact Form
- Form validation
- Spam protection
- Success/error handling
- Auto-fill project interest

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
