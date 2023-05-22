<template>
	<el-skeleton :loading="loading" animated :throttle="100">
		<template #template>
			<el-skeleton-item style="width: 100%; height: 40px" />
		</template>
		<template #default>
			<el-alert center type="info">
				<template #default>
					生成过慢？开通VIP可享受专属通道，点击 <el-link type="primary" :underline="false"> 查看详情</el-link>
				</template>
			</el-alert>
		</template>
	</el-skeleton>
	<el-row align="middle" class="re-plr-20 re-mt-20">
		<el-col :span="6">LOGO</el-col>
		<el-col :span="12" class="re-text-center">
		<el-link :underline="false" class="re-mlr-10">使用技巧</el-link>
		<el-link :underline="false" class="re-mlr-10">小程序交</el-link>
		<el-link :underline="false" class="re-mlr-10">交流群</el-link>
		<el-link :underline="false" class="re-mlr-10">开通会员</el-link>
		<el-link :underline="false" class="re-mlr-10">关于</el-link>
	</el-col>
		<el-col :span="6" class="re-text-right">
			<el-button>注册</el-button>
    	<el-button type="primary">登录</el-button>
		</el-col>
	</el-row>
	<el-row class="re-plr-20 re-mt-20">
		<el-col :span="24">
			<el-tabs v-model="tabType">
				<el-tab-pane label=" Ai 文案" name="text">
					<el-tabs v-model="tabTypeSub" tab-position="left">
						<el-tab-pane label="效率" name="xl">
							<el-space wrap size="20">
								<el-card>
									<div class="re-flex-row-center">ICON</div>
									<div class="re-flex-row-center re-mt-20">日报 🔥</div>
								</el-card>
								<el-card>
									<div class="re-flex-row-center">ICON</div>
									<div class="re-flex-row-center re-mt-20">周报 🔥</div>
								</el-card>
								<el-card>
									<div class="re-flex-row-center">ICON</div>
									<div class="re-flex-row-center re-mt-20">月报 🔥</div>
								</el-card>
							</el-space>
						</el-tab-pane>
						<el-tab-pane label="营销" name="yx">
							<el-space wrap size="20">
								<el-card>
									<div class="re-flex-row-center">ICON</div>
									<div class="re-flex-row-center re-mt-20">小红书 🔥</div>
								</el-card>
								<el-card>
									<div class="re-flex-row-center">ICON</div>
									<div class="re-flex-row-center re-mt-20">小红书标题 🔥</div>
								</el-card>
							</el-space>
						</el-tab-pane>
						<el-tab-pane label="运营" name="yy">运营</el-tab-pane>
						<el-tab-pane label="专家" name="zj">专家</el-tab-pane>
						<el-tab-pane label="娱乐" name="yl">娱乐</el-tab-pane>
						<el-tab-pane label="其他" name="qt">其他</el-tab-pane>
					</el-tabs>
				</el-tab-pane>
				<el-tab-pane label=" Ai 绘画" name="img">Ai 绘画</el-tab-pane>
			</el-tabs>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
const loading = ref(true);
setTimeout(() => {
	loading.value = false;
}, 2000);

const tabType = ref("text");
const tabTypeSub = ref("xl");
</script>
  
<style scoped lang="scss"></style>
  