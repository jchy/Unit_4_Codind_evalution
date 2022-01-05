import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/action";

function Login() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "20%"
      }}
    >
      <h3>Login</h3>
      <div>
        <button onClick={handleAdd} style={{ width: "200px" }}>
          Please Click Here to Login
        </button>
      </div>
    </div>
  );
}

export default Login;
