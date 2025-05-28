import React, { useState } from 'react';

export default function Task5() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>🧭 Character Counter</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}
