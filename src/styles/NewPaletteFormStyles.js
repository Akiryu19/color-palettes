import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './constants';
import sizes from './sizes';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: 'flex',
    alignItems: 'center',
    width: drawerWidth,
  },
  drawerHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    [sizes.down('xs')]: {
      marginTop: '8px',
    },
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  buttons: { width: '100%' },
  button: { width: '50%', fontSize: '0.8em', fontWeight: 'bold' },
}));

export default useStyles;
