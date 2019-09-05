import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'
import Logo from '../../assets/icons/digui.png'

const toPage = (url) => {
  Taro.navigateTo({
    url
  })
}

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }

  componentDidMount () {}

  render () {
    return (
      <View className='index'>
        <View className='logo-wrap'>
          <View className='logo'>
            <Image src={Logo}></Image>
          </View>
          <View className='l-name'>Dg UI</View>
        </View>
        <View className='component-coll-wrap'>
          <View className='c-item' onClick={() => {toPage('../components/components?type=base')}}>
            <View className='coll-middle'>
              <View className='c-title'>基础</View>
              <View className='c-sub'>包含按钮</View>
            </View>
          </View>
          <View className='c-item' onClick={() => {toPage('../components/components?type=view')}}>
            <View className='coll-middle'>
              <View className='c-title'>视图</View>
              <View className='c-sub'>包含蒙版，头像</View>
            </View>
          </View>
          <View className='c-item' onClick={() => {toPage('../components/components?type=opr')}}>
            <View className='coll-middle'>
              <View className='c-title'>操作反馈</View>
              <View className='c-sub'>包含对话框</View>
            </View>
          </View>
          <View className='c-item' onClick={() => {toPage('../components/components?type=nav')}}>
            <View className='coll-middle'>
              <View className='c-title'>导航</View>
              <View className='c-sub'>包含自定义头部，抽屉</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
