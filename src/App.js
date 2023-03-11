import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [language, setLanguage] = useState('en');
 // const [prevLanguage, setPrevLanguage] = useState('en');
  const [content, setContent] = useState(['hello world', 'dev community']);
  const [translated, setTranslated] = useState('');
 // const [inputText, setInputText] = useState('');
 // const [translatedText, setTranslatedText] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const handleLanguageChange = (e) => {
   // setPrevLanguage(language);
    setLanguage(e.target.value);
  };

  // const handleInputChange = (e) => {
  //   setInputText(e.target.value);
  // };


  const fetchTranslated = async () => {
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
    setTranslated(data.data.translations[0].translatedText);
    console.log('translatedText' ,translated)
  };
  
  // const fetchTranslatedText = async () => {
  //   const { data } = await axios.post(
  //     'https://translation.googleapis.com/language/translate/v2',
  //     {},
  //     {
  //       params: {
  //         q: inputText,
  //         target: language,
  //         key: API_KEY,
  //       },
  //     }
  //   );
  //   console.log(data.data.translations[0].translatedText)
  //   setTranslatedText(data.data.translations[0].translatedText);
  //   console.log(inputText)
  // };

  useEffect(() => {
    fetchTranslated();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <h2>{translated}</h2>
      </div>

      {/* <input type="text" value={translatedText} onChange={handleInputChange} /> */}
    </div>
  );
}

export default App;

















// function App() {
//   const [language, setLanguage] = useState('en');
//   const [inputText, setInputText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');
//   const API_KEY = process.env.REACT_APP_API_KEY;

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };
//   const changeToEnglish = async (content) => {

//     const { data } = await axios.post(
//       'https://translation.googleapis.com/language/translate/v2',
//       {},
//       {
//         params: {
//           q: content,
//           target: 'en',
//           key: API_KEY,
//         },
//       }
//     );
//     setInputText(data.data.translations[0].translatedText);

//   }
//   const translate = async()=> {
//     const { data } = await axios.post(
//       'https://translation.googleapis.com/language/translate/v2',
//       {},
//       {
//         params: {
//           q: inputText,
//           target: language,
//           key: API_KEY,
//         },
//       }
//     );
//     setTranslatedText(data.data.translations[0].translatedText);
//   }

//   const handleInputChange = async (e) => {
//     changeToEnglish(e.target.value)
//     translate()
    
//     console.log('translatedText',translatedText);
//     console.log('originalText' ,inputText);
//   };
    

//   useEffect(() => {
    
//       changeToEnglish(inputText);
//       translate();
    
      
    
//   }, [language])
  
    
//   return (

//     <div>
//     <div>
//       <select value={language} onChange={handleLanguageChange}>
//         <option value="en">English</option>
//         <option value="es">Spanish</option>
//         <option value="fr">French</option>
//       </select>
//       </div>
//       <div>
//         <h2>welcome to dev world</h2>
//         <h2>welcome to dev world</h2>
//         <h2>welcome to dev world</h2>
//       </div>
//       <input type="text" value={language==='en'?inputText: translatedText} onChange={handleInputChange} />
//       <div>
//         <h3>originalText: {inputText}</h3>
//       </div>
//     </div>
//   );
// }

// export default App;
