# weaalth_map
# 💰 Wealth Map – Visualizing Property & Wealth Distribution
## 🏆 Recognition

Wealth Map was selected among the **Top 50 teams** in a prestigious innovation challenge for its **technical innovation, societal impact**, and **real-world applicability** in visualizing wealth and property data.

> 💡 *"Recognized for transforming raw, complex property data into intuitive, interactive visualizations that can drive real-world policy and planning."*

---
## 🌐 Overview

Wealth Map is a **full-stack web application** designed to make **property and wealth data** transparent, interactive, and accessible via dynamic map-based visualizations.

This platform bridges the gap between **governments, researchers, and citizens**, enabling real-time tracking and exploration of wealth patterns based on property ownership and value.

---

## 🚀 Features

- 🔐 **User Authentication** (Register/Login)
- 🗺️ **Interactive Map** using Leaflet.js
- 📍 **Geolocation of Properties**
- 💰 **Display of Property Value & Net Worth**
- 🧾 **Polygon-based Land Visualization**
- 🧑‍💼 **Rich Info on Hover**: Owner, Value, Net Worth
- 🧠 **Secure Session Handling**
- 🛠️ **Scalable Backend & Database Integration**

---

## 🧱 Tech Stack

| Layer         | Technology                  |
|--------------|------------------------------|
| Frontend     | HTML, CSS, JavaScript        |
| Map Engine   | Leaflet.js                   |
| Backend      | Node.js, Express.js          |
| Database     | MySQL                        |

---

## 🗃️ Database Design

### Users Table
| Field   | Type     | Description         |
|---------|----------|---------------------|
| id      | INT (PK) | Unique user ID       |
| name    | VARCHAR  | User's name          |
| email   | VARCHAR  | User's email (unique)|
| password| VARCHAR  | Encrypted password   |

### Properties Table
| Field       | Type     | Description                      |
|-------------|----------|----------------------------------|
| id          | INT (PK) | Unique property ID               |
| name        | VARCHAR  | Property name                    |
| lat, lng    | FLOAT    | Geolocation coordinates          |
| property_type| VARCHAR | Residential/Commercial etc.      |
| value       | FLOAT    | Property value                   |
| networth    | FLOAT    | Calculated net worth             |
| polygon     | JSON     | Area boundaries (for large plots)|


---

## 💼 Use Cases

- 🏙️ **Urban Planning**
- 🧾 **Tax Analysis**
- 🏠 **Real Estate Research**
- 📊 **Wealth Distribution Studies**

---

## 💡 Business Model

- 💳 **Subscription-based Analytics Dashboard**
- 🔌 **API Access for Real Estate Firms**
- 🏛️ **Custom Government Portals**

---

## 🛣️ Roadmap (Future Plans)

- Add **ReactJS/NextJS frontend** for modern UI/UX
- Integrate **GoLang** backend for performance
- Enable **GeoJSON export/import**
- Add **Admin dashboard** for analytics
- Support **Cloud hosting (Azure/AWS)**

---

## 📈 Final Impact

Wealth Map transforms raw, siloed property data into **visual intelligence** for better **policy-making, research, and transparency**. It empowers users with insights into wealth distribution in an interactive, secure, and scalable way.

> _“We map the future of wealth!”_




## deployment
https://wealthmap-yuv5.onrender.com
