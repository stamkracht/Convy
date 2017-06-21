import React from 'react';

const threshold = 90;

class SwipeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      menuAccessible: true,
      menuVisible: false,
      reloadAccessible: false,
      overflow: true
    }
  }

  render() {
    let styles = { transform: `translate(0, ${ -this.state.offset }px)`, overflowY: (this.state.overflow ? 'auto' :'hidden') };
    if (this.state.animEnabled) {
      styles.transition = 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s';
    }

    return (
      <section ref={(elm) => this.elm = elm}
        className={this.props.className}
        style={ styles }
        onTouchStart={ this.startSwipe.bind(this) }
        onTouchMove={ this.moveSwipe.bind(this) }
        onTouchEnd={ this.endSwipe.bind(this) }
      >
        { this.props.children }
      </section>
    );
  }

  startSwipe(event) {
    this.setState({
      animEnabled: false,
      clientY: event.nativeEvent.touches[0].clientY,
      menuAccessible: this.state.offset == 0 && this.elm.scrollTop == 0,
      reloadAccessible: this.state.offset == -75,
    });
  }

  moveSwipe(event) {
    const oldClientY = this.state.clientY,
          newClientY = event.nativeEvent.touches[0].clientY,
          difference = newClientY - oldClientY;

    if(this.state.menuAccessible && difference > threshold) {
      this.setState({
        offset: -75,
        clientY: newClientY,
        animEnabled: true,
        menuAccessible: false,
        menuVisible: true,
        overflow: false,
      })
    }
    if(this.state.menuVisible && difference < 0) {
      const offset = this.state.offset - difference;
      this.setState({
        offset: (offset < 0 && offset ? offset : 0),
        clientY: newClientY,
        menuVisible: offset < 0,
      })

    }
    if(this.state.reloadAccessible && difference > 0) {
      const offset = this.state.offset - difference;
      this.setState({
        offset: (offset <= -150 ? -150 : offset),
        clientY: newClientY,
        animEnabled: true,
        menuAccessible: false,
      })
    }
  }

  endSwipe(event) {
    if(this.state.reloadAccessible && this.state.offset == -150) {
      this.setState({
        animEnabled: true,
        offset: 0,
      });
      window.location.reload()
    }
    if(!this.state.menuVisible) {
      this.setState({
        overflow: true,
      })
    }
  }
}

export default SwipeView;
