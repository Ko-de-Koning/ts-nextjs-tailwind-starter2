import React, { useState } from 'react';

export default function Pill() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible(false);
  };
  return visible ? (
    <div className='inline-flex rounded-full bg-groen py-2 px-4 text-white hover:bg-teal-200'>
      <span>Lorem Ipsum</span>
      <button onClick={removeElement}>
        <span>&times;</span>
      </button>
    </div>
  ) : (
    <></>
  );
}
