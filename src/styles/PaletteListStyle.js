import sizes from './sizes';
import bg from './bg.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-in',
    },
  },
  root: {
    backgroundColor: '#445aaa',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    Height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'scroll',
  },
  container: {
    width: '50%',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%',
    },
    [sizes.down('xl')]: {
      width: '70%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    '& a': {
      // textDecoration: 'none',
      color: '#FFF',
      // fontWeight: 'bold',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '1rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2,50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1,100%)',
    },
  },
};

export default styles;
