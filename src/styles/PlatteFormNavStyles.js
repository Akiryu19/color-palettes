import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './constants';
import sizes from './sizes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: '1rem',
    [sizes.down('xs')]: {
      marginRight: '6px',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& button': {
      marginLeft: '1rem',
      [sizes.down('xs')]: {
        padding: '0',
        marginLeft: '8px',
      },
    },
  },
}));

export default useStyles;
