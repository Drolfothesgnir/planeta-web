import React from 'react';
import imageSrc from '../../assets/images/logo.png';

export default function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={imageSrc} alt="logo" />
      </a>
    </div>
  );
}
