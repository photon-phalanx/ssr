import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'
import { handleLogout } from './store/actions'
const Header = (props) => {
  function loginClick () {
    props.handleLogin()
  }

  function logoutClick () {
    props.handleLogout()
  }

  return <div>
    <header>header</header>
    <Link to='/'>Home</Link>
    <br/>
    {
      props.login ? (
        <Fragment>
          <Link to='/translation'>trans</Link>
          <br/>
          <div onClick={logoutClick}>logoutButton</div>
          <br/>
        </Fragment>
      ) : (
        <div onClick={loginClick}>LoginButton</div>
      )
    }
  </div>
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispatchToProps = {
  handleLogin: actions.handleLogin,
  handleLogout: actions.handleLogout,

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
