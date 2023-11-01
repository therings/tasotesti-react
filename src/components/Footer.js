import React from "react";

const styles = {
  Footer: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#222",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
  },
};

const Footer = () => {
  return (
    <div style={styles.Footer}>
      <div style={styles.contact}>
        <p>Email</p>
        <p>shucai@live.cn</p>
      </div>
      <div style={styles.contact}>
        <p>Phone</p>
        <p>+123469572138</p>
      </div>
      <div style={styles.contact}>
        <p>address</p>
        <p>Beijing, China</p>
      </div>
    </div>
  );
};

export default Footer;
