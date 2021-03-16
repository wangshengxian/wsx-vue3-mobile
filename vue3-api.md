<!--
 * @Author: wangshengxian
 * @Date: 2020-12-11 11:33:42
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-12-30 12:50:31
 * @Desc:
-->

### 常用 api

```
setup函数提供了两个参数 props和context,重要的是在setup函数里没有了this,在 vue3.0 中，访问他们变成以下形式： this.xxx=》context.xxx

```

```

1、toRef(state, '响应式对象 key') ==》
2、toRefs(state) ==》

```

### 正确的 api 使用

```js
import { useRouter } from 'vue'
const router = useRouter() // 获取路由实例对象
const cr = router.currentRoute.value // 获取当前路由

import { useRoute } from 'vue'
const route = useRoute()
const query = route.query // 获取query传参
const params = route.params // 获取params传参
const path = route.path
const meta = route.meta
```

### hooks

```

1、useRouter ==> 通过该 hooks 可以用来实现路由的跳转，和 vue2.x this.$router 功能相同
2、useRoute ==> 通过该hooks可以用来获取路由跳转的参数，和vue2.x this.$route 功能相同
3、useStore ==> 通过该 hooks 可以用来获取 store,和 vue2.x this.\$store 功能相同

```
