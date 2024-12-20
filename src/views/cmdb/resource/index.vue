<script setup lang="ts">
defineOptions({
  name: "Resource"
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4 w-full p-4">
    <el-card style="max-width: 100%" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item hover-effect">
        {{ "List item " + o }}
      </p>
    </el-card>
  </div>
</template>

<style scoped>
/* 定义悬停效果 */
.hover-effect {
  padding: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.hover-effect:hover {
  color: #409eff; /* 鼠标悬停时文字颜色 */
  background-color: #f5f5f5; /* 鼠标悬停时背景色 */
  border-radius: 4px; /* 可选，添加圆角 */
}
</style>
