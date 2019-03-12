import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'
import withStyle from '../../withStyle'
import style from './style.css'

class Home extends Component{

  state = {}

  componentWillMount () {
    console.log(this.props)
    if (!this.props.home.newsList.length) this.props.getHomeList()
  }

  static loadData = async (store) => {
    // 在服务端加载数据（路由提供）
    return store.dispatch(getHomeList())
  }

  render () {
    return <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, style))
