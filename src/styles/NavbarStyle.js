const styles = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    fontFamily: 'Roboto',
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#fff',
    height: '100%',
    lineHeight: '48px',
    '& a': {
      textDecoration: 'none',
      color: '#000',
    },
  },
  slider: {
    width: '350px',
    margin: '0 10px',
    display: 'inline-block',
    '& rc-slider-rail': {
      height: '8px',
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-handle,  .rc-slider-handle:hover .rc-slider-handle:focus .rc-slider-handle:active': {
      backgroundColor: 'green',
      border: '2px solid green',
      outline: 'none',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-3px',
    },
  },
  selectorContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

export default styles;
