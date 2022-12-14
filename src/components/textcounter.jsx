import React, { useState, useEffect } from 'react';

const TextAnimator = ({ targetText }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentText(prevText => {
        if (i >= targetText.length) {
          clearInterval(interval);
          return targetText;
        } else if (i == 0) {
          return prevText + targetText[i] + targetText[i + 1]
        } else {
          return prevText + targetText[i];
        }
      });
      i++;
    }, 20);
    return () => clearInterval(interval);
  }, [targetText]);

  return <span>{currentText}</span>;
}

export default TextAnimator;
