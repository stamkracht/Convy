import React from 'react';

class Messenger extends React.Component {
  render() {
    let messengerAttachmentClass = `c-messenger__attachment ${ this.props.showAttachment ? 'state-active' : '' }`;

    let inputHeight = { height: `${ this.props.messengerHeight }px` };

    return (
      <article className="c-messenger" style={ inputHeight }>
        <button className={ messengerAttachmentClass } onClick={ this.props.toggleAttachment }>
          <i className="icon-add-circle-outline"></i>
        </button>

        <textarea
          style={ inputHeight }
          placeholder="Share knowledge"
          onKeyUp={ this.props.keyUpInteraction }
        ></textarea>

        <button className="c-messenger__submit">
          <i className="icon-send"></i>
        </button>
      </article>
    );
  }
}

export default Messenger;
