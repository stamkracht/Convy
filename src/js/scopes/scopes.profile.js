import React from 'react';
import { connect } from 'react-redux';

import ProfileSummary from '../components/components.profile-summary';

class Profile extends React.Component {
  render() {
    return (
      <section className="s-profile">
        {
          this.props.meState.isFetching ?
            <div>Loader thingy</div> :
            <ProfileSummary user={this.props.meState.me}/>
        }

      </section>
    );
  }

  // functions.
}

const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConnect;
