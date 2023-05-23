<template>
    <div class="delect" @click="swal()">
    </div>
</template>

<script>
export default {

    data(){
        return{
             title: '确定删除吗？',
            text: "删除不可逆！",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }
    },
    methods:{
        swal(){then((willDelete) => {
                if (willDelete) {
                    axios.delete('/admin/SiteConfig/' + id)
                        .then(res => {
                            if (res.data.status === 1) {
                                swal({
                                    text: res.data.msg,
                                    icon: 'success',
                                    buttons: false,
                                });
                            } else {
                                swal({
                                    text: res.data.msg,
                                    icon: 'error',
                                    buttons: false,
                                });
                            }
                            setTimeout(function () {
                                swal.close();
                                window.location.reload();
                            }, 1300);
                        });
                }
            })
        }
}}
</script>

<style>
.delect{
    width: 100px;
    height: 100px;
    background-color: pink;
}
</style>

