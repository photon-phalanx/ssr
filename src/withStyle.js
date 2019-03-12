import React, {Component} from 'react'

export default (Comp, style) => {
  return class ComponentWithStyle extends Component {
    componentWillMount () {
      console.log(this.props)
      if (this.props.staticContext) {
        this.props.staticContext.css = style._getCss()
      }
    }
    render () {
      return <Comp {...this.props}/>
    }
  }
}
