import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import config from '../config'

class SwipeView extends React.Component {
  constructor(props) {
    super(props);

    this.viewLength = props.children.length;

    this.state = {
      offset: props.swipeViewIndex * 100,
      animEnabled: true,
      currentIndex: props.swipeViewIndex
    };
  }

  componentWillMount() {
    this.props.setSwipeViewIndex(this.props.swipeViewIndex)
  }

  componentWillReceiveProps(nextProps) {
    // Will be triggered when the redux state is changed
    if(this.state.currentIndex != nextProps.swipeViewIndex) {
      this.setState({
        animEnabled: true,
        currentIndex: nextProps.swipeViewIndex,
        offset: 100 * nextProps.swipeViewIndex
      });
    }
  }

  render() {
    let styles = { transform: `translate(${ -this.state.offset }vw, 0)` };

    if (this.state.animEnabled) {
      styles.transition = 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s';
    }

    return (
      <div className="s-swipe-view"
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
      clientX: event.nativeEvent.touches[0].clientX,
      initialOffset: this.state.offset,
    });
  }

  moveSwipe(event) {
    const oldClientX = this.state.clientX,
          newClientX = event.nativeEvent.touches[0].clientX,
          difference = newClientX - oldClientX,
          acceleration = 0.3,
          speed = 0.1;

    // acceleration, is the rate of change of the speed of something in a given direction (velocity).
    // speed is the rate of motion, or the rate of change of position, it is a scalar quantity.
    let offset = this.state.offset - (Math.pow(Math.abs(difference), acceleration) * (difference * speed));

    let minOffset,
        maxOffset;

    if (this.props.multipleViewsPerSwipe) {
      minOffset = 0;
      maxOffset = (this.viewLength - 1) * 100;
    }
    else {
      minOffset = Math.max(0, this.state.initialOffset - 100);
      maxOffset = Math.min((this.viewLength - 1) * 100, this.state.initialOffset + 100);
    }

    if (offset < minOffset) { offset = minOffset; }
    else if (offset > maxOffset) { offset = maxOffset; }

    this.setState({
      offset: offset,
      clientX: newClientX,
    });
  }

  endSwipe(event) {
    const offsetCurrentView = this.state.offset % 100;

    // if offset current view is greater than 50, then swipe to next view.
    // else swipe back to the beginning of the current view.
    const offset = (offsetCurrentView > 50) ?
      this.state.offset - offsetCurrentView + 100 :
      this.state.offset - offsetCurrentView;

    const oldIndex = this.state.currentIndex;
    const currentIndex = offset / 100;

    this.setState({
      animEnabled: true,
      offset,
      currentIndex
    }, () => {
      if(oldIndex != currentIndex) {
        // Set the redux state
        this.props.setSwipeViewIndex(currentIndex)
      }
    })
  }
}

SwipeView.propTypes = {
  children: React.PropTypes.array,
  multipleViewsPerSwipe: React.PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  return {
    swipeViewIndex: state[config.stateName].swipeViewState[ownProps.swipeViewId] || 0
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSwipeViewIndex: (index) => {
      dispatch(actions.swipeView.setSwipeViewIndex(ownProps.swipeViewId, index));
    },
  };
};

const SwipeViewConnect = connect(mapStateToProps, mapDispatchToProps)(SwipeView);

export default SwipeViewConnect;
