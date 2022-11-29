import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import * as Identity from "@spica-devkit/identity";
import { useNavigate } from "react-router";
import styles from "../App.module.css";

export function SignUp() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    signup(form.email, form.password).catch(console.error);
    navigate("/");
  }
  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const signup = (identifier: string, password: string) => {
    Identity.initialize({
      apikey: "f2bcj17lawl5x6o",
      publicUrl: "https://master.spicaengine.com/api",
    });
    return Identity.insert({
      identifier: identifier,
      password: password,
      policies: [],
    });
  };

  return (
    <>
      <div className={styles["formContainer"]}>
        <h2 style={{ marginBottom: "10px" }}>Sign Up</h2>
        <form>
          <div className={styles["inputContainer"]}>
            <input
              className={styles["inputText"]}
              name="email"
              type="email"
              onChange={(e) => handleForm(e)}
            />
            <input
              name="password"
              className={styles["inputText"]}
              type="password"
              onChange={handleForm}
            />
          </div>
          <p className={styles["redirectText"]}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <div className={styles["buttonContainer"]}>
            <button
              type="submit"
              className={styles["authButton"]}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
