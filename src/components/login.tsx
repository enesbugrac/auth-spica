import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import * as Identity from "@spica-devkit/identity";
import { useNavigate } from "react-router";
import styles from "../App.module.css";
export function Login() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const user = await login(form.email, form.password).catch(console.error);
    console.log(user);
    navigate("/");
  }
  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = (identifier: string, password: string) => {
    Identity.initialize({
      apikey: "f2bcj17lawl5x6o",
      publicUrl: "https://master.spicaengine.com/api",
    });
    return Identity.login(identifier, password);
  };

  return (
    <>
      <div className={styles["formContainer"]}>
        <h2 style={{ marginBottom: "10px" }}>Log In</h2>

        <form>
          <div className={styles["inputContainer"]}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={styles["inputText"]}
              onChange={(e) => handleForm(e)}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles["inputText"]}
              onChange={handleForm}
            />
          </div>
          <p className={styles["redirectText"]}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <div className={styles["buttonContainer"]}>
            <button
              className={styles["authButton"]}
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
