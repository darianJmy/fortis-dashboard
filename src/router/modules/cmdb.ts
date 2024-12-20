// 最简代码，也就是这些字段必须有
export default {
  path: "/cmdb",
  meta: {
    icon: "mdi:alpha-c-circle-outline",
    title: "CMDB"
  },
  children: [
    {
      path: "/cmdb/resource/index",
      name: "Resource",
      component: () => import("@/views/cmdb/resource/index.vue"),
      meta: {
        icon: "mdi:receipt-text-plus-outline",
        title: "资源",
        showParent: true
      }
    },
    {
      path: "/cmdb/model",
      name: "Model",
      meta: {
        icon: "mdi:view-module",
        title: "模型",
        showParent: true
      },
      children: [
        {
          path: "/cmdb/model/index",
          component: () => import("@/views/cmdb/model/manager/index.vue"),
          name: "ModelManager",
          meta: {
            icon: "mdi:movie-edit-outline",
            title: "模型管理",
            showParent: true
          }
        },
        {
          path: "/cmdb/model/association",
          component: () => import("@/views/cmdb/model/association/index.vue"),
          name: "ModelAssociation",
          meta: {
            icon: "mdi:account-supervisor-circle",
            title: "关系类型",
            showParent: true
          }
        }
      ]
    }
  ]
};
