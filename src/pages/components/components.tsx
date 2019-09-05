import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Coll from '../../config/list.config'
import './components.less'

type IState = {
  title: string,
  list: any
}
interface Components {
  state: IState
}
const toPage = (url) => {
  Taro.navigateTo({
    url
  })
}
class Components extends Component {
  config: Config = {
    navigationBarTitleText: 'Dg UI'
  }

  componentDidMount () {
    const { type = 'base' } = this.$router.params
    const _d = Coll[type]
    this.setState({
      title: _d.title,
      list: _d.list
    })
  }

  render () {
    const { title, list = [] } = this.state
    return (
      <View>
        <View className='header-wrap'>
          <View className='title'>{title}</View>
        </View>
        {
          list.map((item, index) => {
            return <View
              onClick={() => {toPage(`${item.url}?title=${item.label}`)}}
              key={`_${index}`} className='list-wrap'>
              <View className='item'>{item.label}</View>
            </View>
          })
        }
      </View>
    )
  }
}

export default Components
