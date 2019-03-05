import React, {Component} from 'react'
import Header from '../../components/header'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'
class Home extends Component{

  state = {}

  componentWillMount () {
    this.props.getHomeList()
  }

  static loadData = async (store) => {
    // 在服务端加载数据（路由提供）
    return store.dispatch(getHomeList())
  }

  render () {
    return <div>
      <Header/>
      <div>HOME334 {this.props.home.name}</div>
      <ul>
        {this.props.home.newsList.map(v => (
          <li key={v.id}>{v.news}</li>
        ))}
      </ul>
      <button onClick={() => {console.log(123)}}>button</button>
    </div>
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  getHomeList
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
