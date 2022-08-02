import React, {useState} from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Greeting from "./components/Greeting";

function App(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button;
    if (this.state.isLoggedIn){
        button = <LogoutButton onClick={this.setIsLoggedIn(false)}/>
    } else {
        button = <LoginButton onClick={this.setIsLoggedIn(true)}/>
    }
    return (
        <div>
            <Greeting isLoggedIn={this.state.isLoggedIn}/>
        </div>
    );
}

export default App;