import React, { PureComponent } from "react";

class LoginPage extends PureComponent {
  render() {
    return <h2>Login</h2>;
  }
}

function withAuth(WarpperComponent) {
  return (props) => {
    const { isLogin } = props;
    return isLogin ? <WarpperComponent {...props} /> : <LoginPage />;
  };
}

class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>;
  }
}

const WithAuthCart = withAuth(CartPage);

class App extends PureComponent {
  render() {
    return (
      <div>
        <WithAuthCart isLogin={true} />
      </div>
    );
  }
}

export default App;
