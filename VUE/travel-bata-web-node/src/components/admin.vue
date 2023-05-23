<template>
  <el-container>
    <!-- vue组件 -->
    <el-main>
      <el-row class="tac" :gutter="20">
        <el-col :span="4">
          <!-- <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="2"> -->
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="showUserList()">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </el-menu-item>
            <!-- <el-menu-item-group> 子列表用户组 或者其他意义功能模块
                      <template slot="title">用户</template>
                      <el-menu-item index="1-1">添加用户</el-menu-item>
                      <el-menu-item index="1-2">删除用户</el-menu-item>
                    </el-menu-item-group> -->
            <!-- <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>-->
            <el-menu-item index="2" @click="showCommentList()">
              <i class="el-icon-menu"></i>
              <span slot="title">评论管理</span>
            </el-menu-item>
            <!-- <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">更改密码</span>
                  </el-menu-item>   #灰度 不可取按钮-->
            <el-menu-item index="3" @click="showSourceList()">
              <i class="el-icon-s-promotion"></i>
              <span>资源管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="showLunboList()">
              <i class="el-icon-data-board"></i>
              <span>轮播图管理</span>
            </el-menu-item>
            <el-menu-item index="5" @click="showPasswordList()">
              <i class="el-icon-setting"></i>
              <span>密码管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="20" v-show="userShow">
          <el-tabs v-model="activeName">
            <el-tab-pane label="基础信息" name="first">
              <el-table
                :data="tableData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="username"
                  align="center"
                  label="用户名"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  prop="email"
                  align="center"
                  label="email"
                  width="250"
                >
                </el-table-column>
                <el-table-column
                  prop="create_time"
                  align="center"
                  label="创建日期"
                  width="300"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleClose(scope.$index, tableData)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="账户删除信息">
              <el-table
                :data="tableDataDelete"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="username"
                  align="center"
                  label="用户名"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  prop="email"
                  align="center"
                  label="email"
                  width="250"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="handleRecover(scope.$index, tableDataDelete)"
                      >恢复
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>

        <el-col :span="20" v-show="commentShow">
          <el-tabs v-model="commentName">
            <el-tab-pane label="评论信息" name="first">
              <el-table
                :data="commenttableData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="150"
                >
                </el-table-column>
                <el-table-column
                  prop="content"
                  align="center"
                  label="文章"
                  width="auto"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                  prop="user"
                  align="center"
                  label="用户名"
                  width="auto"
                >
                </el-table-column>
                <el-table-column label="操作" width="250">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="commentClose(scope.$index, commenttableData)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="已删除的评论信息">
              <el-table
                :data="DeletelecommenttableData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="150"
                >
                </el-table-column>
                <el-table-column
                  prop="content"
                  align="center"
                  label="文章"
                  width="auto"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                  prop="user"
                  align="center"
                  label="用户名"
                  width="auto"
                >
                </el-table-column>
                <el-table-column label="操作" width="250">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="
                        RecovercommentClose(
                          scope.$index,
                          DeletelecommenttableData
                        )
                      "
                      >恢复</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>

        <el-col :span="20" v-show="sourceShow">
          <el-tabs v-model="sourceName">
            <el-tab-pane label="首页资源" name="first">
              <el-table
                :data="sourceData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  prop="msg"
                  align="center"
                  label="内容"
                  width="300"
                  :show-overflow-tooltip="true"
                >
                  <!-- <p v-if="sourceData.msg.length <= 89">{{ sourceData.msg }}</p>
                <p v-else>{{sourceData.msg.substr(0,89)}}......</p> -->
                </el-table-column>
                <el-table-column
                  prop="img"
                  align="center"
                  label="图片"
                  width="500"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="sourceDelete(scope.$index, sourceData)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="增加资源">
              <el-table
                :data="sourceData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  prop="msg"
                  align="center"
                  label="内容"
                  width="300"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                  prop="img"
                  align="center"
                  label="图片"
                  width="500"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="sourceadd(scope.$index, sourceData)"
                      >添加</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="资源删除信息">
              <el-table
                :data="sourceDataDelete"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  prop="msg"
                  align="center"
                  label="内容"
                  width="300"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="sourceRecover(scope.$index, sourceDataDelete)"
                      >恢复
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>

        <el-col :span="20" v-show="lunboShow">
          <el-tabs v-model="lunboName">
            <el-tab-pane label="轮播图资源" name="first">
              <el-table
                :data="lunboData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="200"
                >
                </el-table-column>

                <el-table-column
                  prop="img"
                  align="center"
                  label="图片"
                  width="500"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="lunboDelete(scope.$index, lunboData)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="增加轮播图资源">
              <el-table
                :data="lunboData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="200"
                >
                </el-table-column>

                <el-table-column
                  prop="img"
                  align="center"
                  label="图片"
                  width="500"
                  :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="lunboadd(scope.$index, lunboData)"
                      >添加</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="轮播图删除信息">
              <el-table
                :data="lunboDataDelete"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="title"
                  align="center"
                  label="标题"
                  width="200"
                >
                </el-table-column>

                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="lunboRecover(scope.$index, lunboDataDelete)"
                      >恢复
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>

        <el-col :span="20" v-show="passwordShow">
          <el-tabs v-model="passwordName">
            <el-tab-pane label="更改用户密码" name="first">
              <el-table
                :data="passwordtableData"
                style="width: 100%"
                v-loading="loading"
              >
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                  prop="username"
                  align="center"
                  label="用户名"
                  width="auto"
                >
                </el-table-column>
                <el-table-column label="操作" width="auto">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="passwordClose(scope.$index, passwordtableData)"
                      >修改</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span> -->
      </el-dialog>

      <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="当前密码" :label-width="formLabelWidth">
            <el-input
              v-model="form.oldpwd"
              autocomplete="off"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="更改密码" :label-width="formLabelWidth">
            <el-input
              v-model="form.nowpwd"
              autocomplete="off"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input
              v-model="form.cfpwd"
              autocomplete="off"
              type="password"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="passwordupdate(form)"
            >确 定</el-button
          >
        </div>
      </el-dialog>

      <el-dialog title="添加首页资源" :visible.sync="dialogSourceAddVisible">
        <el-form :model="source">
          <el-form-item label="标题" :label-width="formLabelWidth">
            <el-input
              v-model="source.title"
              autocomplete="off"
              type="text"
            ></el-input>
          </el-form-item>
          <el-form-item label="内容" :label-width="formLabelWidth">
            <el-input
              v-model="source.msg"
              autocomplete="off"
              type="text"
            ></el-input>
          </el-form-item>
          <el-form-item label="图片" :label-width="formLabelWidth">
            <el-upload
              accept="image/gif, image/jpg, image/jpeg, image/png, image/svg"
              class="upload-demo"
              ref="upload"
              action="/api/source/addpicture"
              :limit="1"
              :file-list="fileList"
              :auto-upload="false"
              :before-upload="beforeUpload"
              :on-success="handlesuccess"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选取文件</el-button
              >
              <el-button
                style="margin-left: 10px"
                size="small"
                type="success"
                @click="submitUpload"
                >上传到服务器</el-button
              >
            </el-upload>

            <!-- /api/source/addSource  :before-upload="beforeUpload"-->

            <!-- <el-upload
              accept="image/gif, image/jpg, image/jpeg, image/png, image/svg"
              list-type="picture-card"
              action=""
              :limit="1"
              :auto-upload="false"
              :file-list="fileList"
              :on-preview="handlePictureCardPreview"
              :on-exceed="handleExceed"
              :before-upload="beforeUpload"
              :on-success="onSuccess"
              :on-remove="handleRemoveProduct"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload> -->
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogSourceAddVisible = false">取 消</el-button>
          <el-button type="primary" @click="sourceaddupdata(source)"
            >确 定</el-button
          >
        </div>
      </el-dialog>
      <el-dialog :visible.sync="dialogSourceVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import event2 from "../../static/config/event.js";
