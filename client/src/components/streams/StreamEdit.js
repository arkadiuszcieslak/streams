import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return "Loading...";
    }
    return (
      <div>
        <h2>Stream</h2>
        <div className="ui celled list">
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {this.props.stream.title}
          </div>
          <div className="description">
            {this.props.stream.description}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
