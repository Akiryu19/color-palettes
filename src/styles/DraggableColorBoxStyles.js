const styles = {
  root: {
    height: '20%',
    width: '25%',
    margin: '0 auto',
    marginBottom: '-3px',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
    },
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.4)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '10px',
    color: 'rgba(0,0,0,0.9)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: ' 12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  delete: {
    transition: 'all 0.3s ease',
  },
};

export default styles;
