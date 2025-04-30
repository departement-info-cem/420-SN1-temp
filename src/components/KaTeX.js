import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function KaTeX({ children, block = false }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}