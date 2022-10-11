import React from "react";

const Image = (props) => {
  const { largeImageURL, likes, previewURL, tags, views } = props.images;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg4 mb-4">
      <div className="card">
        <img
          src={previewURL}
          alt={tags}
          className="card-img-top"
          width="100"
          height="170"
        />
        <div className="card-body">
          <p className="card-text">{likes} Me gusta </p>
          <p className="card-text">{views} Vistas</p>
          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-primary btn-block"
          >
            Ampliar imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
