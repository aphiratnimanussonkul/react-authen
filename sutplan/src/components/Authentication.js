import React, { Component } from "react";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
    apiKey: "AIzaSyB0ZKwnIH-7qRtwR0oe0vm46OcgVuMh98o",
    authDomain: "sutplan01.firebaseapp.com"
})

class Authentication extends Component {
    state = {
        isSignIn: false,
    };
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user})
            console.log("user", user)

        })
    }

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
            />
            {/* <div>test</div> */}
          </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        );
    }
}
export default Authentication;