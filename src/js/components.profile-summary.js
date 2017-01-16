import React from 'react';

class ProfileSummary extends React.Component {
  render() {
    return (
      <section className="c-profile-summary">
        <article className="c-profile-summary__img">
          <img src="http://lorempixel.com/300/300/business/"/>
        </article>

        <article className="c-profile-summary__info">
          <p className="c-profile-summary__data">last seen 18:08</p>
          <h1 className="c-profile-summary__name">Martha Diaz</h1>
          <h2 className="c-profile-summary__function">Lead Developer at Stamkracht</h2>

          <ul className="c-profile-summary__contact">
            <li><a href="#">martha@stamkracht.com</a></li>
            <li><a href="#">+316 1234 5678</a></li>
            <li><a href="https://twitter.com/everybodylovesmartha">twitter.com/everybodylovesmartha</a></li>
          </ul>

          <ul className="c-profile-summary__location">
            <li>Oostenburgervoorstraat 72</li>
            <li>1018MR, Amsterdam</li>
            <li>Nederland</li>
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

  // functions.
}

export default ProfileSummary
