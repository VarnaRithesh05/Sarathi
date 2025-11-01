# Sarathi (सारथी)
### Guiding Justice: A Transparent DBT Portal for PCR & PoA Act Beneficiaries

> A secure, transparent, and high-speed system to manage and disburse financial aid directly to victims under the Protection of Civil Rights (PCR) Act and Prevention of Atrocities (PoA) Act.

---

## 🚀 Live Demo & Pitch


* **Watch our video pitch:** **https://youtu.be/dM1jd4QEr_g**

---

## 🎯 The Problem

The Indian government provides crucial financial relief to victims of caste-based discrimination and incentives for inter-caste marriages under the PCR Act, 1955, and the PoA Act, 1989.

However, the current process for disbursing these funds is **largely manual, slow, and opaque**. This leads to:
* **Significant delays** in victims receiving critical financial aid.
* **Lack of transparency** and real-time tracking of funds.
* **High risk of errors** and misallocation.
* **Difficulty in auditing** and ensuring accountability.

Victims who are already in a vulnerable state are forced to navigate a difficult bureaucratic process to get the justice and relief they are entitled to.

## ✨ Our Solution: Sarathi

**Sarathi** (meaning *Charioteer* or *Guide*) is a comprehensive web and mobile-based platform that digitizes and automates the entire lifecycle of a relief claim.

It connects **victims**, **district authorities**, **social welfare departments**, and **financial institutions** on a single, transparent platform. Our system ensures that monetary relief is processed and disbursed through **Direct Benefit Transfer (DBT)** in a manner that is fast, secure, and auditable.



## 🔑 Key Features

### 1. For Beneficiaries (Victims)
* **Accessible Registration:** An easy-to-use portal (Web & Mobile) for victims to file a claim with minimal hassle, even from remote areas.
* **Simple Document Upload:** Securely upload necessary documents like FIR copies, caste certificates, and bank details (with integration to DigiLocker).
* **Real-time Status Tracking:** A transparent dashboard to track the application status at every stage: `Pending Review` -> `Approved by DA` -> `Funds Disbursed` -> `Credited`.
* **Grievance Redressal:** An integrated module to file a grievance or ask for help if a payment is delayed.

### 2. For Government Authorities (Admin Dashboard)
* **Automated Verification:** A secure admin portal for District Authorities to review claims.
* **Seamless Integration:** Designed for API-led integration with national databases like **CCTNS** (for FIR verification), **eCourts** (for case status), and **Aadhaar** (for e-KYC).
* **One-Click Sanction & DBT:** Once verified, officials can sanction the payment, which is then securely processed via the integrated financial system.
* **Audit Trail:** Every action is logged, creating an immutable audit trail for 100% transparency and accountability.

### 3. System & Architecture
* **API-First Design:** A robust set of APIs to connect all stakeholders (District Authorities, Social Welfare Depts., Banks).
* **Data Security:** Prioritizes victim privacy with end-to-end encryption and secure data handling practices.
* **Scalable & Resilient:** Built on a modern tech stack to handle a national-level caseload.

## 💻 Tech Stack

* **Frontend:** [e.g., React, Next.js, Flutter (for mobile)]
* **Backend:** [e.g., Node.js, Express.js]
* **Database:** [e.g., MongoDB, PostgreSQL, Firebase Firestore]
* **Authentication:** [e.g., JWT, Firebase Auth, OAuth 2.0]
* **File Storage:** [e.g., AWS S3, Firebase Storage]
* **Integrations:** [e.g., REST APIs for DigiLocker, Aadhaar (KYC)]
* **Deployment:** [e.g., Vercel, Netlify, AWS, Azure]

## 🛠️ How to Run Locally

### Prerequisites
* [Node.js (v18+)]
* [npm / yarn]
* [Git]

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR-USERNAME]/sarathi.git
    cd sarathi
    ```

2.  **Set up the Backend (Server):**
    ```bash
    cd server
    npm install
    ```
    * Create a `.env` file in the `/server` directory.
    * Add your environment variables (Database URL, JWT Secret, etc.).
    `    DATABASE_URL=...`
    `    JWT_SECRET=...`

3.  **Set up the Frontend (Client):**
    ```bash
    cd ../client
    npm install
    ```
    * Create a `.env` file in the `/client` directory.
    * Add your frontend environment variables (API base URL).
    `    REACT_APP_API_URL=http://localhost:5000/api`

4.  **Run the application:**
    ```bash
    # Run the backend server (from /server directory)
    npm run dev
    
    # Run the frontend app (from /client directory, in a new terminal)
    npm start
    ```

5.  Open `http://localhost:3000` in your browser.


## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.
