import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Cheader from '../../components/cheader'
import { Navbar } from '../../lib'
import './navbar.less'

type IState = {
  title: string
}
type IProps = {
}
interface Pnavbar {
  state: IState,
  props: IProps
}
class Pnavbar extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI',
    navigationStyle: 'custom'
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
  modalVisiable (type) {
    this.setState({
      show: type
    })
  }
  render () {
    const { title } = this.state
    return (
      <View>
        <Navbar title='自定义头部导航'></Navbar>
        <Cheader title={title}></Cheader>
        <View className='modal-wrap'>
        
        </View>
      </View>
    )
  }
}

export default Pnavbar
