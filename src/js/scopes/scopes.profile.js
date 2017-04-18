import React from 'react';
import { connect } from 'react-redux';

import ProfileSummary from '../components/components.profile-summary';
import actions from '../actions'
import config from '../config';

class Profile extends React.Component {

  render() {

    const user = this.props.isRoot ? this.props.meState.me : this.props.user;

    return (
      <section className="s-profile">
        {
          this.props.meState.isFetching ?
            <div>Loader thingy</div> :
            <ProfileSummary user={user}/>
        }
      </section>
    );
  }

  componentWillMount() {
    if ( this.props.isRoot ) {
      this.props.setProfileHeader();
    }
  }
}

Profile.defaultProps = {
  isRoot: true,
};

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setProfileHeader: () => {
      dispatch(actions.header.setMode('PROFILE'));
    }
  };
};

const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConnect;
