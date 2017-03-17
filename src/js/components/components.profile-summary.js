import React from 'react';

class ProfileSummary extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <section className="c-profile-summary">
        <article className="c-profile-summary__head">
          <img src={ user.image }/>
          <p className="c-profile-summary__data">last seen: { user.lastSeenAt }</p>
        </article>

        <article className="c-profile-summary__info">
          <h1 className="c-profile-summary__name">{ user.firstname } { user.lastname }</h1>
          <h2 className="c-profile-summary__function">{ user.headline }</h2>

          <ul className="c-profile-summary__contact">
            <li>{ this.renderEmail(user.email) }</li>
            <li>{ this.renderPhone(user.phone) }</li>
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

  renderEmail(email) {
    const url = `mailto:${ email }`;
    return (<a href={ url }>{ email }</a>);
  }

  renderPhone(phone) {
    const url = `tel:${ phone }`;
    return (<a href={ url }>{ phone }</a>);
  }

  renderTwitterHandle(twitterHandle) {
    const url = `https://twitter.com/${ twitterHandle }`;
    return (<a href={ url } target="_blank">twitter.com/{ twitterHandle }</a>);
  }
}

export default ProfileSummary
