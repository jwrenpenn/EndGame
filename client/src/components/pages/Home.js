//import FriendsList from "../FriendsList";
import React, {Component} from "react";
import firebase from "firebase";
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import keys from "../../keys";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import  Map from "./../maps/map.js";
import API from "../../utils/API";
import './PageBody.css';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  Map: { padding: 20, width: 600, margin: 'auto' },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center:{
        lat: 0,
        lng: 0,
      },
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }

  componentDidMount() {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.setState({
        center:{
          lat: location.coords.latitude,
        lng: location.coords.longitude,
        }
      });
      this.updateLocation()
    });
  }

  updateLocation = ()=>{
    if(firebase.auth().currentUser){
        console.log("we are inside if userAuth");
        API.updateLocation({email:firebase.auth().currentUser.email,Lat:this.state.center.lat,Lng: this.state.center.lng })
        .then(res => console.log("location updated"))
        .catch(err => console.log(err));
      }

  }

  render (){
    return (
      <div className='page-body'>

        {/* <Paper style={styles.Paper}>

            <Typography className='Title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL}/>
             <p>  {firebase.auth().currentUser.displayName}</p>
            </Typography> 
            <br/>
            <Map />
            <Typography variant="display1">
            </Typography>
          </Paper>

          <br />

          {/* <Map style={styles.Map}/> */}

        <br /> 

        <Map center={this.state.center} style={styles.Map}/>

      </div>
    )
  }
}
export default Home;