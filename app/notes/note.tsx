import Link from "next/link";
import styles from "./Notes.module.css";

export default function Note({ note }: any) {
  const { id, title, content, created } = note;
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.created}>{created}</p>
        <h5 className={styles.content}>{content}</h5>
      </div>
    </Link>
  );
}
