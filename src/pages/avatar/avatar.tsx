import Taro, { Component, Config } from '@tarojs/taro'
import { View, Slider } from '@tarojs/components'
import Cheader from '../../components/cheader'
import { Avatar } from '../../lib'
import './avatar.less'
import Dgpng from '../../assets/icons/digui.png'

type IState = {
  title: string,
  size: any
}
type IProps = {
}
interface Pavatar {
  state: IState,
  props: IProps
}
class Pavatar extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }
  constructor(props) {
    super(props)
    this.state = {
      size: 88,
      title: ''
    }
  }

  componentDidMount () {
    const { title = '' } = this.$router.params
    this.setState({
      title
    })
  }

  render () {
    const { title = '', size = 88 } = this.state
    return (
      <View>
        <Cheader title={title}></Cheader>
        <View className='avatar-wrap'>
          <View className='avatar'>
            <Avatar
              size={size}
              fontSize={38}
              scrStr={''}
              defaultSrc={'GeniusChen'}></Avatar>
          </View>
          <View className='avatar'>
            <Avatar
              size={size}
              fontSize={38}
              scrStr={Dgpng}
              defaultSrc={'Digui'}></Avatar>
          </View>
          <View className='slider-wrap'>
            <Slider showValue
              onChange={(e) => {
                this.setState({
                  size: e.detail.value
                })
              }}
              min={50}
              value={88}
              max={200}></Slider>
          </View>
        </View>
      </View>
    )
  }
}

export default Pavatar
