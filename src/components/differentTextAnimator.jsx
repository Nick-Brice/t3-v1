import React, { useState, useEffect } from 'react';

const DifferentTextAnimator = ({ targetText }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentText(prevText => {
        if (i >= targetText.length) {
          clearInterval(interval);
          return targetText;
        }
        return prevText + String.fromCharCode(97 + (targetText.charCodeAt(i++) - 97));
      });
    }, 200);
    return () => clearInterval(interval);
  }, [targetText]);

  return <span>{currentText}</span>;
}

export default DifferentTextAnimator;
