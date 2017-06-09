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
        className={this.props.className}
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
    console.log(event.nativeEvent)

    this.setState({
      animEnabled: false,
      clientY: event.nativeEvent.touches[0].clientY,
      initialOffset: this.state.offset,
      atTop: event.currentTarget.getBoundingClientRect().top >= 0
    });
  }

  moveSwipe(event) {
    const oldClientY = this.state.clientY,
          newClientY = event.nativeEvent.touches[0].clientY,
          difference = newClientY - oldClientY;

    if(!this.state.atTop) {
      return
    }
    if(this.state.offset <= 0 && difference > 90) {
      this.setState({
        animEnabled: true,
        offset: -75,
        clientY: newClientY,
      })
    } else if(this.state.offset <= 0 && difference < 0) {
      const offset = this.state.offset - difference;
      this.setState({
        animEnabled: true,
        offset: (offset > 0 ? 0 : offset),
        clientY: newClientY,
      })

    }
  }

  endSwipe(event) {
    this.setState({
      animEnabled: true,
    })
  }
}

export default SwipeView;
