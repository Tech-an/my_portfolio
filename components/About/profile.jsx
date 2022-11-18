import Profile_img from "./profile_img";
import Profile_text from "./profile_text";
import styles from "../../styles/profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Profile_img />
      <Profile_text />
    </div>
  );
}
