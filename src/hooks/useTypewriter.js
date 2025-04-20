import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 50, pause = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    const typingSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLoopNum((prev) => (prev + 1) % texts.length);
    }
  }, [texts, charIndex, isDeleting, speed, pause, loopNum]);

  return text;
};

export default useTypewriter; 