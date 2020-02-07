import React from 'react';
import imageSrc from '../../../assets/images/logo.svg';

export default function Logo(props) {
  return (
    <div className={`${props.className || ''} logo`}>
      <a href="/">
        <img src={imageSrc} alt="logo" />
      </a>
    </div>
  );
}
