import React, {Component} from 'react';

export class ProjectGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedImage: {}
    };
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  handleSelectImage(image) {
    this.setState({
      selectedImage: image
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedImage: nextProps.images[0]
    });
  }

  render() {
    return (
      <div className="row room-bottom">
        <div className="col-sm-6 col-xs-12 sm-room-bottom">
          <div>
            <img className="img-responsive room-bottom" src={this.state.selectedImage.src}/>
            <span>{this.state.selectedImage.caption}</span>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="row">
            {this.props.images.map((image, i) => (
              <Images key={i} src={image.src} onImageClick={this.handleSelectImage} image={image}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class Images extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.onImageClick(this.props.image);
  }

  render() {
    return (
      <div onClick={this.handleOnClick} className="col-xs-3">
        <img className="img-responsive room-bottom" src={this.props.src}/>
      </div>
    );
  }
}

ProjectGallery.propTypes = {
  images: React.PropTypes.array.isRequired
};

Images.propTypes = {
  image: React.PropTypes.object.isRequired,
  src: React.PropTypes.string.isRequired,
  onImageClick: React.PropTypes.func.isRequired
};
