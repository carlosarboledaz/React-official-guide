import UserGreeting from './components/UserGreeting';
import GuestGreeting from './components/GuestGreeting';

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}

export default Greeting;