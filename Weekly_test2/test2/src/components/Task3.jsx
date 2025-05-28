import React, { useState } from 'react';

export default function Task3() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? '#333' : '#fff',
      color: dark ? '#fff' : '#000',
      padding: 20,
      marginTop: 20
    }}>
      <h2>🧭 Dark/Light Theme Toggle</h2>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
}
