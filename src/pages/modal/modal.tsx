import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Cheader from '../../components/cheader'
import { Modal } from '../../lib'
import './modal.less'

type IState = {
  title: string,
  show: boolean
}
type IProps = {
}
interface Pmodal {
  state: IState,
  props: IProps
}
class Pmodal extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      show: false
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
    const { title, show } = this.state
    return (
      <View>
        <Cheader title={title}></Cheader>
        <View className='modal-wrap'>
        <View className='btn' onClick={() => {this.modalVisiable(true)}}>显示Modal</View>
        </View>
        <Modal visiable={show}
          confirmHandler={() => {
            Taro.showToast({
              title: '确认',
              icon: 'none'
            })
          }}
          cancelHandler={() => {this.modalVisiable(false)}}
          title='modal'>
          <View>
            内容
          </View>
        </Modal>
      </View>
    )
  }
}

export default Pmodal
