import React, {useState} from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Greeting from "./components/Greeting";

function App(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button;
    if (isLoggedIn){
        button = <LogoutButton onClick={ () => setIsLoggedIn(false)}/>
    } else {
        button = <LoginButton onClick={ () => setIsLoggedIn(true)}/>
    }
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    );
}

export default App;