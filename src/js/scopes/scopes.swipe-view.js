import React from 'react';

class SwipeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    }
  }

  render() {
    let styles = { transform: `translate(0, ${ -this.state.offset }px)` };
    if (this.state.animEnabled) {
      styles.transition = 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s';
    }

    return (
      <div
        style={ styles }
        onTouchStart={ this.startSwipe.bind(this) }
        onTouchMove={ this.moveSwipe.bind(this) }
        onTouchEnd={ this.endSwipe.bind(this) }
      >
        { this.props.children }
      </div>
    );
  }

  startSwipe(event) {
    console.info('Start swiping.');

    this.setState({
      animEnabled: false,
      clientY: event.nativeEvent.touches[0].clientY,
      initialOffset: this.state.offset,
      atTop: event.currentTarget.getBoundingClientRect().top >= 0
    });
  }

  moveSwipe(event) {
    if(!this.state.atTop) {
      return
    }
    const oldClientY = this.state.clientY,
          newClientY = event.nativeEvent.touches[0].clientY,
          difference = newClientY - oldClientY,
          acceleration = 0.3,
          speed = 0.1;

    // acceleration, is the rate of change of the speed of something in a given direction (velocity).
    // speed is the rate of motion, or the rate of change of position, it is a scalar quantity.
    const newOffset = this.state.offset - difference;
    let offset = newOffset
    if(newOffset < -75) {
      offset = -75
    } else if(newOffset > 0) {
      offset = 0
    }

    this.setState({
      offset: offset,
      clientY: newClientY,
    });
  }

  endSwipe(event) {
    this.setState({
      animEnabled: true,
    })
  }
}

export default SwipeView;
