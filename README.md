# 🧠 AI-Powered Resume Matcher App

## 📘 Project Overview

**Resume Matcher App** is a full-stack web application that intelligently analyzes the compatibility between a candidate’s resume and a job description using advanced Natural Language Processing techniques.

It helps users assess how well their resume aligns with job postings and provides detailed feedback on missing or mismatched skills.

---

## 🔍 Key Features

- 📄 Resume–Job Description similarity scoring using **TF-IDF** and **Cosine Similarity**
- 🔐 Secure **user authentication and authorization** using **Supabase Auth** with **Row Level Security (RLS)**
- 📊 Skill gap analysis to identify missing skills and areas for improvement
- 📂 Supports **PDF** and **DOCX** resume parsing
- 🌐 Fully responsive and modern **ReactJS** frontend
- 📈 Clear relevance scores and actionable insights

---

## 🧰 Tech Stack

| Layer         | Technology Used                          |
|---------------|------------------------------------------|
| Frontend      | React.js, Tailwind CSS                   |
| Backend       | Python, Flask, REST API                  |
| NLP & ML      | spaCy, scikit-learn (TF-IDF, Cosine)     |
| Auth & DB     | Supabase Auth, PostgreSQL, RLS           |
| File Parsing  | `pdfminer.six`, `python-docx`            |
| Deployment    | Web-hosted (URL above)                   |

---

## 🛠 How to Edit or Contribute

You can update the app using either of the following methods:

### 💻 Working Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/resume-matcher.git
   cd resume-matcher
