import { ref } from 'vue'

class RootBus {
	constructor() {
		// 收集订阅信息,调度中心
		this.list = {},
		this.isCollapse = ref(false)
	}

	// 订阅
	$on(name, fn) {
		this.list[name] = this.list[name] || []
		this.list[name].push(fn)
	}

	// 发布
	$emit(name, data) {
		if (this.list[name]) {
        this.list[name].forEach((fn) => {
        fn(data)
      });
    }
	}

	// 取消订阅
	$off(name) {
		if (this.list[name]) {
			delete this.list[name]
		}
	}
}
export default new RootBus()