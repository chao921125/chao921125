export const commonUpload=obj=>{
	return request({
		url:`/api/source/addSource`,
		method:'post',
		data:obj
	})
}