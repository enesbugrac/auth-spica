import { useNavigate } from "react-router";
import styles from "../App.module.css";
export function MainPage() {
  const navigate = useNavigate();

  async function handleBack() {
    navigate("/login");
  }

  return (
    <div>
      <h2 style={{ margin: "25px" }}>Welcome!</h2>
      <div className={styles["buttonContainer"]}>
        <button
          type="submit"
          className={styles["authButton"]}
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
