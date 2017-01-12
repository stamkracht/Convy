import React from 'react';

class Messenger extends React.Component {
  render() {
    return (
      <article className="c-messenger">
        <button className="c-messenger__attachment" onClick={this._toggleAttachment.bind(this)}>
          <i className="icon-add-circle-outline"></i>
        </button>

        <textarea placeholder="Share knowledge"></textarea>

        <button className="c-messenger__submit">
          <i className="icon-send"></i>
        </button>
      </article>
    );
  }

  _toggleAttachment() {
    console.log('set class to: state-active');
  }
}

export default Messenger;
