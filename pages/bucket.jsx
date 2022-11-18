import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Bucket() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };

  return (
    <div className="App">
      <div style={style}>
        <Sample />
      </div>
    </div>
  );
}

const Sample = () => {
  const images = [
    {
      original:
        "https://cdn.pixabay.com/photo/2020/03/09/23/04/plum-4917370_960_720.jpg",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/03/09/23/04/plum-4917370_960_720.jpg",
    },
    {
      original:
        "https://cdn.pixabay.com/photo/2020/02/21/18/43/kosmeen-4868375_960_720.jpg",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/02/21/18/43/kosmeen-4868375_960_720.jpg",
    },
    {
      original:
        "https://cdn.pixabay.com/photo/2016/04/16/12/50/chrysanthemum-1332994_960_720.jpg",
      thumbnail:
        "https://cdn.pixabay.com/photo/2016/04/16/12/50/chrysanthemum-1332994_960_720.jpg",
    },
  ];
  return <ImageGallery items={images} />;
};
