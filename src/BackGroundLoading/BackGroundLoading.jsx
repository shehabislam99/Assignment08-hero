import { useEffect, useState } from "react";
import image from "../../assetss/logo.png";

const BackGroundLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div style={styles.overlay}>
      <img src={image} alt="loading" style={styles.spinnerImg} />
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(125.07deg, #632EE3 0%, #9F62F2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerImg: {
    width: "100px",
    height: "100px",
    animation: "spin 1s linear infinite",
  },
};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes spin {
     from { transform: rotate(0deg); }
     to { transform: rotate(360deg); }
   }`,
  styleSheet.cssRules.length
);

export default BackGroundLoading;
