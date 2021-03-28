const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '0.5em',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: '#eee',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    margin: 0,
    color: '#000',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: { marginLeft: '1rem', fontSize: '1.5rem' },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },

  deleteIcon: {
    color: '#fff',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '5px',
    zIndex: 10,
    opacity: 0,
    transition: 'all 0.5s ease',
  },
};

export default styles;
