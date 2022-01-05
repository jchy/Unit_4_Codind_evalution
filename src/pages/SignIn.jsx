import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSuccess } from "../redux/auth/action";

function SignIn() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const action = loginSuccess(true);
    dispatch(action);
  };
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleAdd}>Please click on this to login</button>
    </div>
  );
}

export default SignIn;
