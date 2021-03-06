import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import InviteButton from './InviteButton';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';


const styles = {
Paper: { padding: 20, width: "95vw", margin: 'auto', maxWidth:"600px"  }
  
}

function FriendsList (props){
  let users = props.users;
  // console.log(users, "FriendsList Users");
  
    return (
      <Paper style={styles.Paper}>
        <Typography variant="title">
            Your Available Friends:
        </Typography>
            <div className=/*{classes.demo}*/'valueD'>
            <form onSubmit={props.submit}>
                    <List /*dense={dense}*/ className='valueK'>
                    
                      <FormControl component="fieldset"> 
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
                      </FormControl>
                  </List>
                 </form>
                  </div>

      </Paper>

    )
}

export default FriendsList;