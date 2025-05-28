import React, { useState } from 'react';

const faqs = [
  { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'What is a component?', answer: 'A component is a reusable piece of UI.' },
  { question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript that looks like HTML.' },
];

export default function Task1() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2>🧭 FAQ Accordion</h2>
      {faqs.map((item, index) => (
        <div key={index}>
          <h4 onClick={() => toggle(index)} style={{ cursor: 'pointer' }}>
            {item.question}
          </h4>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
