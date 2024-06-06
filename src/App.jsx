import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions/clickAction";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.clickReducer);
  return (
    <>
      <h1>Redux Setup</h1>
      <div className="card">
        <span>Count Is {count}</span>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  );
}

export default App;
