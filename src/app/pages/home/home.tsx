import styles from "./home.module.css";
import page_styles from "../../page.module.css";
import Button from "../../components/button";

export default function HomePage() {
    return (<div className={page_styles.page}>
        <h1>Main title, homepage</h1>
        <Button />
    </div>)
}


