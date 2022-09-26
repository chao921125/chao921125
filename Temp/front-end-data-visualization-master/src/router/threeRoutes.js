// three
export default {
  path: '/three',
  name: 'THREE',
  component: () => import('@/views/Three/index.vue'),
  meta: {
    navState: true,
    navName: 'Three',
    icon: 'el-icon-cold-drink'
  },
  children: [
    {
      path: 'three-basic',
      name: 'ThreeBasic',
      component: () => import('@/views/Three/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'three-stated',
          name: 'ThreeStated',
          component: () => import('@/views/Three/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        }
      ]
    }
  ]
}