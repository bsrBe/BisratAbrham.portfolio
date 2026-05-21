# Bisrat Abrham's Portfolio

A modern, interactive portfolio showcasing full-stack development projects ranging from fintech super apps to enterprise-grade backends and desktop solutions.

## 🚀 Overview

This is a Next.js-based portfolio website that highlights professional projects, technical skills, and accomplishments. Built with modern web technologies and best practices for performance and user experience.

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui Components
- **Animations:** Framer Motion
- **Development:** TypeScript for type safety

## 📁 Project Structure

```
├── components/           # Reusable React components
│   ├── projects.tsx      # Projects showcase component
│   └── ui/               # Shadcn/ui component library
├── pages/                # Next.js pages
├── styles/               # Global CSS and Tailwind config
├── public/               # Static assets (images, icons)
└── lib/                  # Utility functions and helpers
```

## 🎯 Featured Projects

### 1. **Dashen Super App** - Fintech Super App
A professional digital banking platform with secure onboarding, digital wallets, and QR payments.
- **Tech:** Node.js, Express, TypeScript, MongoDB, Redis, JWT Auth
- **Features:** Secure authentication, Digital wallet, Bank account linking, QR payments, Real-time support chat

### 2. **Scholarshub** - Full-stack SaaS
Complete system for managing scholarship applicants and agency operations.
- **Tech:** React, Node.js, Express, MongoDB, JWT Auth, Nodemailer
- **Live:** https://scholarshubglobal.com
- **GitHub:** https://github.com/bsrBe/scholarsHub

### 3. **Reboot Adventures** - Telegram Bot + Web App
Telegram-integrated event registration system with bot automation.
- **Tech:** React, Node.js, TypeScript, MongoDB, Telegraf, Webhooks
- **Telegram Bot:** https://t.me/Reboot_Adventures_bot
- **Admin Portal:** https://the-reboot-adventures-admin-portal.vercel.app

### 4. **Keni's Design** - Order Acceptance System
Telegram-integrated order management with JWT authentication.
- **Tech:** React, Node.js, TypeScript, MongoDB, Telegraf, Webhooks
- **Telegram Bot:** https://t.me/kofiDesign_bot
- **Admin Portal:** https://kofi-design-admin.vercel.app

### 5. **BookCompass** - Enterprise Backend
Multi-tenant online book marketplace with advanced features.
- **Tech:** Node.js, Express, TypeScript, MongoDB, Chapa Payments, Geo-API
- **Features:** Multi-shop management, RBAC, Auto stock reduction, Distance-based pricing
- **API Docs:** https://bookcompass.onrender.com/api-docs
- **GitHub:** https://github.com/bsrBe/BookCompass

### 6. **Proforma Invoice System** - Desktop App
Offline-first desktop application for invoice generation and management.
- **Tech:** Electron.js, React, Express, SQLite
- **Features:** Offline support, Cloud backup, 60% prep time reduction
- **GitHub:** https://github.com/bsrBe/Proforma

### 7. **Comfy Journal** - Mood Tracking App
Personal journaling platform with mood tracking and emotional patterns.
- **Tech:** Next.js, Node.js, Express, MongoDB
- **Live:** http://bit.ly/3EHfdTY
- **GitHub:** https://github.com/bsrBe/Vent

### 8. **JS Auth Starter** - Reusable Boilerplate
Fully built backend starter with advanced security and RBAC.
- **Tech:** Node.js, Express, JWT, bcrypt, RBAC

### 9. **Lersha Auth Service** - Microservices Authorization
Centralized permission engine for multiple microservices (Private).
- **Tech:** Node.js, Express, RBAC, Redis, MongoDB
- **GitHub:** https://github.com/bsrBe/Mern-Auth

## ✨ Key Features

- 🎨 **Modern UI/UX** - Clean, responsive design with Shadcn/ui components
- ⚡ **Performance Optimized** - Next.js with image optimization
- 🎭 **Smooth Animations** - Framer Motion for engaging interactions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🔍 **Type Safe** - Full TypeScript implementation
- 🎯 **SEO Ready** - Next.js best practices for search engine optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bsrBe/BisratAbrham.portfolio.git
cd BisratAbrham.portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Adding New Projects

Edit `components/projects.tsx` and add a new project object to the `projects` array:

```typescript
{
  id: 10,
  title: "Your Project Title",
  type: "Project Type",
  description: "Project description",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  image: PROJECT_IMAGES.yourProject,
  tags: ["Tech 1", "Tech 2"],
  liveUrl: "https://your-project-url.com",
  githubUrl: "https://github.com/yourname/yourproject",
}
```

Then add the corresponding image to `PROJECT_IMAGES` object and place the image file in the `public/` directory.

## 📊 Language Composition

- TypeScript: 97.2%
- CSS: 2.3%
- JavaScript: 0.5%

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome! Feel free to open an issue or reach out.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About Me

Full-stack developer specialized in building scalable web applications, fintech solutions, and enterprise-grade backends. Experienced with modern JavaScript/TypeScript frameworks and microservices architecture.

### Connect
- **GitHub:** https://github.com/bsrBe
- **Email:** bsr7349@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Shadcn/ui](https://shadcn-ui.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

**Last Updated:** May 2026
