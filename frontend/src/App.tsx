import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {createMuiTheme, createStyles, ThemeProvider, withStyles, WithStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './components/material-ui/Navigator';
import Members from './components/material-ui/Content';
import Header from './components/material-ui/Header';

import MainPageInfo from './components/show_data/show_data';
import AddData from './components/add_nodes/add_node';
import ONG_Associated_Project from './components/ong_associated_project/ong_associated_project';
import Project_Volunteer from './components/project_volunteers/project_volunteers';
import Volunteer_Per_Project from './components/volunteer_per_project/volunteer_per_project';
import Volunteer_Project_Participations from './components/volunteer_project_participations/volunteer_project_participations';
import TargetPopulation from './components/target_population/target_population';

import ShowEntities from './components/show_entities/ShowEntities';


let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
});



export interface PaperbaseProps extends WithStyles<typeof styles> {}

function Paperbase(props: PaperbaseProps) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              {/*<Route exact path="/paperbase" component={Paperbase}></Route>*/}
               <Route exact path="/homepage" component={MainPageInfo}></Route>
               <Route exact path="/addnode" component={AddData}></Route>
               <Route exact path="/members" component={Members}></Route>
               <Route exact path="/showentities" component={ShowEntities}></Route>
               <Route exact path="/ong_associated_project" component={ONG_Associated_Project}></Route>
               <Route exact path="/project_volunteers" component={Project_Volunteer}></Route>
               <Route exact path="/volunteer_per_project" component={Volunteer_Per_Project}></Route>
               <Route exact path="/volunteer_project_participations" component={Volunteer_Project_Participations}></Route>
               <Route exact path="/target_population" component={TargetPopulation}></Route>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default withStyles(styles)(Paperbase);