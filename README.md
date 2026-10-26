<div align="center">

# 🐾 PawMart

### Pet Adoption, Supply & Accessories Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pawmart777.netlify.app-brightgreen?style=for-the-badge&logo=netlify)](https://pawmart777.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-aftabuddin007-181717?style=for-the-badge&logo=github)](https://github.com/aftabuddin007)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

*Connecting pet lovers, breeders, and buyers — because every pet deserves a loving home.*

</div>

---

## 📖 Overview

**PawMart** is a community-driven, full-stack pet adoption and supply marketplace that unifies pet owners, breeders, and buyers in a single digital platform. Built around an **"Adopt, Don't Shop"** philosophy, it also supports everyday pet commerce — food, accessories, and care products.

The platform delivers a seamless experience with secure authentication, private routes, CRUD-based listing management, order tracking, and downloadable PDF reports — all wrapped in a clean, fully responsive interface.

---

## 🌐 Live Demo

🔗 **[https://pawmart777.netlify.app](https://pawmart777.netlify.app/)**

---

## 📸 Screenshots

| Home Page | Dashboard / Listings |
|:---------:|:--------------------:|
| ![Home](https://i.ibb.co.com/9m1cbzFy/image.png) | ![Listings](https://i.ibb.co.com/5X3tk30C/image.png) |

---

## ✨ Features

- 🐾 **Adopt-first marketplace** for pets and supplies
- 🔐 **Firebase Authentication** — Email/Password and Google Sign-In
- 🔒 **Private routes** for all user-specific actions
- 🧾 **Full CRUD** — add, update, and delete listings
- 🛒 **Order system** with structured order management
- 📄 **PDF export** for order reports via jsPDF + AutoTable
- 🔍 **Category filtering** for streamlined browsing
- 🔔 **Toast & SweetAlert notifications** for all user interactions
- 📱 **Fully responsive** across mobile, tablet, and desktop

---

## 🗂️ Pages & Functionality

### Public Pages
| Page | Description |
|------|-------------|
| **Home** | Banner, categories, recent listings, hero & awareness sections |
| **Pets & Supplies** | Browse all listings with category-based filtering |
| **Login / Register** | Firebase-powered authentication |

### Private Pages
| Page | Description |
|------|-------------|
| **Add Listing** | Create new pet or product listings |
| **Listing Details** | Full details view with order modal |
| **My Listings** | Manage personal listings — edit or delete |
| **My Orders** | View all orders and download PDF report |

### System Pages
| Page | Description |
|------|-------------|
| **404** | Custom not-found page (no Navbar/Footer) |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React | UI framework |
| React Router | Client-side routing |
| Tailwind CSS | Styling & responsive layout |
| Firebase Authentication | Secure user auth |
| React Hot Toast / SweetAlert2 | User notifications |
| jsPDF + jsPDF-AutoTable | PDF report generation |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | RESTful API framework |
| MongoDB | Database |

---

## ⚙️ Architecture & Functional Flow

```
User Registration / Login (Firebase)
        ↓
Browse Pets & Products (Category Filtering)
        ↓
View Listing Details
        ↓
Place Order (Authenticated Modal Form)
        ↓
Manage Listings & Orders (Private Dashboard)
        ↓
Download PDF Order Report (jsPDF)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance (local or Atlas)
- Firebase project credentials

### 1. Clone the Repository

```bash
# Frontend
git clone https://github.com/aftabuddin007/pawmart-client

# Backend
git clone https://github.com/aftabuddin007/pawmart-server
```

### 2. Install Dependencies

```bash
# Frontend
cd pawmart-client
npm install

# Backend
cd pawmart-server
npm install
```

### 3. Configure Environment Variables

**Frontend** — create a `.env.local` file:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_API_BASE_URL=http://localhost:5000
```

**Backend** — create a `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the Application

```bash
# Start backend
cd pawmart-server
npm start

# Start frontend
cd pawmart-client
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🧠 Technical Highlights

- **Scalable REST API** built with Node.js & Express
- **Secure authentication** using Firebase with JWT concepts
- **Optimized data fetching** and client-side state management
- **PDF generation** with jsPDF & AutoTable for real-world usability
- **Mobile-first** responsive design with Tailwind CSS
- **Dynamic routing** with React Router protected routes
- **Real-time feedback** via Toast and SweetAlert notifications

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/aftabuddin007/pawmart-client/issues).

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by [Aftabuddin](https://github.com/aftabuddin007)

⭐ Star this repo if you found it useful!

</div>
