import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);

  const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleLoginDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setLoginDetails({
        ...loginDetails,
        email: value,
      });
      setErrors({
        ...errors,
        emailError:
          value.length === 0
            ? "Email is required"
            : !emailValid.test(value)
            ? "Enter valid email"
            : "",
      });
    }
    if (name === "password") {
      setLoginDetails({
        ...loginDetails,
        password: value,
      });
      setErrors({
        ...errors,
        passwordError: value.length === 0 ? "Password is required" : "",
      });
    }
  };

  const handleShowOrHide = () => {
    setTogglePassword(!togglePassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  return (
    <div className="">
      <div className="px-5 mt-14 w-1/2 left-1/2 translate-x-1/2 border-[1px] border-[#00000080] rounded-md">
        <h4 className="my-6 text-2xl font-semibold">Login</h4>
        <form action="">
          {/* email */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="py-2 px-4 my-1 outline-none border-[1px] border-[#00000045] rounded-lg"
              placeholder="Enter your email"
              onChange={handleLoginDetails}
            />
            {errors.emailError && (
              <span className="text-red-600">{errors.emailError}</span>
            )}
          </div>
          {/* password */}
          <div className="my-5 flex flex-col">
            <label className="text-xl font-semibold">Password</label>
            <div className="relative w-full">
              <input
                name="password"
                type={togglePassword ? "text" : "password"}
                className="py-2 px-4 my-1 w-full outline-none border-[1px] border-[#00000045] rounded-lg"
                placeholder="Enter your password"
                onChange={handleLoginDetails}
              />
              {!togglePassword ? (
                <AiOutlineEyeInvisible
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-xl cursor-pointer"
                  onClick={handleShowOrHide}
                />
              ) : (
                <AiOutlineEye
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-xl cursor-pointer"
                  onClick={handleShowOrHide}
                />
              )}
            </div>
            {errors.passwordError && (
              <span className="text-red-600">{errors.passwordError}</span>
            )}
            <span className="self-end font-semibold">
              Forget your password?
            </span>
          </div>
          {/* button */}
          <button
            onClick={handleLogin}
            className="py-2 mt-6 mb-14 w-full bg-[#438FD38F] text-xl font-semibold rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
