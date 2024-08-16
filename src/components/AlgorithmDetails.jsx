import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import bubbleSortJS from '../code/javascript/bubbleSort';
import bubbleSortPython from '../code/python/bubbleSort';
import bubbleSortC from '../code/c/bubbleSort';

function AlgorithmDetails({ algorithm }) {
  const [language, setLanguage] = useState('JavaScript');

  const code = {
    'JavaScript': bubbleSortJS,
    'Python': bubbleSortPython,
    'C': bubbleSortC,
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="algorithm-details">
      <div className="language-select">
        <label>Select Language: </label>
        <select onChange={handleLanguageChange}>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C">C</option>
        </select>
      </div>
      <SyntaxHighlighter language={language.toLowerCase()} style={vs}>
        {code[language]}
      </SyntaxHighlighter>
    </div>
  );
}

export default AlgorithmDetails;
