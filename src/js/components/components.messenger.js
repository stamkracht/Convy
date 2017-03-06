import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAttachment: false,
      inputHeight: 50,
    };
  }

  render() {
    let messengerAttachmentClass = `c-messenger__attachment ${this.state.showAttachment ? 'state-active' : ''}`;

    let inputHeight = { height: `${ this.state.inputHeight }px` };

    return (
      <article className="c-messenger" style={ inputHeight }>
        <button className={ messengerAttachmentClass } onClick={ this.toggleAttachment.bind(this) }>
          <i className="icon-add-circle-outline"></i>
        </button>

        <textarea
          style={ inputHeight }
          placeholder="Share knowledge"
          onKeyUp={ this.keyUpInteraction.bind(this) }
        ></textarea>

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

  keyUpInteraction(e) {
    let self = this;
    e.persist();

    setTimeout(function(){
      self.setState({
        inputHeight: 50,
      });

      console.info('input scroll-height: ', e.target.scrollHeight);
      let scrollHeight = e.target.scrollHeight;

      self.setState({
        inputHeight: scrollHeight,
      });
    }, 0);
  }
}

export default Messenger;
