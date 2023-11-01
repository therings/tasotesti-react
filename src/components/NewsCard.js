import React, { useState } from "react";

export const NewsCard = (props) => {
  const [likes, setLikes] = useState(0);
  const { title, NewsContent, img } = props.data;
  function like() {
    setLikes(likes + 1);
  }

  function dislike() {
    if (likes > 0) {
      setLikes(likes - 1);
    } else {
      return;
    }
  }
  //style
  const styles = {
    container: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      backgroundColor: "black",
      color: "white",
      borderRadius: "20px",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "130px",
      height: "130px",
      alignItems: "center",
    },
    buttons: {
      alignItems: "center",
      padding: "10px",
      display: "inline-flex",
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.card}>
          <h3>{title}</h3>
          <p>{NewsContent}</p>
          <img style={styles.img} src={img} alt="" />
        </div>
        <div style={styles.buttons}>
          <button onClick={like}>Like</button>
          <p>{likes}</p>
          <button onClick={dislike}>Dislike</button>
        </div>
      </div>
    </div>
  );
};
