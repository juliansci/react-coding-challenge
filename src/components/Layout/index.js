import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header>
        <img src="/logo512.png" alt="Logo" />
        <span>POSTS PROJECT</span>
      </header>
      <div className={styles.content}>{children}</div>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
}

export default Layout;
