import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, age} = this.props
    return (
      <h1>
        hello,{name}
        {age}
      </h1>
    )
  }
}

export default Welcome
