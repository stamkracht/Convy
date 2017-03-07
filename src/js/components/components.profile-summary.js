import React from 'react';

class ProfileSummary extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <section className="c-profile-summary">
        <article className="c-profile-summary__img">
          <img src="http://lorempixel.com/300/300/business/"/>
        </article>

        <article className="c-profile-summary__info">
          <p className="c-profile-summary__data">last seen 18:08</p>
          <h1 className="c-profile-summary__name">{ user.firstname } { user.lastname }</h1>
          <h2 className="c-profile-summary__function">{ user.headline }</h2>

          <ul className="c-profile-summary__contact">
            <li><a href="#">{ user.email }</a></li>
            <li><a href="#">{ user.phone }</a></li>
            <li>{ this.renderTwitterHandle(user.twitterHandle) }</li>
          </ul>

          <ul className="c-profile-summary__location">
            <li>{ user.location.address }</li>
            <li>{ user.location.zipcode }, { user.location.city }</li>
            <li>{ user.location.country }</li>
          </ul>
        </article>

        <article className="c-profile-summary__stats">
          <ul>
            <li>
              <span><i className="icon-add-circle-outline"></i></span>
              <span>384</span>
            </li>
            <li>
              <span><i className="icon-pencil"></i></span>
              <span>189</span>
            </li>
            <li>
              <span><i className="icon-favorite-outline"></i></span>
              <span>95</span>
            </li>
            <li>
              <span><i className="icon-message-outline"></i></span>
              <span>114</span>
            </li>
          </ul>
        </article>
      </section>
    );
  }

  renderTwitterHandle(twitterHandle) {
    const url = `https://twitter.com/${ twitterHandle }`;

    return (<a href={ url }>twitter.com/{ twitterHandle }</a>);
  }
}

export default ProfileSummary
