import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, updateUser } from '../../redux/reducer'
import axios from 'axios';
import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
      .then(res => this.props.updateUser(res.data))
  }

  logout() {
    axios.post('/api/auth/logout')
      .then(res => this.props.logout(res.data))
  }

  render() {
    return this.props.location.pathname !== '/' &&
      <div className='nav'>
        <div className='nav-profile-container'>
          <div className='nav-profile-pic' style={{ backgroundImage: `url(${this.props.profilePicture})` }}></div>
          <p>{`${this.props.username}`}</p>
        </div>
        <div className='nav-links'>
          <Link to='/dash'>
            <img className='nav-img' src={homeLogo} alt='home' />
          </Link>
          <Link to='/form'>
            <img className='nav-img' src={newLogo} alt='new post' />
          </Link>
        </div>
        <Link to='/'>
          <img className='nav-img logout' src={logoutLogo} alt='logout' />
        </Link>
      </div>
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps() {
  return {
    updateUser,
    logout
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))