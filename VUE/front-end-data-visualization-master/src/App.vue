<template>
  <el-container class="app__x">
    <el-aside width="auto" class="app__nav">
      <RootNav />
    </el-aside>
    <el-container class="app__container">
      <el-header class="app__header">
        <RootHeader />
      </el-header>
      <el-main class="app__main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>

setTimeout(() => {
  // console.log(import.meta.env)
  if (import.meta.env.MODE === 'production') {
    console.clear()
    console.log(
      `%c 稀土掘金: 德育处主任 %c\n
      项目仓库：https:\/\/gitee.com/k21vin\/front-end-data-visualization\n
      图文教程(帮我文章点个赞呗~)：https://juejin.cn/user/2673620576140030/posts`,
      `
        padding: 10px 42px;
        font-size: 32px;
        font-weight: 600;
        color: #596164;
        text-shadow: 2px 2px 6px #ffb199;
        border-radius: 10px;
        background-color:rgb(233, 233, 233);
        background-image:
          radial-gradient(circle at 100% 150%, rgb(233, 233, 233) 24%, white 24%, white 28%, rgb(233, 233, 233) 28%, rgb(233, 233, 233) 36%, white 36%, white 40%, transparent 40%, transparent),
          radial-gradient(circle at 0 150%, rgb(233, 233, 233) 24%, white 24%, white 28%, rgb(233, 233, 233) 28%, rgb(233, 233, 233) 36%, white 36%, white 40%, transparent 40%, transparent),
          radial-gradient(circle at 50% 100%, white 10%, rgb(233, 233, 233) 10%, rgb(233, 233, 233) 23%, white 23%, white 30%, rgb(233, 233, 233) 30%, rgb(233, 233, 233) 43%, white 43%, white 50%, rgb(233, 233, 233) 50%, rgb(233, 233, 233) 63%, white 63%, white 71%, transparent 71%, transparent),
          radial-gradient(circle at 100% 50%, white 5%, rgb(233, 233, 233) 5%, rgb(233, 233, 233) 15%, white 15%, white 20%, rgb(233, 233, 233) 20%, rgb(233, 233, 233) 29%, white 29%, white 34%, rgb(233, 233, 233) 34%, rgb(233, 233, 233) 44%, white 44%, white 49%, transparent 49%, transparent),
          radial-gradient(circle at 0 50%, white 5%, rgb(233, 233, 233) 5%, rgb(233, 233, 233) 15%, white 15%, white 20%, rgb(233, 233, 233) 20%, rgb(233, 233, 233) 29%, white 29%, white 34%, rgb(233, 233, 233) 34%, rgb(233, 233, 233) 44%, white 44%, white 49%, transparent 49%, transparent);
        background-size: 100px 50px;
      `,
      `
        padding-top: 40px;
      `
    )
  }
}, 1000)
</script>

<style lang="scss">
html,
body,
#app,
.app__x {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.app__container {
  height: 100%;
  overflow-y: hidden;
}

.app__header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.app__main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>