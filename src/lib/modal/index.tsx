import { View, Block } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import Mask from '../mask'
// import Emitter from '../../config/emitter'
import './index.less'

type PageStateProps = {
  visiable: boolean,
  title?: string,
  animate?: boolean,
  cancelHandler?: () => void,
  confirmHandler?: () => void
}
type PageOwnProps = {
  children?: any
}
type PageState = {
}
type IState = PageState
type IProps = PageStateProps & PageOwnProps
type PrivateState = {
  didMount: boolean,
  maskElement: any
}
interface Modal extends PrivateState {
  props: IProps,
  state: IState
}
class Modal extends Component {
  constructor(props) {
    super(props)
  }
  componentDidShow () {}
  componentDidMount () {}
  getMaskElement(ref) {
    if (ref) this.maskElement = ref
  }
  render () {
    const { visiable,
      animate = true,
      cancelHandler = () => {},
      confirmHandler = () => {},
      title = '' } = this.props
    return (
      <Block>
        <Mask visiable={visiable} animate={animate} ref={ref => {this.getMaskElement(ref)}}></Mask>
        <View className={visiable ? animate ? 'modal-wrap show' : 'modal-wrap no_animate_show' : 'modal-wrap'}>
          <View className='modal-box'>
            <View className='modal-title'>{title}</View>
            <View className='modal-container'>
              {this.props.children}
            </View>
            <View className='modal-btn-wrap'>
              <View className='btn'
                style={{background: '#f2f3f5', color: '#8e8e8e'}}
                onClick={() => {cancelHandler()}}>取消</View>
              <View className='btn' onClick={() => {confirmHandler()}}>确认</View>
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

export default Modal