import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Cheader from '../../components/cheader'
import { Mbutton } from '../../lib'
import './mbutton.less'

type IState = {
  title: string
}
type IProps = {
}
interface Components {
  state: IState,
  props: IProps
}
class Components extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }

  componentDidMount () {
    const { title = '' } = this.$router.params
    this.setState({
      title
    })
  }

  render () {
    const { title = '' } = this.state
    return (
      <View>
        <Cheader title={title}></Cheader>
        <View className='mbutotn-wrap'>
          <View className='buttons'>
            <Mbutton
              label='按钮'
              handler={() => {Taro.showToast({title:'点击了按钮', icon: 'none'})}}
              bcolor='#09c'
              color='#fff'></Mbutton>
          </View>
          <View className='buttons'>
            <Mbutton
              label='按钮2'></Mbutton>
          </View>
        </View>
      </View>
    )
  }
}

export default Components
