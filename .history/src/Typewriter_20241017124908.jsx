import React, {useState, useEffect} from "react";

const Typewriter = ({text: fullText, speed = 100, onComplete}) => {
    const [text, setText] = useState("");

    useEffect(() => {
        setText("")
        let index = 0;
        const typeWriter = () => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                if (onComplete) {
                    onComplete();
                }
            }
        };

        const interval = setInterval(typeWriter, speed);

        return () => clearInterval(interval);
    }, [fullText, speed, onComplete]); // Empty dependency array to run the effect once on mount

    return (
        <p style={{fontFamily: 'Courier, monospace', whiteSpace: 'nowrap', borderRight: '2px solid'}}>
            {text}
        </p>
    );
};

export default Typewriter;
