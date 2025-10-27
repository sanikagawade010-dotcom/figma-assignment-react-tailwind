# Figma Assignment — Cloud Computing Project

This project is a precise implementation of the provided **Figma design** using **React**, **Vite**, and **Tailwind CSS**.  
It recreates the exact layout, colors, spacing, hover effects, and visual interactions from the reference image.  
The left section is intentionally kept blank for laptop view alignment, as per the design.

---

## 📁 Project Structure

figma-assignment/
├── package.json
├── vite.config.js
├── postcss.config.cjs
├── tailwind.config.cjs
├── index.html
└── src/
├── main.jsx
├── index.css
├── App.jsx
└── components/
├── AboutWidget.jsx
├── GalleryWidget.jsx
└── TabButton.jsx


---

##  Installation and Setup

Follow these steps to run the project locally:

### 1. Open the project in VS Code
Extract or clone the project folder and open it in **Visual Studio Code**.


### 2. Install dependencies
Run the following command in the integrated terminal:

npm install


### 3. Start the development server
npm run dev

You’ll get a link like:

http://localhost:5173

Open it in your browser.


### 4. Build for production
npm run build


### 5. Preview the build
npm run preview


### 6. Deploy (Optional)
To host your project on **Vercel** or **Netlify**:
- **Build Command:** `npm run build`  
- **Publish Directory:** `dist`


## Features Implemented

### Gallery Widget
- Three images are displayed **horizontally in one line** (perfectly aligned).  
- **Add Image** button allows uploading new pictures dynamically.  
- Left and right **arrow buttons** navigate images smoothly.  
- Arrows have a **circular bluish-grey hover effect**.  
- The gallery title and spacing exactly match the Figma layout.  

### About Widget
- Contains three sections: **About Me**, **Experiences**, and **Recommended**.  
- All sections are **black by default**.  
- On hover, only the hovered box turns **greyish**, while others stay black.  
- The box size now matches the gallery widget’s width.  
- Smooth transitions and border-radius match the original design.  

### Layout and Design
- Exact background and text colors as per Figma.  
- **Thick horizontal lines** separate widgets for clear sectioning.  
- Fully responsive layout aligned with laptop view.  
- Pixel-perfect implementation: borders, opacity, radius, and color effects.  

---

## Technologies Used

- **React 18**
- **Vite 5**
- **Tailwind CSS 3.4**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**

---

## Notes

- The layout matches the reference image in **color, size, and effect**.  
- All hover effects behave dynamically as per user interactions.  
- The left half remains empty to maintain Figma’s responsive spacing.  
- Each widget is modular, reusable, and easy to modify.  

---
## Author

**Sanika Gawade**  
Cloud Computing Project — Figma UI Implementation  
Developed as part of an internship assignment using React + Tailwind.

---

## Summary

This project showcases a complete **Figma to functional UI conversion** using modern frontend technologies.  
It demonstrates understanding of **React components**, **Tailwind CSS styling**, and **user interface interactivity** — fulfilling both aesthetic and functional requirements of the design.