import React, { useState, useEffect } from "react";

const Typewriter = ({text: fullText, speed = 100, onComplete }) => {
  const [text, setText] = useState("");

  let index = 0;
  useEffect(() => {
    const typeWriter = () => {
        if(index < fullText.length){
            setText((prev) => prev + fullText.charAt(index));
            index++;
        }else {
            clearInterval(interval);
            if (on)
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
