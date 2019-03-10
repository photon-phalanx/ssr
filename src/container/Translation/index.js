import React, {Component, useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actions from './store/actions'

const Translation = (props) => {
  if (!props.login) {
    return <Redirect to='/'/>
  }
  useEffect(() => {
    console.log('effect hook actived')
    if (!props.list.length) props.getTranslationList()
  })
  return <div>
    <div>Translation</div>
    {props.list.map(({id, text}) => (
      <div key={id}>trans{text}</div>
    ))}
  </div>
}

Translation.loadData = (store) => {
  return store.dispatch(actions.getTranslationList())
}


const mapStateToProps = (state) => ({
  list: state.translation.list,
  login: state.header.login
})

const mapDispatchToProps = {
  getTranslationList: actions.getTranslationList,

}
export default connect(mapStateToProps, mapDispatchToProps)(Translation)
