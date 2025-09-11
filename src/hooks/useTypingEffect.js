import { useEffect, useRef, useState } from 'react';

/**
 * 自定義 Hook 用於實現打字機效果
 * @param {string} text - 要顯示的文字
 * @param {number} speed - 打字速度（毫秒）
 * @returns {object} { ref, isTyping }
 */
export const useTypingEffect = (text, speed = 70) => {
  const divRef = useRef(null);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!divRef.current || !text) return;

    let typingTimer = null;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex === 0) {
        divRef.current.textContent = "";
        setIsTyping(true);
      }

      if (currentIndex < text.length) {
        divRef.current.textContent += text[currentIndex];
        currentIndex++;
        typingTimer = setTimeout(typeText, speed);
      } else {
        setIsTyping(false);
      }
    };

    typeText();

    return () => {
      if (typingTimer) {
        clearTimeout(typingTimer);
      }
    };
  }, [text, speed]);

  return { ref: divRef, isTyping };
};
