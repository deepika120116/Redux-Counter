import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./store/action";

function App() {
const counter = useSelector(state => state.counter);// state.counter mentioned in the state of devtool
const logged = useSelector(state => state.login);
let sign_status;
logged ? sign_status = 'sign out' : sign_status = 'sign in';//have to check the selector for state change

const dispatch = useDispatch(); 
return (
<div>
<h1>counter:{counter}</h1>
<h2>
<button onClick={()=>dispatch(increment)}>Increment</button>
<button onClick={()=>dispatch(decrement)}>Decrement</button>
</h2>
<button onClick={() => dispatch(login)}>{sign_status}</button>
{logged ? <p>This is valuable information</p>:<p>Please Login to view the details</p>}
</div>
);
}

export default App;