import React from 'react';
import ReactDOM from 'react-dom';

import Entry from './scopes.entry';

class Application extends React.Component {
  render() {
    return (
      <section>
        <Entry/>
      </section>
    );
  }

  // functions.
}

ReactDOM.render(<Application/>, document.querySelector('.s-application'));

export default Application;
