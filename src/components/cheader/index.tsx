import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

type IState = {
}
type IProps = {
  title: string
}
interface Components {
  state: IState,
  props: IProps
}
class Components extends Component {

  componentDidMount () {}

  render () {
    const { title = '' } = this.props
    return (
      <View className='header-wrap'>
        <View className='title'>{title}</View>
      </View>
    )
  }
}

export default Components
