import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <div className="container is-fluid">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1 className="title">Log In </h1>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            {/* <p class="help is-danger">This email is invalid</p> */}
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                type="password"
                placeholder="Enter password"
              />
            </div>
            {/* <p class="help is-danger">This email is invalid</p> */}
          </div>

          {/* <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div> */}
          {errors}
          <br />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark">Login</button>
            </div>
            <div className="">
              <a href="/">
                <button className="button  is-light">Cancel</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
