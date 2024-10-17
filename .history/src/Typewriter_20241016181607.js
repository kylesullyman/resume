import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const fullText = "Kyle Sullivan - Computer Science Student";
  const speed = 150; // Speed of typing in milliseconds

  let index = -1;
  useEffect(() => {
    const typeWriter = () => {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriter, speed); // Continue typing
    }



    typeWriter(); // Start the typing effect

    setText("\n")

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
