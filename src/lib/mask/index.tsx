import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './index.less'
type PageStateProps = {
  bgcolor?: string,
  animate?: boolean,
  visiable: boolean,
  noopacity?: boolean,
  touchclose?: boolean,
  closeHandler?: () =>  any
}
type PageOwnProps = {
  children?: any
}
type PageState = {}
type IState = PageState
type IProps = PageStateProps & PageOwnProps

interface Mask {
  props: IProps,
  state: IState
}
class Mask extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {}
  render () {
    const {
        bgcolor = 'rgb(0, 0, 0)',
        animate = true,
        visiable,
        noopacity=false
    } = this.props
    return (
      <View className={
          visiable
            ? animate
              ? 'mask-wrap show'
              : 'mask-wrap no_animate_show'
            : 'mask-wrap'}
        style={
          noopacity
            ? {background: bgcolor, opacity: 1}
            : {background: bgcolor}}>
        {this.props.children}
      </View>
    )
  }
}

export default Mask