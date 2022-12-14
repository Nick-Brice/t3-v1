import React, { useState, useEffect } from 'react';

const DifferentCounter = ({ targetValue }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const targetValueString = targetValue.toString();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentValue(prevValue => {
        if (i >= targetValueString.length) {
          clearInterval(interval);
          return targetValue;
        }
        return parseInt(prevValue.toString() + "0".repeat(i) + targetValueString[i++], 10);
      });
    }, 200);
    return () => clearInterval(interval);
  }, [targetValue]);

  return <span>{currentValue}</span>;
}

export default DifferentCounter;
