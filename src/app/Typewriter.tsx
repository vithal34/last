import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (index < text.length) {
        setCurrentText(currentText + text[index]);
        setIndex(index + 1);
        setTimeout(type, speed);
      }
    };

    type();
  }, [text, speed, index]);

  return <span className="typing">{currentText}</span>;
};

export default Typewriter;
