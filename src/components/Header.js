import React from "react";

const styles = {
  main: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "1px",
  },
};

const Header = () => {
  return (
    <div>
      <div style={styles.main}>
        <h1>Chens website</h1>
      </div>
      <div>
        <p>This is my website</p>
      </div>
    </div>
  );
};

export default Header;
