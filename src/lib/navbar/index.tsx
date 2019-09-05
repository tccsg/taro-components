import { View, Image } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './index.less'

import backPng from '../../assets/icons/icon/back.png'
import homePng from '../../assets/icons/icon/home.png'

function toHome () {
  Taro.reLaunch({
    url: '../index/index'
  })
}
type PageStateProps = {
  title?: string,
  renderFun?: any,
  renderMiddle?: any,
  funType?: 'custom' | 'back' | 'home_back',
  middleType?: 'custom' | 'default',
  initHandler?: (h:any) => void
}
type PageOwnProps = {
  children?: any
}
type PageState = {
  statusHeight: any,
  navHeight: any,
  funType?: string
}
type IState = PageState
type IProps = PageStateProps & PageOwnProps

interface Navbar {
  props: IProps,
  state: IState
}
class Navbar extends Component {
  constructor(props) {
    super(props)
    const { funType } = props
    let defaultState = {
      statusHeight: '',
      navHeight: ''
    }
    const stateValue = this._mergeStateProps(funType)

    this.state = Object.assign({}, stateValue, defaultState)
  }
  backPage = () => {
    if (this.getPageRouter()) {
      Taro.navigateBack()
    } else {
      toHome()
    }
  }
  componentDidMount () {
    const { initHandler } = this.props
    Taro.getSystemInfo().then(res => {
      var isIos = res.system.indexOf('iOS') > -1;
        const heights = {
          statusHeight: res.statusBarHeight,
          navHeight: isIos ? 44 : 48
        }
        this.setState(heights)
        typeof initHandler === 'function' && initHandler(heights)
    })
  }
  componentWillReceiveProps (nextProps) {
    const { funType } = nextProps
    const stateValue = this._mergeStateProps(funType)
    this.setState(stateValue)
  }
  getPageRouter () {
    const pages = Taro.getCurrentPages()
    if (pages.length <= 1) {
      return false
    } else {
      return true
    }
  }
  _mergeStateProps (funType) {
    // 用于合并 state和props 默认合并策略 props优先
    let _funType: String
    if (!funType) {
      if (this.getPageRouter()) {
        _funType = 'home_back'
      } else {
        _funType = 'home_back'
      }
    } else {
      _funType = funType
    }
    return {
      funType: _funType
    }
  }
  render () {
    const {
      statusHeight,
      navHeight,
      funType = 'home_back'
    } = this.state
    const { title = '', middleType = 'default' } = this.props
    return (
      <View>
        <View style={{height: `${statusHeight + navHeight}px`}}></View>
        <View className='topbar'>
          <View className='status' style={{height: `${statusHeight}px`}}></View>
          <View className='navbar' style={{height: `${navHeight}px`}}>
            <View className='fun-wrap'>
              {
                {
                  'custom':     this.props.renderFun,
                  'back':       <View className='navbar_back'
                                  onClick={this.backPage}>
                                  <Image src={backPng}></Image>
                                </View>,
                  'home_back':  <View className='navbar_back_home'>
                                  <View className='icon' onClick={this.backPage}>
                                    <Image src={backPng}></Image>
                                  </View>
                                   | 
                                  <View className='icon' onClick={this.backPage}>
                                    <Image src={homePng}></Image>
                                  </View>
                                </View>
                }[funType]
              }
            </View>
            {middleType === 'default'
                ? <View className='navbar_title'
                    style={{height: `${navHeight}px`}}>
                    <View>{title}</View>
                  </View>
                : <View className='navbar_middle'
                    style={{height: `${navHeight}px`}}>
                    {this.props.renderMiddle}
                  </View>
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Navbar