import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAttachment: false
    };
  }

  render() {
    let messengerAttachmentClass = `c-messenger__attachment ${this.state.showAttachment ? 'state-active' : ''}`;

    return (
      <article className="c-messenger">
        <button className={messengerAttachmentClass} onClick={this.toggleAttachment.bind(this)}>
          <i className="icon-add-circle-outline"></i>
        </button>

        <textarea placeholder="Share knowledge"></textarea>

        <button className="c-messenger__submit">
          <i className="icon-send"></i>
        </button>
      </article>
    );
  }

  toggleAttachment() {
    this.setState({
      showAttachment: !this.state.showAttachment
    });
  }
}

export default Messenger;
