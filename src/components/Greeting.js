import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting({isLoggedIn}){
    if (isLoggedIn){
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}

export default Greeting;