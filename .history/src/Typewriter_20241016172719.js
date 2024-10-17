import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const fullText = "This is a typewriter effect where text appears letter by letter!";
  const speed = 1000; // Speed of typing in milliseconds

  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriter, speed); // Continue typing
      }
    };

    typeWriter(); // Start the typing effect

    return () => {
      // Clean up the timeout when the component unmounts
      setText(""); // Reset the text when the component unmounts or restarts
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <p style={{ fontFamily: 'Courier, monospace', whiteSpace: 'nowrap', borderRight: '2px solid' }}>
      {text}
    </p>
  );
};

export default Typewriter;
