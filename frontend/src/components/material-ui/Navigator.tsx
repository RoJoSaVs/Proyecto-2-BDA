import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';

import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AttributionIcon from '@mui/icons-material/Attribution';
import ContactsIcon from '@mui/icons-material/Contacts';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HardwareIcon from '@mui/icons-material/Hardware';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RedditIcon from '@mui/icons-material/Reddit';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';

import { Omit } from '@material-ui/types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ShowEntities from '../show_entities/ShowEntities';


const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Home Page', icon: <PublicIcon />, active: true },
      { id: 'Upload File', icon: <DnsRoundedIcon />, route: '/showentities' },
      { id: 'Show Employees', icon: <PermMediaOutlinedIcon /> },
      { id: 'Members', icon: <PeopleIcon /> },
      // { id: 'Functions', icon: <SettingsEthernetIcon /> },
      // { id: 'ML Kit', icon: <SettingsInputComponentIcon /> },
    ],
  },
  // {
  //   id: 'Quality',
  //   children: [
  //     { id: 'Analytics', icon: <SettingsIcon /> },
  //     { id: 'Performance', icon: <TimerIcon /> },
  //     { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
  //   ],
  // },
];

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {}

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>Project #2</ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}><PublicIcon /></ListItemIcon>
          <ListItemText classes={{primary: classes.itemPrimary,}}> BDA  </ListItemText>
        </ListItem>

        <React.Fragment>
            <ListItem className={classes.categoryHeader}>
                <ListItemText classes={{primary: classes.categoryHeaderPrimary,}}> Navigation </ListItemText>
            </ListItem>

            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/homepage">
                <ListItemIcon className={classes.itemIcon}><HomeIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Home Page</ListItemText>
            </ListItem>

            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/members">
                <ListItemIcon className={classes.itemIcon}><ContactsIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Members</ListItemText>
            </ListItem>

            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/add_nodes">
                <ListItemIcon className={classes.itemIcon}><AddToPhotosIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Create</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/showentities">
                <ListItemIcon className={classes.itemIcon}><AttributionIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Volunteer on Project</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/showentities">
                <ListItemIcon className={classes.itemIcon}><RedditIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Project on ONG</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/ong_associated_project">
                <ListItemIcon className={classes.itemIcon}><HardwareIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>ONG Associated Project</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/project_volunteers">
                <ListItemIcon className={classes.itemIcon}><EscalatorWarningIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Project Volunteers</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/volunteer_per_project">
                <ListItemIcon className={classes.itemIcon}><PersonSearchIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Volunteers per Project</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/volunteer_project_participations">
                <ListItemIcon className={classes.itemIcon}><FamilyRestroomIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Volunteer Project Participations</ListItemText>
            </ListItem>
            <ListItem button className={clsx(classes.item, true && classes.itemActiveItem)} component={Link} to="/target_population">
                <ListItemIcon className={classes.itemIcon}><WheelchairPickupIcon /></ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>Target Population</ListItemText>
            </ListItem>
          <Divider className={classes.divider} />
        </React.Fragment>
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);