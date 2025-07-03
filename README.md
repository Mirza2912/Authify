# 🔐 Authify — MERN Stack Authentication System

A modern, secure, and complete authentication system built with the **MERN stack** (MongoDB, Express, React, Node.js). Authify provides all essential user auth features — including email verification, profile management, and account deletion — in a clean, scalable structure.

![Authify Banner](![Screenshot (10)](https://github.com/user-attachments/assets/74a1166e-9992-49d9-84c3-f907390d5f43)
) <!-- Replace with your banner image -->

---

## ✨ Features

- ✅ User Registration with Email Verification
- 🔒 JWT Authentication & Authorization
- 📧 Email Verification using Nodemailer + emailvalidation.io
- 🔁 Forgot Password & Reset Password Flow
- ⚙️ Update Profile (Name, Email, Phone, Avatar)
- 🔄 Change Password
- 🗑️ Delete Account (fully removes from DB)
- ☁️ Avatar Upload with Cloudinary
- 🛡️ Middleware for Protected Routes
- 🌍 Clean API Responses & Error Handling

---

## 🛠️ Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React, Tailwind CSS, Axios  |
| Backend   | Node.js, Express, Mongoose  |
| Database  | MongoDB                     |
| Auth      | JWT, bcrypt                 |
| Email     | Nodemailer, emailvalidation.io |
| File Upload | Cloudinary                |
| Deployment | Railway / Vercel / Netlify |

---

## 📦 Project Structure

authify/
├── client/ # React Frontend
├── server/ # Express Backend
│ ├── Controllers/
│ ├── Models/
│ ├── Routes/
│ ├── Middleware/
│ ├── Utils/
│ └── config/
└── README.md


---

## 📸 Screenshots
![Register Page](![Screenshot (12)](https://github.com/user-attachments/assets/ea9dc142-b1a8-4e74-9aec-0d70e8a57e20)
)


---

## ⚙️ Environment Variables

Create a `.env` file inside the `/server` folder:

```env
PORT=4000
MONGODB_URI=your_mongo_db_uri
ACCESS_TOKEN_SECRET_KEY=your_jwt_secret_key

EMAIL_VALIDATION_API_KEY=your_emailvalidation_api_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_email_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret

# Clone the repo
git clone https://github.com/your-username/authify.git
cd authify

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install


### 🧠 Important Notes
-Emails are validated with emailvalidation.io

-Verification codes expire in 10 minutes

-Users who try to re-register are limited by attempts

-Secure password hashing with bcrypt

-Session handled with HTTP-only cookies


📤 Deployment
You can deploy the backend on:

Railway


Frontend can be deployed on:

Vercel


🙋‍♂️ Author
Muhammad Tayyab
