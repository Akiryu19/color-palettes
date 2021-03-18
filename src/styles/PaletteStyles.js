const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  PaletteColors: { height: '90%' },
  goBack: {
    width: '20%',
    height: (props) => (props.showFullPalette ? '25%' : '50%'),
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
  },
};

export default styles;
