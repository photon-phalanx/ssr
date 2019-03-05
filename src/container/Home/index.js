import React, {Component} from 'react'
import Header from '../../components/header'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'
class Home extends Component{

  state = {
  }

  componentWillMount () {
    this.props.getHomeList()
  }

  render () {
    return <div>
      <Header/>
      <div>HOME334 {this.props.home.name}</div>
      <button onClick={() => {console.log(123)}}>button</button>
    </div>
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  getHomeList
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
