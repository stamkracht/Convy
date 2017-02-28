import { browserHistory } from 'react-router';
import Adapter from '../adapter'
import store from '../store'
import * as chats from './chats'
import * as chat from './chat'
import * as contacts from './contacts'
import * as me from './me'
import * as header from './header'
import * as swiper from './swiper'

export default {
  chats,
  contacts,
  me,
  header,
  swiper,
  chat,
}
