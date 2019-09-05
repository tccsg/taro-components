import { ComponentClass } from 'react'
import { View, Image } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './index.less'
import xPng from '../../assets/icons/icon/x.png'
type Props = {
  title: string,
  id?:string,
  submitcontent?: string,
  submitHandle?: Function | null,
  showHandler?: Function,
  hideHandler?: Function,
  dwHeight?: string,
  showBtn?: boolean
}
type PageOwnProps = {
  children: any
}
type IProps = Props & PageOwnProps
type IState = {
  open: Boolean
}
interface Drawer {
  props: IProps,
  state: IState,
  showModel: Object
}
class Drawer extends Component {
  constructor(props) {
    super(props)
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.state = {
      open: false
    }
    this.showModel = {
      height: '100vh',
      opacity: '.4',
      transition: 'opacity .3s linear,height 0s ease 0s'
    }
  }
  openDrawer () {
    const { showHandler } = this.props
    this.setState({
      open: true
    })
    showHandler && showHandler()
  }
  closeDrawer () {
    const { hideHandler } = this.props
    this.setState({
      open: false
    })
    hideHandler && hideHandler()
  }
  render () {
    const {
      title,
      submitcontent,
      submitHandle,
      dwHeight = 'auto',
      showBtn = true
    } = this.props
    return (
      <View>
        <View
          className='mask'
          onClick={this.closeDrawer}
          style={this.state.open ? this.showModel : {}}></View>
        <View
          ref="DB"
          id='drawerbox'
          className='drawer-box'
          style={{transform: !this.state.open ? 'translateY(100%)' : '', height: dwHeight}}>
          <View className="drawer-header">
            <View className="title">{title}</View>
            <View className='closebtn' onClick={this.closeDrawer}>
              <Image src={xPng}></Image>
            </View>
          </View>
          <View className='drawer-container'>
            <View style={{minHeight: '200rpx'}}>{this.props.children}</View>
            <View className='drawer-btn-wrap'>
              <View
                style={submitHandle && showBtn ? {display: 'block'} : {display: 'none'}}
                className='drawer-submit-btn'
                onClick={() => {submitHandle && submitHandle()}}>{submitcontent}</View>
            </View>
          </View>
          <View className='ios-black-bar-replace'></View>
        </View>
      </View>
    )
  }
}

export default Drawer as ComponentClass<Props>