import sizes from './sizes';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  PaletteColors: { height: '90%' },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    marginBottom: '-3px',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#000',
    '& a': {
      color: '#fff',
      width: '100px',
      height: '30px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: ' 1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.33333%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};

export default styles;
