/**
 * Created by she on 2018/11/19.
 */
import 'muse-ui/lib/styles/base.less'
import {AppBar,Icon,Button,List,Avatar} from 'muse-ui'

const components = [AppBar,Icon,Button,List,Avatar]

export default {
  install(Vue){
    components.forEach(c => Vue.use(c))
  }
}
