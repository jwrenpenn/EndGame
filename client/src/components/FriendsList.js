import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import InviteButton from './InviteButton';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';

// breakpoints;media queries
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// const styles = {
//   Paper: { padding: 20, width: "95vw", margin: 'auto'  }
  
// }

const styles = theme => ({
  friendslistBreakPoint: {
    [theme.breakpoints.down('sm')]:{
      padding: 20, 
      width: "95vw", 
      margin: 'auto'
    },
    [theme.breakpoints.up('sm')]:{
      padding: 20, 
      maxWidth: 600, 
      margin: 'auto'
    }
  }
});

function FriendsList (props){
  //users = props.liveUsers;
  // const users = props.liveUsers;
  //["0"].date
  let users = props.users;
  console.log(users, "FriendsList Users");
  const { classes } = props;
  
    return (
      <Paper 
        // style={styles.Paper}
        className={classes.friendslistBreakPoint}
      >
        <Typography variant="title">
            Your Available Friends:
        </Typography>
            <div className=/*{classes.demo}*/'valueD'>
            <form onSubmit={props.submit}>
                    <List /*dense={dense}*/ className='valueK'>
                    
                      <FormControl component="fieldset"> 
                      <FormLabel component="legend">Meet UP Instance</FormLabel>
                      <FormGroup>
                        {props.users.map((item, index) => (
                          <FriendsListItem 
                          key = {item._id}
                          photoURL={item.photoURL}
                          userName={item.userName}
                          email={item.email}
                          online={item.isSignedIn}
                          checked={props.checked}
                          handleChange={props.handleChange}
                          >
                          </FriendsListItem>
                        ))}
                      </FormGroup>
                      <InviteButton/>
                      {/* <button 
                      type= "submit"
                      >
                      Submit
                      </button> */}
                      </FormControl>
                  </List>
                 </form>
                  </div>

      </Paper>

    )
}

FriendsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FriendsList);