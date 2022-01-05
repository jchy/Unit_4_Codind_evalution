import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { msgSuccess } from "../redux/msg/action";
function LeaveMsg() {
  const dispatch = useDispatch();
  const [userMsg, setUserMsg] = useState("");
  const { msg } = useSelector((state) => state.msg);
  const handleAdd = () => {
    const action = msgSuccess(userMsg);
    dispatch(action);
  };
  return (
    <div>
      <h3>{msg}</h3>
      <input
        type="text"
        placeholder="Leave a msg"
        onChange={(e) => setUserMsg(e.target.value)}
      />
      <button onClick={handleAdd}>MSG</button>
    </div>
  );
}

export default LeaveMsg;
