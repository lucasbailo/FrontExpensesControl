# 📘 Project Documentation

## 📁 Overview

This project is a React + TypeScript + Vite application structured to support scalable front‑end development. Below you will find a detailed explanation of each folder and file, as well as setup instructions.

---

# 📂 Project Structure

```
src
├── assets
│   └── react.svg
├── components
│   ├── ConfirmDelete.tsx
│   ├── ExpenseModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   └── SideBar.tsx
├── hooks
│   ├── useDashboard.ts
│   ├── useExpense.ts
│   ├── useLogin.ts
│   ├── useLogout.ts
│   └── useRegister.ts
├── Pages
│   ├── Dashboard.tsx
│   ├── Expenses.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Register.tsx
├── services
│   └── api.ts
├── AppRoutes.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

---

# 📁 Folder & File Documentation

## **assets/**

Contains static content such as logos and images.

* **react.svg** — Default React logo.

---

## **components/**

Reusable UI components.

* **ConfirmDelete.tsx** — Modal for delete confirmations.
* **ExpenseModal.tsx** — Modal for creating/editing expense entries.
* **Footer.tsx** — Global application footer.
* **Header.tsx** — Application header with navigation/user info.
* **Layout.tsx** — Wrapper component organizing layout structure.
* **LoginForm.tsx** — Login form component.
* **RegisterForm.tsx** — Registration form component.
* **SideBar.tsx** — Sidebar for navigation.

---

## **hooks/**

Custom hooks encapsulating business logic.

* **useDashboard.ts** — Dashboard logic and data handling.
* **useExpense.ts** — CRUD operations for expenses.
* **useLogin.ts** — Login logic and state.
* **useLogout.ts** — Logout logic.
* **useRegister.ts** — User registration logic.

---

## **Pages/**

Main application pages used in routing.

* **Dashboard.tsx** — Overview screen.
* **Expenses.tsx** — Expense management screen.
* **Home.tsx** — Landing/home page.
* **Login.tsx** — Login page.
* **Register.tsx** — Account creation page.

---

## **services/**

Service layer for API integration.

* **api.ts** — API client configuration (e.g., axios instance).

---

## **Root Files**

### **AppRoutes.tsx**

Defines application routes.

### **index.css**

Global stylesheet.

### **main.tsx**

Application entry point.

### **vite-env.d.ts**

TypeScript definitions required by Vite.

---

# 🚀 Getting Started

## **Prerequisites**

* Node.js 18+
* npm, yarn, or pnpm

## **Install Dependencies**

```
npm install
```

Or:

```
yarn install
```

## **Run Development Server**

```
npm run dev
```

## **Build for Production**

```
npm run build
```

## **Preview Production Build**

```
npm run preview
```

---

# 🧪 Technologies Used

* React
* TypeScript
* Vite
* Custom Hooks Architecture
* Axios (via api.ts)

---

# 📄 License

This project is for personal or educational use unless a license is added.

---
