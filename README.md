 # Job Tracker Chrome Extension with Spring Boot Backend

A productivity tool that helps job seekers efficiently manage and track their job applications directly from the Chrome browser.  
The project consists of a feature-rich Chrome extension frontend and a secure, scalable Java Spring Boot backend for persistent storage and advanced functionality.

---

## 🏗️ Architecture


 
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                          Chrome Extension (Frontend)                        │
 │                                                                             │
 │ ┌───────────────┐           ┌───────────────────┐          ┌─────────────┐  │
 │ │ Popup UI      │ ◄────────►│ Content Scripts   │◄────────►│ Background  │  │
 │ │(HTML/CSS/JS)  │           │(Extract Job Data) │          │  Scripts    │  │
 │ └───────────────┘           └───────────────────┘          └─────────────┘  │
 │       ▲                               ▲                          ▲          │
 │       │                               │                          │          │
 │       ▼                               ▼                          ▼          │
 │ ┌─────────────────────────────────────────────────────────────────────────┐ │
 │ │                 Chrome Extension APIs (Browser Storage)                 │ │
 │ └─────────────────────────────────────────────────────────────────────────┘ │
 │       ▲                               ▲                          ▲          │
 │       │                               │                          │          │
 │       ▼                               ▼                          ▼          │
 │ ┌─────────────────────────────────────────────────────────────────────────┐ │
 │ │              HTTP Client (Fetch/Axios - API Requests)                   │ │
 │ └─────────────────────────────────────────────────────────────────────────┘ │
 └───────────────────────────────────────────┬─────────────────────────────────┘
                                             │
                                             │ (REST API - JSON)
                                             ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                   Java Spring Boot Application (Backend)                    │
 │                                                                             │
 │ ┌─────────────────┐      ┌────────────────────┐      ┌───────────────────┐  │
 │ │ REST Controllers│◄────►│  Service Layer     │◄────►│ Repository Layer  │  │
 │ └─────────────────┘      └────────────────────┘      └───────────────────┘  │
 │                                                              ▲              │
 │                                                              │              │
 │                                                         ┌───────────┐       │
 │                                                         │ Database  │       │
 │                                                         │ (MySQL or │       │
 │                                                         │ PostgreSQL│       │
 │                                                         └───────────┘       │
 └─────────────────────────────────────────────────────────────────────────────┘
