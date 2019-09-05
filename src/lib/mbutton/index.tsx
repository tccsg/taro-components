import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './index.less'
type PageStateProps = {
  label: string,
  handler?: Function,
  bcolor?: string,
  color?: string
}
type PageOwnProps = {
  children?: any
}
type PageState = {}
type IState = PageState
type IProps = PageStateProps & PageOwnProps

interface Mbutton {
  props: IProps,
  state: IState
}
class Mbutton extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
  }
  render () {
    const {
      label,
      bcolor = '#27AE7E',
      color = '#ffffff',
      handler = () => {}
    } = this.props
    return (
      <View
        style={{backgroundColor: bcolor, color: color}}
        className='my-button'
        onClick={() => {handler()}}>{label}</View>
    )
  }
}

export default Mbutton