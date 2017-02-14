import React from 'react';

class AppBackground extends React.Component {
  render() {
    let backgroundImage = { backgroundImage: `url('${this.props.backgroundImage}')` };

    return (
      <div className="c-app-background" style={ backgroundImage }></div>
    );
  }

  // functions.
}

export default AppBackground;
