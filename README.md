# 🎨 GhoharSaan Shop | فروشگاه گوهرسان

<div align="center">

![GhoharSaan Logo](https://via.placeholder.com/200x200?text=GhoharSaan)

**A Modern E-commerce Platform for Iranian Handicrafts**  
**پلتفرم مدرن فروش صنایع دستی ایرانی**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

[English](#english) | [فارسی](#فارسی)

</div>

---

## English

### 📖 About The Project

GhoharSaan.shop is a comprehensive e-commerce platform dedicated to promoting and selling authentic Iranian handicrafts. Our mission is to connect talented artisans with customers worldwide while preserving Iran's rich cultural heritage.

#### 🎯 Key Objectives:

- Showcase and sell traditional Iranian handicrafts
- Support local artisans and craftspeople
- Educate users on handicraft creation (upcoming feature)
- Enable international sales expansion (roadmap)

### ✨ Features

- 🔐 **Authentication System** - Secure user registration and login
- 👥 **Multi-Role Management**
  - Buyers: Browse and purchase products
  - Sellers: List and manage their handicrafts
  - Admins: Complete platform management
- 📚 **Educational Section** - Learn how to create handicrafts at home
- 🌍 **Multi-language Support** - Persian and English interfaces
- 📝 **Blog System** - Articles about handicrafts and culture
- 🛒 **Full E-commerce Features** - Cart, checkout, order management
- 📱 **Responsive Design** - Optimized for all devices

### 🛠️ Tech Stack

**Frontend:**

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React 18](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icon library

**Backend:**

- [Prisma ORM](https://www.prisma.io/) - Database toolkit
- [PostgreSQL](https://www.postgresql.org/) - Relational database

**Development Tools:**

- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [ESLint](https://eslint.org/) - Code linting

### 🚀 Getting Started

#### Prerequisites

- Node.js 18.x or higher
- PostgreSQL 14.x or higher
- npm or yarn package manager

#### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/goharsaan-shop.git
cd goharsaan-shop
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment Setup**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/goharsaan"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Optional: Email Service
SMTP_HOST="smtp.example.com"
SMTP_PORT=587
SMTP_USER="your-email@example.com"
SMTP_PASSWORD="your-password"

# Optional: Payment Gateway
PAYMENT_GATEWAY_KEY="your-payment-key"
```

4. **Database Setup**

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed database
npx prisma db seed
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 📁 Project Structure

```
goharsaan-shop/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── shared/          # Shared components
├── lib/                 # Utility functions
├── prisma/              # Database schema and migrations
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

### 🗺️ Roadmap

- [x] Core e-commerce functionality
- [x] Multi-role authentication
- [x] Blog system
- [ ] Educational content section
- [ ] Multi-language support (Persian/English)
- [ ] International shipping
- [ ] Mobile application
- [ ] Artisan verification system

### 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

### 👨‍💻 Developer

**Mohammad Moradi**  
GitHub: [@MrMohammadMoradi](https://github.com/MrMohammadMoradi)

---

## فارسی

### 📖 درباره پروژه

گوهرسان یک پلتفرم جامع تجارت الکترونیک است که به معرفی و فروش صنایع دستی اصیل ایرانی اختصاص دارد. هدف ما ایجاد ارتباط بین هنرمندان توانمند و مشتریان در سراسر جهان و حفظ میراث فرهنگی غنی ایران است.

#### 🎯 اهداف کلیدی:

- معرفی و فروش صنایع دستی سنتی ایرانی
- حمایت از هنرمندان و صنعتگران محلی
- آموزش ساخت صنایع دستی به کاربران (قابلیت آینده)
- توسعه فروش بین‌المللی (نقشه راه)

### ✨ ویژگی‌ها

- 🔐 **سیستم احراز هویت** - ثبت‌نام و ورود امن کاربران
- 👥 **مدیریت چند نقشی**
  - خریداران: مرور و خرید محصولات
  - فروشندگان: ثبت و مدیریت صنایع دستی
  - مدیران: مدیریت کامل پلتفرم
- 📚 **بخش آموزشی** - یادگیری ساخت صنایع دستی در منزل
- 🌍 **پشتیبانی چند زبانه** - رابط کاربری فارسی و انگلیسی
- 📝 **سیستم وبلاگ** - مقالات درباره صنایع دستی و فرهنگ
- 🛒 **قابلیت‌های کامل فروشگاهی** - سبد خرید، پرداخت، مدیریت سفارشات
- 📱 **طراحی ریسپانسیو** - بهینه‌سازی شده برای تمام دستگاه‌ها

### 🛠️ تکنولوژی‌های استفاده شده

**فرانت‌اند:**

- [Next.js 14](https://nextjs.org/) - فریمورک React با App Router
- [React 18](https://reactjs.org/) - کتابخانه UI
- [TypeScript](https://www.typescriptlang.org/) - ایمنی تایپ
- [Tailwind CSS](https://tailwindcss.com/) - استایل‌دهی
- [shadcn/ui](https://ui.shadcn.com/) - کامپوننت‌های UI
- [Lucide React](https://lucide.dev/) - کتابخانه آیکون

**بک‌اند:**

- [Prisma ORM](https://www.prisma.io/) - ابزار دیتابیس
- [PostgreSQL](https://www.postgresql.org/) - پایگاه داده رابطه‌ای

**ابزارهای توسعه:**

- [Prettier](https://prettier.io/) - فرمت کد
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [ESLint](https://eslint.org/) - بررسی کد

### 🚀 شروع به کار

#### پیش‌نیازها

- Node.js نسخه 18 یا بالاتر
- PostgreSQL نسخه 14 یا بالاتر
- مدیر بسته npm یا yarn

#### نصب

1. **کلون کردن مخزن**

```bash
git clone https://github.com/yourusername/goharsaan-shop.git
cd goharsaan-shop
```

2. **نصب وابستگی‌ها**

```bash
npm install
# یا
yarn install
```

3. **تنظیمات محیط**

فایل `.env` را در مسیر اصلی ایجاد کنید:

```env
# دیتابیس
DATABASE_URL="postgresql://user:password@localhost:5432/goharsaan"

# احراز هویت
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# اختیاری: سرویس ایمیل
SMTP_HOST="smtp.example.com"
SMTP_PORT=587
SMTP_USER="your-email@example.com"
SMTP_PASSWORD="your-password"

# اختیاری: درگاه پرداخت
PAYMENT_GATEWAY_KEY="your-payment-key"
```

4. **راه‌اندازی دیتابیس**

```bash
# تولید Prisma Client
npx prisma generate

# اجرای migrations
npx prisma migrate dev

# (اختیاری) پر کردن دیتابیس با داده‌های اولیه
npx prisma db seed
```

5. **اجرای سرور توسعه**

```bash
npm run dev
# یا
yarn dev
```

مرورگر خود را باز کرده و به آدرس [http://localhost:3000](http://localhost:3000) بروید.

### 📁 ساختار پروژه

```
goharsaan-shop/
├── app/                  # صفحات Next.js App Router
├── components/           # کامپوننت‌های React
│   ├── ui/              # کامپوننت‌های shadcn/ui
│   └── shared/          # کامپوننت‌های مشترک
├── lib/                 # توابع کمکی
├── prisma/              # اسکیما و migrations دیتابیس
├── public/              # فایل‌های استاتیک
├── styles/              # استایل‌های سراسری
└── types/               # تعریف تایپ‌های TypeScript
```

### 🗺️ نقشه راه

- [x] قابلیت‌های اصلی فروشگاهی
- [x] احراز هویت چند نقشی
- [x] سیستم وبلاگ
- [ ] بخش محتوای آموزشی
- [ ] پشتیبانی چند زبانه (فارسی/انگلیسی)
- [ ] ارسال بین‌المللی
- [ ] اپلیکیشن موبایل
- [ ] سیستم تایید هنرمندان

### 🤝 مشارکت

مشارکت‌ها چیزی هستند که جامعه متن‌باز را شگفت‌انگیز می‌کنند! هر مشارکتی که انجام دهید **بسیار قدردانی می‌شود**.

1. پروژه را Fork کنید
2. شاخه Feature خود را ایجاد کنید (`git checkout -b feature/AmazingFeature`)
3. تغییرات خود را Commit کنید (`git commit -m 'Add some AmazingFeature'`)
4. به شاخه Push کنید (`git push origin feature/AmazingFeature`)
5. یک Pull Request باز کنید

### 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر فایل `LICENSE` را مشاهده کنید.

### 👨‍💻 توسعه‌دهنده

**محمد مرادی**  
GitHub: [@MrMohammadMoradi](https://github.com/MrMohammadMoradi)

---

<div align="center">

**Made with ❤️ for preserving Iranian handicrafts heritage**  
**ساخته شده با ❤️ برای حفظ میراث صنایع دستی ایرانی**

</div>
