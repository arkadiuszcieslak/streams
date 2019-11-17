import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '577328116033-g1j17jg1rilmi2k57cl1pn744r40jei6.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChanged);
      });
    });
  }

  onAuthChanged = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know</div>;
    } else if (this.state.isSignedIn) {
      return <div>I'm signed in</div>;
    } else {
      return <div>I'm NOT signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
