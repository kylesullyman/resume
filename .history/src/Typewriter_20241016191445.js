import React, { useState, useEffect } from "react";

const Typewriter = ({text: fullText }) => {
  const [text, setText] = useState("");
  const fullText = "Kyyle Sullivan - Computer Science\n Student";
  const speed = 150; // Speed of typing in milliseconds

  let index = 0;
  useEffect(() => {
    const typeWriter = () => {
        if(index < fullText.length){
            setText((prev) => prev + fullText.charAt(index));
            index++;
        }else {
            clearInterval(interval);
        }
    };
    
    const interval = setInterval(typeWriter, speed);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <p style={{ fontFamily: 'Courier, monospace', whiteSpace: 'nowrap', borderRight: '2px solid' }}>
      {text}
    </p>
  );
};

export default Typewriter;
