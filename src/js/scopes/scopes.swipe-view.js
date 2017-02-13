import React from 'react';
import { connect } from 'react-redux';

class SwipeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      animEnabled: true,
    };
  }

  render() {
    let styles = { transform: `translate(${ -this.state.offset }vw, 0)` };

    if (this.state.animEnabled) {
      styles.transition = 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s';
    }

    return (
      <div className="s-swipe-view"
           style={ styles }
           onTouchStart={ this.startSlide.bind(this) }
           onTouchMove={ this.moveSlide.bind(this) }
           onTouchEnd={ this.endSlide.bind(this) }
      >
        { this.props.children }
      </div>
    );
  }

  startSlide(event) {
    console.info('Start swiping.');

    this.setState({
      animEnabled: false,
      clientX: event.nativeEvent.touches[0].clientX,
    });
  }

  moveSlide(event) {
    const oldClientX = this.state.clientX;
    const newClientX = event.nativeEvent.touches[0].clientX;
    const difference = newClientX - oldClientX;
    const acceleration = 0.3;
    const speed = 0.1;

    // acceleration, is the rate of change of the speed of something in a given direction (velocity).
    // speed is the rate of motion, or the rate of change of position, it is a scalar quantity.
    let offset = this.state.offset - (Math.pow(Math.abs(difference), acceleration) * (difference * speed));

    if (offset < 0) { offset = 0; }

    else if (offset > 100) { offset = 100; }

    this.setState({
      offset: offset,
      clientX: newClientX,
    });
  }

  endSlide(event) {
    this.setState({
      animEnabled: true,
    });

    if (this.state.offset > 50) {
      console.info('Offset is greater than 50.');

      this.setState({
        offset: 100,
      });
    }

    else {
      console.info('Offset is less than 50');

      this.setState({
        offset: 0,
      });
    }
  }
}

SwipeView.propTypes = {
  children: React.PropTypes.array,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const SwipeViewConnect = connect(null, mapDispatchToProps)(SwipeView);

export default SwipeViewConnect;
