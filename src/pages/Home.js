import './Home.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

class Home extends Component {
  static prefetch(store) {
    return store.dispatch(fetchUsers(1))
  }
  initializeReactGA() {
    ReactGA.initialize('UA-142539435-1');
    ReactGA.pageview('/homepage');
  }
  componentDidMount() {
    this.initializeReactGA();

  }
  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.novelsname}>{`${user.novelsname}`}</li>
      )
    })
  }

  render() {
    return (
      <div className="Home">
        {/* <h1>Welcome to React-Starter</h1>
        <div className="Home-users">
          <h3 style={{ color: 'gray' }}>SSR Random Users</h3>
          <ul>{this.renderUsers()}</ul>
        </div> */}
        <Helmet>
          <title>Đọc truyện online - YYtruyen.com</title>
          <meta name="description" content="Đọc truyện miễn phí, cập nhật nhanh nhất các truyện ngôn tình, truyện kiếm hiệp, xuyên không, sủng, ngược và nhiều thể loại khác" />
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="đọc truyện, đọc truyện online, truyện ngôn tình, truyện kiếm hiệp, xuyên không" />
        </Helmet>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Home)
