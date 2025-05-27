import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,  useParams } from "react-router-dom";
import { setOAuthToken } from "../../store/Reducers/authReducer";

const OAuthRedirectHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useParams()
  useEffect(() => {
    

    if (token) {
      localStorage.setItem("accessToken", token);
      dispatch(setOAuthToken({ token}));
      navigate("/");
    } else {
      navigate("/register");
    }
  }, []);

  return null;
};

export default OAuthRedirectHandler;
