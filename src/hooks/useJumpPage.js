/*
 * @Author: wangshengxian
 * @Date: 2021-01-08 14:07:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2021-01-08 14:15:28
 * @Desc:
 */
import { useRouter } from 'vue-router'

const routeMethods = ['push', 'go', 'replace']

const useJumpPage = (routerName, type = 'push', query = {}) => {
  const router = useRouter()
  console.log('-router-', router)
  switch (type) {
    case 'push':
      router.push({ name: routerName, query })
  }
}

export default useJumpPage
