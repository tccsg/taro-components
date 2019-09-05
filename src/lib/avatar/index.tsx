import { View, Image } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './index.less'
type PageStateProps = {
  scrStr: string,
  defaultSrc?: string | boolean,
  size?: number,
  fontSize?: number
}
type PageOwnProps = {
  children?: any
}
type PageState = {}
type IState = PageState
type IProps = PageStateProps & PageOwnProps
function getDefaultAvatar (str) {
  if (typeof str === 'string') {
    return str.substring(0,1)
  } else {
    return ''
  }
} 
interface Avatar {
  props: IProps,
  state: IState
}
class Avatar extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
  }
  render () {
    const { scrStr, defaultSrc, size = 10, fontSize = 24 } = this.props
    return (
      <View className='component-avatar-wrap'>
        {!!scrStr
          ? <Image
            src={scrStr}
            style={{width: `${size}rpx`, height: `${size}rpx`}}
            mode='aspectFill'></Image>
          : <View className='default-wrap'
            style={{width: `${size}rpx`, height: `${size}rpx`, fontSize: `${fontSize}rpx`}}>{getDefaultAvatar(defaultSrc)}</View>
        }
      </View>
    )
  }
}

export default Avatar