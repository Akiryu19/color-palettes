import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
  root: {
    height: '20%',
    width: '25%',
    margin: '0 auto',
    marginBottom: '-5px',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%',
    },
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.4)',
    },
  },
  boxContent: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.5 ? '#fff' : 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: ' 12px',
    display: 'flex',
    justifyContent: 'space-between',
    '& span': {
      position: 'relative',
      top: '10px',
      [sizes.down('xs')]: {
        fontSize: '14px',
      },
    },
  },
  delete: {
    transition: 'all 0.3s ease',
    [sizes.down('xs')]: {
      fontSize: '18px',
    },
  },
};

export default styles;
