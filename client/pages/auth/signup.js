import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/signup", {
        email,
        password,
      });

      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div className="container is-fluid">
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1 className="title">Sign Up</h1>

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

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="help is-danger">
            {/* <h4>Oops..</h4> */}
            <ul className="">
              {errors.map((err) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </ul>
          </div>
          <br />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark">Submit</button>
            </div>
            <div className="control">
              <button className="button  is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
