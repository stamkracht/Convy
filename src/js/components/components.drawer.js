import React from 'react';

import { classNames } from '../utillities';


class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      touching: false,
      scrollPos: 0,
      marginTop: props.closedMargin,
    }
  }

  moveTouchMain(event) {
    if(!this.state.touching) {
      return
    }
    const oldClientY = this.state.clientY,
      newClientY = event.nativeEvent.touches[0].clientY,
      difference = newClientY - oldClientY;

    if(this.state.open && difference < -this.props.swipeThreshold) {
      this.close(newClientY)
    }
    if(!this.state.open && this.state.scrollPos == 0 && difference > this.props.swipeThreshold) {
      this.open(newClientY)
    }
    if(this.state.openInit && difference > 0) {
      const newMarginTop = this.state.marginTop + difference;
      this.setState({
        marginTop: newMarginTop > this.props.refreshMargin ? this.props.refreshMargin : newMarginTop,
        clientY: newClientY
      })
    }
  }
  startTouchMain(event) {
    if(this.state.scrollPos !== 0) {
      return
    }
    this.setState({
      clientY: event.nativeEvent.touches[0].clientY,
      animEnabled: false,
      touching: true,
      openInit: this.state.open
    });
  }
  startTouch(event) {
    this.setState({
      clientY: event.nativeEvent.touches[0].clientY,
      animEnabled: false,
      touching: true,
      openInit: this.state.open
    });
  }

  moveTouch(event) {
    if(!this.state.touching) {
      return
    }
    const oldClientY = this.state.clientY,
      newClientY = event.nativeEvent.touches[0].clientY,
      difference = newClientY - oldClientY;

    if(!this.state.open && difference > this.props.swipeThreshold) {
      this.open(newClientY)
    }
    if(this.state.open && difference < -this.props.swipeThreshold) {
      this.close(newClientY)
    }
    if(this.state.openInit && difference > 0) {
      const newMarginTop = this.state.marginTop + difference;
      this.setState({
        marginTop: newMarginTop > this.props.refreshMargin ? this.props.refreshMargin : newMarginTop,
        clientY: newClientY
      })
    }
  }

  endTouch(event) {
    this.setState({
      touching: false,
    });
    if(this.state.marginTop == this.props.refreshMargin) {
      this.setState({
        animEnabled: true,
        marginTop: this.props.closedMargin,
      }, () => setTimeout(() => window.location.reload(), 300))
    } else if(this.state.marginTop > this.props.openedMargin) {
        this.setState({
          animEnabled: true,
          marginTop: this.props.openedMargin,
        })
      }
  }

  open(clientY) {
    this.setState({
      marginTop: this.props.openedMargin,
      clientY: clientY,
      animEnabled: true,
      open: true,
    })
  }

  close(clientY) {
    this.setState({
      marginTop: this.props.closedMargin,
      clientY: clientY,
      animEnabled: true,
      open: false,
    })

  }

  setScrollPos(event) {
    this.setState({scrollPos: event.target.scrollTop})
  }

  render() {
    let styles = {}
    if(this.state.marginTop < 0){
      styles['marginTop']=  `${ this.state.marginTop }px`
      styles['height']= `calc(100% + ${-this.state.marginTop }px`
    } else {
      styles['paddingTop'] = `${ this.state.marginTop }px`
    }
    return (
      <div className="c-drawer-container">
        <div className={classNames('c-drawer-mover', {'animate': this.state.animEnabled})} style={styles}>
        <div
          onTouchStart={ this.startTouch.bind(this) }
          onTouchMove={ this.moveTouch.bind(this) }
          onTouchEnd={ this.endTouch.bind(this) }
          className="c-drawer">
          <div className="c-drawer__panel">
            {this.props.drawerComponent}
            <div className={classNames('c-drawer__handle', {'handle-down': !this.state.open, 'handle-up': this.state.open})}
                    onClick={(ev) => this.state.open ? this.close() : this.open()}
            ></div>
          </div>
        </div>
        <div
          onTouchStart={ this.startTouchMain.bind(this) }
          onTouchMove={ this.moveTouchMain.bind(this) }
          onTouchEnd={ this.endTouch.bind(this) }
          onScroll={this.setScrollPos.bind(this)}
          className='c-drawer-main'>
          {this.props.mainComponent}
        </div>
          </div>
      </div>
    );
  }
}

export default Drawer;
