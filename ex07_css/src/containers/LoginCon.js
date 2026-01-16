import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";


const LoginCon = () => {
    

     const dispatch = useDispatch();
  const input = useSelector((state) => state.input);

  const onChangeUsername = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const onChangePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const onSubmit = () => {
    console.log(input);
     
  };

  

    return (<>
        <HeaderCom />
        <LoginCom 
         onChangeUsername={onChangeUsername}
         onChangePassword={onChangePassword}
         onSubmit={onSubmit}
        />
    </>)
}
export default LoginCon;