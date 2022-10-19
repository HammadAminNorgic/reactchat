
/* eslint-disable */
import logo from './logo.svg';
import { connect } from 'react-redux';
import {storeUserInfo,logoutUser} from '../src/app/redux/user/actions';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory as history } from "history";
import Dashboard from './app/screens/dashboard/Dashboard';
import Login from './app/screens/authentication/Login';
import Signup from './app/screens/authentication/Signup';


const PrivateRoutes=(propsPrivate)=> {
  let props = propsPrivate.routerprops;

  switch (props.location.pathname) {
    case "/dashboard":
      return <Route path="/dashboard" component={Dashboard} />;
      default:
      return (
        <Route exact path="*" render={() => <Redirect to="/dashboard" />} />
      );
  }
}
const PublicRoutes=(propsPublic)=>{
  let props = propsPublic.routerprops;

  switch (props.location.pathname) {
    case "/login":
      return <Route path="/login" component={Login} />;
    case "/signup":
      return <Route path="/signup" component={Signup} />;
    default:
      return <Route exact path="*" render={() => <Redirect to="/login" />} />;
  }
}

const App=(props)=> {
  console.log('>>props in app.js==>',props);
  return (
    <Router history={history}>
    <Switch>
      <Route
        path="/"
        render={(routerprops) => {
          if (props.user) {
            return <PrivateRoutes routerprops={routerprops} />;
          } else {
            return <PublicRoutes routerprops={routerprops} />;
          }
        }}
      ></Route>
    </Switch>
  </Router>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    reduxstoreUserInfo: (user) => dispatch(storeUserInfo(user)),
    reduxlogoutUser: () => dispatch(logoutUser()),

  };
};
const mapStateToProps = (state) => {
  console.log('redux state==>',state);
  return {
    user: state.user.user,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
