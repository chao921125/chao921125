
function handleExceed(files, fileList) {
    this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件`
    );
    // console.log(files); // 输出files 饿了么原有的files复数文件 下又FileList[File] 文件下的第0个文件如上传的图片
    // console.log(fileList[0].name); //输出fileList列表 array数组下的第0个对象，访问里面的参数值
}

function handleRemove(file, fileList) {
    console.log(file.name + fileList);
    // 3.调用splice方法，移除图片信息
    console.log(file.name);
    // console.log(fileList)
    this.fileList.splice(file, 1);

    // file.url = ""
}
function handlesuccess(resource) {
    this.source.img = resource.data;
    console.log(this.source.img + "成功上传");
}
function getBase64(file) {
    return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgResult = reader.result;
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.onloadend = function () {
            resolve(imgResult);
        };
    });
}

function handlePictureCardPreview(file) {
    // this.dialogImageUrl = file.url;
    console.log(file.raw);
    // console.log(files[0].url)
    // console.log(this.getBase64(file));
    var file1 = file.raw;
    if (!/image\/\w+/.test(file.raw.type)) {
        alert("看清楚，这个需要图片！");
        return false;
    }
    var reader = new FileReader();
    //将文件以Data URL形式读入页面
    reader.readAsDataURL(file1);

    reader.onload = function (e) {
        //显示文件
        this.files = file1;
    };
    console.log(this.files);
    // this.source.img = file
    // console.log(this.source.img + "手动上传");
    // this.source.imgname = file.name;
    // console.log(this.source.imgname);
    // this.dialogSourceVisible = true;
}
function handleDownload(file) {
    console.log(file);
}

//展示表格
function showUserList() {
    this.commentShow = false;
    this.userShow = true;
    this.passwordShow = false;
    this.sourceShow = false;
}
function showCommentList() {
    this.commentShow = true;
    this.userShow = false;
    this.passwordShow = false;
    this.sourceShow = false;
}
function showSourceList() {
    this.commentShow = false;
    this.userShow = false;
    this.passwordShow = false;
    this.sourceShow = true;
}
function showPasswordList() {
    this.commentShow = false;
    this.userShow = false;
    this.passwordShow = true;
    this.sourceShow = false;
}

function handleOpen(key, keyPath) {
    console.log(key, keyPath);
}
function commentClose(index, rows) {
    let that = this;
    that
        .$confirm("确认删除吗？")
        .then((_) => {
            // console.log(rows),
            // console.log(rows[index].email),
            (that.commentvalue = rows[index].title),
                rows.splice(index, 1), //删除索引1个
                //   rows.forEach((item) => {
                //     //把数组元素里面的email取出来放在table数组中
                //     this.table.push(item.email)
                //     console.log(this.table);
                //   if (item.email == '1370586826@qq.com'){
                // //forEach 一旦开始，不会终止，无法在中间被停止
                //     // console.log(item.email)
                //     alert("2")
                //     }
                //   });
                that
                    .$axios({
                        url: "/api/comment/list",
                        method: "post",
                        data: {
                            id: index,
                            title: that.commentvalue,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        console.log("想要删除的评论为:" + this.commentvalue);
                        if (res.data.code == 200) {
                            that.$message.success({
                                message: res.data.msg,
                                showClose: true,
                            });
                        } else if (res.data.code == 400) {
                            that.$message.error({
                                message: res.data.msg,
                                showClose: true,
                            });
                        }
                    });
            this.GetDeleteCommentList();
            done();
        })
        .catch((_) => { });
}

function RecovercommentClose(index, rows) {
    let _this = this;
    _this
        .$confirm("确认恢复吗？")
        .then((_) => {
            _this.value = rows[index].title;
            console.log(rows[index].content);
            rows.splice(index, 1); //删除索引1个
            _this
                .$axios({
                    url: "/api/comment/Deletelist",
                    method: "post",
                    data: {
                        id: index,
                        title: _this.value,
                    },
                })
                .then((res) => {
                    if (res.data.code == 200) {
                        _this.$message.success({
                            message: res.data.msg,
                            showClose: true,
                        });
                    } else if (res.data.code == 400) {
                        _this.$message.error({
                            message: res.data.msg,
                            showClose: true,
                        });
                    }
                });
            _this.GetCommentList();
            done();
        })
        .catch((_) => { });
    // .catch((_) => {
    //   _this.$message.error({
    //     message: "恢复评论异常",
    //     showClose: true,
    //   });
    // });
}

function handleClose(index, rows) {
    let that = this;
    that
        .$confirm("确认删除吗？")
        .then((_) => {
            // console.log(rows),
            // console.log(rows[index].email),
            (that.value = rows[index].email),
                rows.splice(index, 1), //删除索引1个
                //   rows.forEach((item) => {
                //     //把数组元素里面的email取出来放在table数组中
                //     this.table.push(item.email)
                //     console.log(this.table);
                //   if (item.email == '1370586826@qq.com'){
                // //forEach 一旦开始，不会终止，无法在中间被停止
                //     // console.log(item.email)
                //     alert("2")
                //     }
                //   });
                that
                    .$axios({
                        url: "/api/User/DeleteUser_List",
                        method: "post",
                        data: {
                            id: index,
                            msg: that.value,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        console.log("想要删除的账户为:" + this.value);
                        if (res.data.code == 200) {
                            that.$message.success({
                                message: res.data.msg,
                                showClose: true,
                            });
                        } else if (res.data.code == 400) {
                            console.log(res.data.msg);
                            that.$message.error({
                                message: res.data.msg,
                                showClose: true,
                            });
                        }
                    });
            this.GetUserDeleteList();
            done();
        })
        .catch((_) => { });
}

function handleRecover(index, rows) {
    let that = this;
    that
        .$confirm("确认恢复吗？")
        .then((_) => {
            // console.log(rows[index].email),
            (that.value = rows[index].email),
                rows.splice(index, 1), //删除索引1个
                that
                    .$axios({
                        url: "/api/User/RecoverUser_List",
                        method: "post",
                        data: {
                            id: index,
                            msg: this.value,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        console.log("想要恢复的账户为:" + this.value);
                        if (res.data.code == 200) {
                            that.$message.success({
                                message: res.data.msg,
                                showClose: true,
                            });
                        } else if (res.data.code == 400) {
                            that.$message.error({
                                message: res.data.msg,
                                showClose: true,
                            });
                        }
                    });
            this.GetUserList();
            done();
        })
        .catch((_) => { });
    // .catch((_) => {
    //   console.log("恢复账户异常");
    // });
}
// handleDelete(index, rows) {
//   // console.log(rows);
//   console.log(rows[index].email),
//     (this.value = rows[index].email),
//     rows.splice(index, 1); //删除索引1个

//     rows.forEach((item) => {
//       //把数组元素里面的email取出来放在table数组中
//       this.table.push(item.email)
//       console.log(this.table);
//     if (item.email == '1370586826@qq.com'){
//   //forEach 一旦开始，不会终止，无法在中间被停止
//       // console.log(item.email)
//       alert("2")
//       }
//     });
//   this.$axios({
//     url: "/api/User/DeleteUser_List",
//     method: "post",
//     data: {
//       id: index,
//       msg: this.value,
//     },
//   }).then((res) => {
//     console.log(res.data);
//     console.log("想要删除的账户为:" + this.value);
//   });
// },
function passwordClose(index, rows) {
    let _that = this;
    (_that.dialogFormVisible = true), (_that.value = rows[index].email);

    (_that.form.oldpwd = ""),
        (_that.form.cfpwd = ""),
        (_that.form.nowpwd = "");
}
function passwordupdate(form) {
    let _this = this;
    // _this.dialogFormVisible = false;
    if (
        _this.form.oldpwd == "" ||
        _this.form.cfpwd == "" ||
        _this.form.nowpwd == ""
    ) {
        _this.$message.error({
            message: "请输入密码",
            showClose: true,
        });
        _this.dialogFormVisible = true;
    } else {
        _this
            .$axios({
                url: "/api/User/changepasswd",
                method: "put",
                data: {
                    user: _this.value,
                    oldpwd: _this.form.oldpwd,
                    nowpwd: _this.form.cfpwd,
                },
            })
            .then((res) => {
                if (res.data.code == 200) {
                    _this.$message.success({
                        message: res.data.msg,
                        showClose: true,
                    });
                    _this.dialogFormVisible = false;
                } else if (res.data.code == 400) {
                    _this.$message.error({
                        message: res.data.msg,
                        showClose: true,
                    });
                    _this.dialogFormVisible = true;
                }
            })
            .catch((err) => {
                console.log("修改密码异常");
            });
    }
    // console.log(_this.value)
    // console.log(_this.form.pwd)
    // console.log(_this.form.cfpwd)
}

function sourceadd(index, rows) {
    let _that = this;
    _that.dialogSourceAddVisible = true;
    _that.rows = {};
    _that.dialogImageUrl = "";
}

function sourceDelete(index, rows) {
    let that = this;
    that
        .$confirm("确认删除吗？")
        .then((_) => {
            // console.log(rows),
            // console.log(rows[index].email),
            (that.sourcevalue = rows[index].msg),
                rows.splice(index, 1), //删除索引1个
                //   rows.forEach((item) => {
                //     //把数组元素里面的email取出来放在table数组中
                //     this.table.push(item.email)
                //     console.log(this.table);
                //   if (item.email == '1370586826@qq.com'){
                // //forEach 一旦开始，不会终止，无法在中间被停止
                //     // console.log(item.email)
                //     alert("2")
                //     }
                //   });
                that
                    .$axios({
                        url: "/api/source/DeleteSource",
                        method: "post",
                        data: {
                            id: index,
                            msg: that.sourcevalue,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        console.log("想要删除的资源为:" + this.sourcevalue);
                        if (res.data.code == 200) {
                            that.$message.success({
                                message: res.data.msg,
                                showClose: true,
                            });
                        } else if (res.data.code == 400) {
                            that.$message.error({
                                message: res.data.msg,
                                showClose: true,
                            });
                        }
                    });
            this.GetsourceDeleteList();
            done();
        })
        .catch((_) => { });
}

function sourceRecover(index, rows) {
    let that = this;
    that
        .$confirm("确认恢复吗？")
        .then((_) => {
            // console.log(rows[index].email),
            (that.sourcevalue = rows[index].msg),
                rows.splice(index, 1), //删除索引1个
                that
                    .$axios({
                        url: "/api/source/RecoverSource",
                        method: "post",
                        data: {
                            id: index,
                            msg: this.sourcevalue,
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                        console.log("想要恢复的账户为:" + this.sourcevalue);
                        if (res.data.code == 200) {
                            that.$message.success({
                                message: res.data.msg,
                                showClose: true,
                            });
                        } else if (res.data.code == 400) {
                            that.$message.error({
                                message: res.data.msg,
                                showClose: true,
                            });
                        }
                    });
            this.GetsourceList();
            done();
        })
        .catch((_) => { });
    // .catch((_) => {
    //   console.log("恢复账户异常");
    // });
}

function sourceaddupdata(source) {
    let _this = this;
    console.log(_this.dialogImageUrl);
    if (_this.source.title == "" || _this.source.msg == "") {
        _this.$message.error({
            message: "请输入信息",
            showClose: true,
        });

        _this.dialogSourceAddVisible = true;
    } else if (_this.source.img == "") {
        _this.$message.error({
            message: "请上传图片、若已上传请等待上传完成",
            showClose: true,
        });
        _this.dialogSourceAddVisible = true;
    } else {
        let params = new FormData();
        params.append("title", _this.source.title);
        params.append("msg", _this.source.msg);
        params.append("img", _this.source.img);
        params.append("name", _this.source.imgname);
        // const params = {
        //   title: _this.source.title,
        //   msg: _this.source.msg,
        //   img: _this.dialogImageUrl,
        // };
        _this.$axios
            .post("/api/source/addSource", params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((res) => {
                if (res.data.code == 200) {
                    _this.$message.success({
                        message: res.data.msg,
                        showClose: true,
                    });
                    _this.source = {};
                    _this.dialogImageUrl = "";
                    _this.GetsourceList();
                    _this.dialogSourceAddVisible = false;
                } else if (res.data.code == 400) {
                    _this.$message.error({
                        message: res.data.msg,
                        showClose: true,
                    });
                    _this.dialogSourceAddVisible = true;
                }
            })
            .catch((err) => {
                console.log("添加资源异常");
            });
    }
}

function Getstatus() {
    this.$axios.get("/api/User/Admin").then((res) => {
        // console.log(res.data.status)
        this.valshow = res.data.code;
        if (res.data.code == 200) {
            event2.$emit("myfun", this.valshow),
                // console.log(res.data.status),
                this.$router.push({
                    path: "./admin",
                });
        } else if (res.data.code == 400) {
            event2.$emit("myfun", this.valshow),
                this.$router.push({
                    path: "./login",
                });
        }
    });
}
// 获取用户列表
function GetUserList() {
    let _this = this;
    _this.$axios
        .get("/api/User/GetUser_List")
        .then((res) => {
            // console.log("请求数据成功！")
            _this.tableData = res.data;
            _this.passwordtableData = res.data;
            _this.loading = false;
        })
        .catch((err) => {
            _this.$message.error({
                message: "获取数据失败，请您点击F5刷新",
                showClose: true,
            });
        });
}
// 获取被删除用户列表
function GetUserDeleteList() {
    let _this = this;
    _this.$axios
        .get("/api/User/GetUserDelete_List")
        .then((res) => {
            // console.log("请求数据成功！")
            _this.tableDataDelete = res.data;
            _this.loading = false;
        })
        .catch((err) => {
            _this.$message.error({
                message: "获取数据失败，请您点击F5刷新",
                showClose: true,
            });
        });
}

// 获取评论列表
function GetCommentList() {
    let _this = this;
    _this.$axios
        .get("/api/comment/list")
        .then((res) => {
            // console.log("请求数据成功！")
            _this.commenttableData = res.data;
            _this.loading = false;
        })
        .catch((err) => {
            _this.$message.error({
                message: "获取数据失败，请您点击F5刷新",
                showClose: true,
            });
        });
}
//获取资源列表
function GetsourceList() {
    this.$axios({
        url: "/api/source/tourist_resources",
        methods: "get",
    }).then((res) => {
        this.sourceData = res.data;
    });
}

function GetsourceDeleteList() {
    this.$axios({
        url: "/api/source/Delete_tourist_resources",
        methods: "get",
    }).then((res) => {
        this.sourceDataDelete = res.data;
    });
}

// 获取被删除评论列表
function GetDeleteCommentList() {
    let _this = this;
    _this.$axios
        .get("/api/comment/Deletelist")
        .then((res) => {
            // console.log("请求数据成功！")
            _this.DeletelecommenttableData = res.data;
            _this.loading = false;
        })
        .catch((err) => {
            _this.$message.error({
                message: "获取数据失败，请您点击F5刷新",
                showClose: true,
            });
        });
}
// methods 中多调用多个方法
// refresh() {
//   this.$options.methods.GetUserList();
//   this.$options.methods.GetUserDeleteList();
// },

