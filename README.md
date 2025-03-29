# EduConnect Platform 

## Project Overview

EduConnect is a modern educational platform that provides:
- **Role-based access** for students (with UID) and teachers (with Ecode)
- **Flexible database architecture** 
- **Secure authentication** with JWT, OTP verification, and reCAPTCHA
- **Responsive UI** built with React and modern CSS practices

### Key Features
- Dual database support with seamless switching
- Comprehensive authentication system
- Student/teacher role management
- API services abstracted for database independence
- Dockerized development environment

## Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18.2 |
| React Router | Navigation | 6.14 |
| Axios | HTTP Client | 1.4 |
| Formik + Yup | Form Management | 3.0 |
| Context API | State Management | Built-in |
| Sass | CSS Preprocessor | 1.66 |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| Node.js | Runtime | 18.16 |
| Express | Web Framework | 4.18 |
| Sequelize | PostgreSQL/MySQL ORM | 6.32 |
| Mongoose | MongoDB ODM | 7.4 |
| jsonwebtoken | JWT Implementation | 9.0 |
| Redis | OTP Storage | 4.6 |
| Nodemailer | Email OTP | 6.9 |
| google-recaptcha | CAPTCHA Service | 3.0 |

## Project Structure
