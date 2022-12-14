import React, { useState, useEffect } from 'react';

const Counter = ({ targetValue }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue(prevValue => {
        if (prevValue >= targetValue) {
          clearInterval(interval);
          return targetValue;
          // return 0;
        }
        return prevValue + Math.ceil(targetValue / 33 * 1.123456789);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [targetValue]);

  return <span>{currentValue}</span>;
}

export default Counter;
