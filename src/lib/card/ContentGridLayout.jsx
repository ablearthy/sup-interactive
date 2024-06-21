import classnames from "lib/utils";
import styles from "./ContentGridLayout.module.css";

function ContentGridLayout({ title, content, sidebar, customStyles }) {
  const gridcolumnAuto =
    customStyles && customStyles.gridcolumnAuto
      ? styles["gridcolumn-auto"]
      : undefined;
  return (
    <div className={classnames(styles.grid, gridcolumnAuto)}>
      <div className={styles.title} style={customStyles && customStyles.title}>
        {title}
      </div>
      <div
        className={styles.sidebar}
        style={customStyles && customStyles.sidebar}
      >
        {sidebar}
      </div>
      <div
        className={styles.content}
        style={customStyles && customStyles.content}
      >
        {content}
      </div>
    </div>
  );
}

export default ContentGridLayout;
