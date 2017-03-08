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
    this.props.images.forEach(image => {
      image.isSelected = false;
    });

    image.isSelected = true;
    this.setState({
      selectedImage: image
    });
  }

  componentWillReceiveProps(nextProps) {
    const image = nextProps.images[0];
    image.isSelected = true;
    this.setState({
      selectedImage: image
    });
  }

  render() {
    return (
      <div className="row room-bottom">
        <div className="col-sm-6 col-xs-12 sm-room-bottom">
          <div>
            <img className="img-responsive room-bottom" src={this.state.selectedImage.src}/>
            <span><strong>{this.state.selectedImage.title}</strong> | {this.state.selectedImage.caption}</span>
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
    let activeImage;
    if (this.props.image.isSelected) {
      activeImage = {
        border: '2px solid #5aadbb',
        borderRadius: '1px'
      };
    }

    return (
      <div className="col-xs-3">
        <img style={activeImage} className="img-responsive room-bottom cursor-pointer" onClick={this.handleOnClick} src={this.props.src}/>
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
