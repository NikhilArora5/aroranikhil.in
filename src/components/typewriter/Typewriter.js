import { useState, useEffect } from "react";
import "./Typewriter.scss"
export const Typewriter = ({ texts, speed = 100, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    const typeEffect = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay); // Wait before deleting
        }
      } else {
       
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length); // Move to next text
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(typeEffect);
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return (
    <h2 className="typewriter-text">
      {displayedText}
      <span className="animate-blink">|</span>
    </h2>
  );
};


