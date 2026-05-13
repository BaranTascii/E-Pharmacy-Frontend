import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCredentials } from "../../redux/auth/slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      setCredentials({
        user: {
          email: data.email,
        },
        token: "fake-token",
      }),
    );

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h2 className="login-title">Sign In</h2>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />

        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
