import Vue from 'vue'

import {
  Pagination, Alert, Card, Dialog, Message,
  Form,
  FormItem,
  Button,
  Input,
  Menu,
  MenuItem,
  Submenu,
  Select,
  Option,
  Popover,
  Carousel,
  CarouselItem
} from 'element-ui' //引入分页组件


Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)
Vue.use(Select)
Vue.use(Option)
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Input)
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Alert);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);

Vue.prototype.$message = Message;
