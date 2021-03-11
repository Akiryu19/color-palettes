import React from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = (props) => {
  const { name, background } = props;
  return (
    <CopyToClipboard text={background}>
      <div className="ColorBox" style={{ background: background }}>
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
