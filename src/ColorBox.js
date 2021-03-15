import React, { useEffect, useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

const ColorBox = (props) => {
  const { name, background, paletteId, id, showLink } = props;
  const [copied, setCopied] = useState(false);
  const isDarkColor = chroma(background).luminance() <= 0.1; //true or false
  //   const isLightColor = chroma(background).luminance() >= 0.087;

  const changeCopiedState = () => {
    setCopied(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={changeCopiedState}>
      <div className="ColorBox" style={{ background: background }}>
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied && 'show'}`}
        ></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1 className={isDarkColor ? 'light-text' : 'dark-text'}>Copied</h1>
          <p className={isDarkColor ? 'light-text' : 'dark-text'}>
            {background}
          </p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? 'light-text' : 'dark-text'}>
              {name}
            </span>
          </div>
          <button
            className={`copy-button ${
              isDarkColor ? 'light-text' : 'dark-text'
            }`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span
              className={`see-more ${isDarkColor ? 'light-text' : 'dark-text'}`}
            >
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
