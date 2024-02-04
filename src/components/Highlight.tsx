"use client";

import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import { useEffect, useRef, useState } from "react";

import "highlight.js/styles/monokai-sublime.css";

type HighlightProps = {
  children: React.ReactNode;
};

const Highlight = ({ children }: HighlightProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const codeNode = useRef(null);
  const language = "json";

  useEffect(() => {
    try {
      hljs.registerLanguage(language, json);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
      throw Error(`Cannot register the language ${language}`);
    }
  }, []);

  useEffect(() => {
    codeNode && codeNode.current && hljs.highlightElement(codeNode.current);
  });

  if (!isLoaded) return null;

  return (
    <pre className="rounded">
      <code ref={codeNode} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default Highlight;
