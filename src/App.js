import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [language, setLanguage] = useState('en');
  const [content, setContent] = useState(['hello world', 'dev community']);
  const [translations, setTranslations] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const fetchTranslations = async () => {
    const { data } = await axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: content,
          target: language,
          key: API_KEY,
        },
      }
    );
    setTranslations(data.data.translations);
  };

  useEffect(() => {
    fetchTranslations();
  }, [language]);

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <div>
        <h1>original text</h1>
      </div>
      {translations.map((text, index) => (
        <div key={index}>
          <h2>{text.translatedText}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
