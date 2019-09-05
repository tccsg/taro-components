import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Cheader from '../../components/cheader'
import { Drawer } from '../../lib'
import './drawer.less'

type IState = {
  title: string
}
type IProps = {
}
type PrivateState = {
  drawerComponent: any
}
interface Pnavbar extends PrivateState {
  state: IState,
  props: IProps
}
class Pnavbar extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  componentDidMount () {
    const { title = '' } = this.$router.params
    this.setState({
      title
    })
  }
  getComponent = (ref) => {
    if (ref) {
      this.drawerComponent = ref
    }
  }
  showDrawer () {
    if (this.drawerComponent) {
      this.drawerComponent.openDrawer()
    }
  }
  render () {
    const { title } = this.state
    return (
      <View>
        <Cheader title={title}></Cheader>
        <View className='drawer-wrap'>
          <View className='btn' onClick={this.showDrawer}>显示抽屉</View>
        </View>
        <Drawer ref={ref => {this.getComponent(ref)}} title='Drawer'>
          内容
        </Drawer>
      </View>
    )
  }
}

export default Pnavbar
