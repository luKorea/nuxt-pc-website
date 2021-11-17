import Vue from 'vue'

import {
  Pagination, Alert, Card, Dialog, Message,
  Form,
  FormItem,
  Button,
  Input,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui' //引入分页组件

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
