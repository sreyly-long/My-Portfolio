import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one for a typewriter effect.
 * Returns the current visible substring.
 */
export default function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const current = words[wordIndex % words.length];

    // Finished typing the full word → pause, then start deleting.
    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(hold);
    }

    // Finished deleting → move to the next word.
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const timer = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
