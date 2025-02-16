import React from "react";
import "./TitleBox.css";

type Props = {
  text: string;
  color: string;
  imageUrl: string;
};

const TitleBox: React.FC<Props> = ({ text, color, imageUrl }) => {
  return (
    <div className="title-box" style={{ backgroundColor: color, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      {imageUrl && <img src={imageUrl} alt="Title Image" className="title-image" style={{ maxWidth: "100%", maxHeight: "70%", objectFit: "contain", display: "block" }} />}
      <p style={{ marginTop: "25px" }}>{text}</p>
    </div>
  );
};

export default TitleBox;
