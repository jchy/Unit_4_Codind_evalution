import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/action";
const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
};

export default Counter;
