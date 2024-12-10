import React from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    setAddress(data.address);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "25%",
    width: "600px",
    height: "500px",
    padding: "7px",
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />
    </>
  );
};

export default Post;
