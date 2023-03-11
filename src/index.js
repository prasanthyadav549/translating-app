import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';


// const resources = {
//   en: {
//     translation: {
//       'Welcome to my app': 'Welcome to my app',
//       'Hello, {{name}}!': 'Hello, {{name}}!',
//       'This is a paragraph of text.': 'This is a paragraph of text.',
//       'Click me!': 'Click me!',
//     },
//   },
//   es: {
//     translation: {
//       'Welcome to my app': 'Bienvenido a mi aplicación',
//       'Hello, {{name}}!': '¡Hola, {{name}}!',
//       'This is a paragraph of text.': 'Este es un párrafo de texto.',
//       'Click me!': '¡Haz clic en mí!',
//     },
//   },
//   fr: {
//     translation: {
//       'Welcome to my app': 'Bienvenue sur mon application',
//       'Hello, {{name}}!': 'Bonjour, {{name}}!',
//       'This is a paragraph of text.': 'Voici un paragraphe de texte.',
//       'Click me!': 'Cliquez sur moi!',
//     },
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'en',
//   interpolation: {
//     escapeValue: false, // react already safes from xss
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

