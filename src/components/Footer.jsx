import styles from "./Footer.module.css"

export function Footer(props) {
  return <footer className={styles.footer}>Copyright {props.year} - Dev Bros</footer>;
}
