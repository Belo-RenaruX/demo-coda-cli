# 🚀 Globant TODO - Innovation Meets Organization

A vibrant, modern TODO app showcasing **Globant's 2025 branding** with cutting-edge design and seamless functionality. Built with Next.js, TypeScript, and Tailwind CSS.

![Globant TODO Demo](https://img.shields.io/badge/Demo-Globant%20TODO-BFD732?style=for-the-badge&logo=rocket)

## ✨ Features

- **🎨 Globant-Branded Design**: Vibrant lime green (#BFD732) color scheme with modern gradients
- **📱 Responsive Design**: Beautiful on desktop, tablet, and mobile
- **🏷️ Smart Categories**: Work, Personal, Travel, Shopping with colorful badges
- **📊 Live Statistics**: Real-time progress tracking and task analytics
- **💾 Local Storage**: Tasks persist between sessions
- **🎭 Smooth Animations**: Framer Motion powered interactions
- **🔍 Filtering System**: Easy task organization by category
- **♿ Accessibility**: Built with accessibility in mind using Radix UI

## 🎯 Globant Branding Elements

- **Primary Colors**: Globant Lime (#BFD732) and Dark Gray (#0B0D10)
- **Typography**: Modern, professional fonts with gradient text effects
- **Components**: Glass-morphism cards with Globant-themed shadows
- **Icons**: Contextual emojis and professional iconography
- **Animations**: Smooth, professional transitions that reflect innovation

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Globant theme
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Radix Icons + Emoji system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Demo-GlobantTODOApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

1. **Add Tasks**: Click the vibrant "Add New Task" button at the bottom
2. **Categorize**: Choose from Work 💼, Personal 🏠, Travel ✈️, or Shopping 🛒
3. **Filter**: Use the filter dropdown to view specific categories
4. **Complete**: Check off tasks as you complete them
5. **Track Progress**: View real-time statistics at the bottom
6. **Delete**: Remove tasks with the trash icon

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── Todo/
│   │       ├── List.tsx      # Main todo container
│   │       ├── Item.tsx      # Individual todo items
│   │       ├── Form.tsx      # Add todo drawer
│   │       └── Filters.tsx   # Category filtering
│   ├── globals.css           # Globant custom styling
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/ui/           # Reusable UI components
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Globant Design System

### Colors
```css
--globant-lime: 74 85% 52%        /* Primary brand color */
--globant-dark: 220 15% 6%        /* Text and accents */
--globant-gradient-start: 74 85% 52%
--globant-gradient-end: 74 85% 42%
```

### Custom Components
- `.globant-gradient` - Brand gradient backgrounds
- `.globant-card` - Glass-morphism cards with brand shadows
- `.globant-button` - Interactive buttons with hover effects

## 🚦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Demo Features

Perfect for showcasing:
- Modern React/Next.js development practices
- TypeScript implementation
- Component-based architecture
- Responsive design principles
- Brand integration in digital products
- Accessibility best practices

## 📝 License

This project is created for demonstration purposes showcasing Globant's design excellence and technical capabilities.

---

**Built with 💚 by Globant Innovation Team**

*Reinventing the way teams organize and execute*