import { useState } from "react";

export default function ExpandableButton({ props }) {
  const [expanded, setExpanded] = useState(false);
  const { label, info } = props;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-button ${expanded ? 'expanded' : ''}`}>
      <button className="toggle-button" onClick={handleToggle}>
        {label}
      </button>
      {expanded && (
        <div className="expanded-content">
          <p>{info}</p>
        </div>
      )}
    </div>
  );
}