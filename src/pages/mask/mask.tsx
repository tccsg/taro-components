import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Cheader from '../../components/cheader'
import { Mask } from '../../lib'
import './mask.less'

type IState = {
  title: string,
  show: boolean
}
type IProps = {
}
interface Pmask {
  state: IState,
  props: IProps
}
class Pmask extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }
  showMask () {
    this.setState({
      show: true
    })
  }
  componentDidMount () {
    const { title = '' } = this.$router.params
    this.setState({
      title
    })
  }

  render () {
    const { title, show = false } = this.state
    return (
      <View>
        <Cheader title={title}></Cheader>
        <View className='mask-wrap'>
          <View className='btn' onClick={this.showMask}>显示蒙版</View>
        </View>
        <Mask visiable={show}></Mask>
      </View>
    )
  }
}

export default Pmask
