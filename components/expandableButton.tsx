import { useState } from "react";
import styles from '@/styles/ExpButtons.module.css'

export default function ExpandableButton({ props }) {
  const [expanded, setExpanded] = useState(false);
  const { label, info } = props;
  let i = 0;
  const paragraphs: JSX.Element = info.map(str => {
    i++
    return (
      <p key={i}>{str}</p>
    )
  })

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${styles.expandableButton} ${expanded ? styles.expanded : ''}`}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        {label}
      </button>
      {expanded && (
        <div className={styles.expandedContent}>
          {paragraphs}
        </div>
      )}
    </div>
  );
}