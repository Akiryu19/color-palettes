import React, { useEffect, useState } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = (props) => {
  const { name, background } = props;
  const [copied, setCopied] = useState(false);
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
          <h1>Copied</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>

        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
