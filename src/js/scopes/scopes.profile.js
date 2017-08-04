import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions'
import config from '../config';
import ProfileSummary from '../components/components.profile-summary';

class Profile extends React.Component {

  render() {

    const user = this.props.isRoot ? this.props.meState.me : this.props.contactsState.contacts[this.props.user.id];

    return (
      <section className="s-profile">
        { this.props.meState.isFetching ? <ProfileSummary loading={ true }/> : <ProfileSummary user={ user }/> }
      </section>
    );
  }

  componentWillMount() {
    if ( this.props.isRoot ) {
      this.props.setProfileHeader();
    }
  }
}

Profile.propTypes = {
  isRoot: React.PropTypes.bool,
  user: React.PropTypes.object,
};

Profile.defaultProps = {
  isRoot: true,
}

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
