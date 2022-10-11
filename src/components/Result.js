import React, { Component } from "react";
import Img from "./Img";
import Pagination from "./Pagination";
class Result extends Component {
  showImg = () => {
    const images = this.props.img;
    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {images.map((image) => (
            <Img key={image.id} images={image} />
          ))}
        </div>
        <Pagination
          previousPage={this.props.previousPage}
          nextPage={this.props.nextPage}
        />
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.showImg()}</React.Fragment>;
  }
}

export default Result;