// import upload from "../components/Appcomponets/upload.vue";
export default {
  data() {
    return {
      activeName: "first",
      commentName: "first",
      passwordName: "first",
      sourceName: "first",
      lunboName: "first",
      tableData: [] /*, 必须数组 返回是json数组 */,
      tableDataDelete: [] /*, 必须数组 返回是json数组 */,
      commenttableData: [],
      DeletelecommenttableData: [],
      passwordtableData: [],
      sourceDataDelete: [],
      sourceData: [],
      lunboData: [],
      lunboDataDelete: [],
      lunbotableData: [],
      valshow: "",
      loading: true,
      value: "",
      commentvalue: "",
      sourcevalue: "",
      dialogVisible: false,
      userShow: true,
      commentShow: false,
      passwordShow: false,
      sourceShow: false,
      lunboShow: false,
      dialogFormVisible: false,
      dialogSourceAddVisible: false,
      dialogSourceVisible: false,
      dialogImageUrl: "",
      disabled: false,
      form: {
        oldpwd: "",
        nowpwd: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        cfpwd: "",
      },
      file: {},
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
        // {
        //   name: "food2.jpeg",
        //   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
      ],
      source: {
        title: "",
        msg: "",
        img: "",
        delivery: false,
        type: [],
        imgname: "",
        resource: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 上传图片方法
    submitUpload() {
      console.log("触发上传");
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      //   return this.$confirm(`确定移除 ${file.name}？`).then(() => {
      //   // this.isUploadFileProduct = false
      //   this.fileListProduct.pop(file);
      // });
      setTimeout(2000);
      this.$message.error({
        message: "图片没啦！",
        showClose: true,
      });
    },
    handlePreview(file) {
      // console.log(file);
      // this.dialogSourceVisible = true;
    },
    // handleExceed(files, fileList) {
    //   this.$message.warning(
    //     `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
    //       files.length + fileList.length
    //     } 个文件`
    //   );
    // },
    handlesuccess(file) {
      console.log("成功上传");
      this.$message.success({
        message: "图片上传成功",
        showClose: true,
      });
    },
    beforeUpload(file) {
      console.log("触发上传前");
      // console.log(file)
      this.source.img = file;
      const isJPG = file.type == "image/jpeg" || file.type == "image/png";
      const isLt2M = file.size / 1024 / 1024 < 3;
      if (!isJPG) {
        this.$message.error({
          message: "上传图片只能是 JPG 或 PNG 格式!",
          showClose: true,
        });
        this.$refs.upload.abort();
        this.source.img = "";
        return false;
      }
      if (!isLt2M) {
        this.$message.error({
          message: "上传图片大小不能超过 3MB!",
          showClose: true,
        });
        this.$refs.upload.abort();
        this.source.img = "";
        return false;
      }
    },

    getBase64(file) {
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
    },
    sourceadd(index, rows) {
      let _that = this;
      _that.dialogSourceAddVisible = true;
      _that.rows = {};
      _that.dialogImageUrl = "";
    },

    sourceDelete(index, rows) {
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
        .catch((_) => {});
    },

    sourceRecover(index, rows) {
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
                // console.log(res.data);
                // console.log("想要恢复的账户为:" + this.sourcevalue);
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
        .catch((_) => {});
      // .catch((_) => {
      //   console.log("恢复账户异常");
      // });
    },

    sourceaddupdata(source) {
      let _this = this;
      console.log("触发表单上传");
      if (_this.source.title == "" || _this.source.msg == "") {
        _this.$message.error({
          message: "请输入相关信息",
          showClose: true,
        });

        _this.dialogSourceAddVisible = true;
      } else if (_this.source.img == "") {
        _this.$message.error({
          message: "请上传图片",
          showClose: true,
        });
        _this.dialogSourceAddVisible = true;
      } else {
        let params = new FormData();
        params.append("title", _this.source.title);
        params.append("msg", _this.source.msg);
        params.append("name", _this.source.img.name);
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
              this.$refs.upload.clearFiles();
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
            _this.$message.error({
              message: err,
              showClose: true,
            });
          });
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogSourceVisible = true;
    },

    //展示表格
    showUserList() {
      this.commentShow = false;
      this.userShow = true;
      this.passwordShow = false;
      this.sourceShow = false;
      this.lunboShow = false;
    },
    showCommentList() {
      this.commentShow = true;
      this.userShow = false;
      this.passwordShow = false;
      this.sourceShow = false;
      this.lunboShow = false;
    },
    showSourceList() {
      this.commentShow = false;
      this.userShow = false;
      this.passwordShow = false;
      this.sourceShow = true;
      this.lunboShow = false;
    },
    showLunboList() {
      this.commentShow = false;
      this.userShow = false;
      this.passwordShow = false;
      this.sourceShow = false;
      this.lunboShow = true;
    },
    showPasswordList() {
      this.commentShow = false;
      this.userShow = false;
      this.passwordShow = true;
      this.sourceShow = false;
      this.lunboShow = false;
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    commentClose(index, rows) {
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
        .catch((_) => {});
    },

    RecovercommentClose(index, rows) {
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
        .catch((_) => {});
      // .catch((_) => {
      //   _this.$message.error({
      //     message: "恢复评论异常",
      //     showClose: true,
      //   });
      // });
    },

    handleClose(index, rows) {
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
        .catch((_) => {});
    },

    handleRecover(index, rows) {
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
        .catch((_) => {});
      // .catch((_) => {
      //   console.log("恢复账户异常");
      // });
    },
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
    passwordClose(index, rows) {
      let _that = this;
      (_that.dialogFormVisible = true), (_that.value = rows[index].email);

      (_that.form.oldpwd = ""),
        (_that.form.cfpwd = ""),
        (_that.form.nowpwd = "");
    },
    passwordupdate(form) {
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
    },
    Getstatus() {
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
    },
    // 获取用户列表
    async GetUserList() {
      let _this = this;
      await _this.$axios
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
    },
    // 获取被删除用户列表
    async GetUserDeleteList() {
      let _this = this;
      await _this.$axios
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
    },

    // 获取评论列表
    async GetCommentList() {
      let _this = this;
      await _this.$axios
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
    },

    //获取资源列表
    async GetsourceList() {
      await this.$axios({
        url: "/api/source/tourist_resources",
        methods: "get",
      }).then((res) => {
        this.sourceData = res.data;
      });
    },

    async GetsourceDeleteList() {
      await this.$axios({
        url: "/api/source/Delete_tourist_resources",
        methods: "get",
      }).then((res) => {
        this.sourceDataDelete = res.data;
      });
    },

    // 获取被删除评论列表
    async GetDeleteCommentList() {
      let _this = this;
      await _this.$axios
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
    },

    // methods 中多调用多个方法
    // refresh() {
    //   this.$options.methods.GetUserList();
    //   this.$options.methods.GetUserDeleteList();
    // },
  },
  mounted() {
    //自动加载下列方法
    this.GetUserList();
    this.GetUserDeleteList();
    this.GetCommentList();
    this.GetDeleteCommentList();
    this.GetsourceList();
    this.GetsourceDeleteList();
  },
  created() {
    // setInterval(() => {
    //   this.Getstatus();
    // }, 20000);
    this.Getstatus();
  },
};
</script>

<style>
.el-tooltip__popper {
  font-size: 14px;
  max-width: 40%;
} /* 设置显示隐藏部分内容，按40%显示 */
</style>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");

.tac {
  height: 100%;
  width: 100%;
  float: left;
}

.right {
  float: left;
}

.model_normal {
  height: 700px;
  width: 100%;
}
</style>
