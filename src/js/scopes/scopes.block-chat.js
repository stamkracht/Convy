import React from 'react';

class BlockChat extends React.Component {
  render() {
    return (
      <section className="s-block-chat">
        <div className="s-block-chat__header">
          <p>Unread messages</p>
          <ul className="s-block-chat__data">
            <li>31 augustus</li>
          </ul>
        </div>

        <div className="s-block-chat__main">
          <article className="c-message">
            <h1 className="c-message__contact-name">Vincent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ab minima aspernatur molestiae consectetur minus, deleniti laborum rem delectus pariatur, odio esse necessitatibus veniam commodi fuga optio temporibus a iste cupiditate quidem quo voluptates adipisci, illo ea! Veniam, debitis aspernatur, amet ullam et consequuntur aliquam quo magni, obcaecati accusantium nostrum.</p>
            <ul className="c-message__data">
              <li>17:40</li>
            </ul>
          </article>

          <article className="c-message">
            <h1 className="c-message__contact-name">Paul</h1>
            <p>Lorem!</p>
            <ul className="c-message__data">
              <li>17:48</li>
            </ul>
          </article>

          <article className="c-message c-message--user">
            <p>Provident error ipsa non sapiente alias voluptatem earum, mollitia totam ut harum.</p>
            <ul className="c-message__data">
              <li>17:49</li>
            </ul>
          </article>
        </div>
      </section>
    );
  }

  // functions.
}

export default BlockChat;
