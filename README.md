# 🧪 OrangeHRM UI Automation Suite - WIP

This project automates **end-to-end UI test scenarios** for the [OrangeHRM Demo Application](https://opensource-demo.orangehrmlive.com) using **Playwright + TypeScript**. The primary goal is to ensure that core functionalities across various OrangeHRM modules work as expected through reliable, maintainable, and scalable UI tests.

---

## 🚀 Project Objective

Automate and validate key workflows of the OrangeHRM platform including:

- ✅ Login & authentication
- ✅ Admin module (user management, roles)
- ✅ PIM (employee management)
- ✅ Leave management
- ✅ Dashboard components
- ✅ Search, filter, form validation, and navigation
- ✅ TBU


---

## ⚙️ Tech Stack

| Tool         | Purpose                            |
|--------------|------------------------------------|
| 🎭 Playwright | UI automation framework            |
| 🟦 TypeScript | Type-safe scripting                |
| 🧪 Expect     | Built-in assertions for Playwright |
| 🐙 GitHub Actions | CI/CD pipeline support           |
| 📦 Node.js   | Package manager & environment      |

---

## 📁 Project Structure - WIP

```
.
├── tests/                             # UI test files
│   ├── login/
│   ├── adminSectionTests/
│   ├── pimTests/
│   └── leaveTests/
├── pages/                             # Page Object Model
│   ├── Login/
│   ├── Admin/
│   ├── PIM/
│   └── Leave/
├── utils/                             # Constants, test data, helpers
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 🧪 Test Cases Coverage

- ✅ **User Authentication/Should allow users to log in**
- ✅ **User Authentication Validation/Should not allow users to log when username and password invalid**
- ✅ **User Authentication Validation/Should not allow users to log when username missing**
- ✅ **User Authentication Validation/should not allow users to log when password missing**
- ✅ **Search user by options/Should allow users to search by username**
- ✅ **Search user by options/Should allow users to filter by user role**
- ✅ **Search user by options/Should allow users to search by employee name**
- ✅ **Search user by options/Should allow users to filter by status**
- ✅ **WIP**


---

## 🔧 Getting Started

### 1. Clone the repo and install dependencies

```bash
git clone [https://github.com/Hanna-Ismahilova-QA/Playwright---UI.git]
cd Playwright---UI
npm install
```

### 2. Run all tests

```bash
npx playwright test
```

### 3. Run a specific test file

```bash
npx playwright test tests/hr-functional/userLogin.spec.ts
```

### 4. Run in debug mode

```bash
npx playwright test ests/hr-functional/userLogin.spec.ts --debug
```

### 5. Run in headed mode

```bash
npx playwright test ests/hr-functional/userLogin.spec.ts --headed
```

---

## 🌍 Target Application

- URL: [https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)
- Public credentials (for demo use):
  - **Username**: `Admin`
  - **Password**: `admin123`

---

## 📌 Best Practices Followed

- 🧱 Page Object Model (POM)
- 🔄 Reusable locators and methods
- 🧼 Clean separation of test data and test logic
- 🧪 Reliable wait strategies for dynamic content
- ✅ Assertions focused on user-visible outcomes

---

## ✅ CI/CD Integration (Optional)

To run tests automatically on push or PR via GitHub Actions:

- Add `.github/workflows/playwright.yml`
- Configure browser setup & test runs
- Include artifacts for screenshots/videos on failure
