import React, { useEffect, useState } from 'react';
// import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
// import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyle';

const ColorBox = (props) => {
  const { name, background, paletteId, id, showFullPalette, classes } = props;
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
      <div className={classes.ColorBox} style={{ background: background }}>
        <div
          style={{ background: background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        ></div>
        <div
          className={`${classes.copyMessage} ${
            copied && classes.showCopyMessage
          }`}
        >
          <h1 className={classes.textColor}>Copied</h1>
          <p className={classes.textColor}>{background}</p>
        </div>
        <div>
          <div className={classes.BoxContent}>
            <span className={classes.textColor}>{name}</span>
          </div>
          <button className={`${classes.copyButton} ${classes.textColor}`}>
            Copy
          </button>
        </div>
        {showFullPalette && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
