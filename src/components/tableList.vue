<template>
  <div style="padding: 1em;background:#ececec;height:100%;">
    <h1>测试自动打包构建111</h1>
    <el-button @click="add()" v-track="{eventId:'1101',location:'home'}">添加</el-button>
    <el-table :data="tableList" border style="width: 100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="nation" label="民族"></el-table-column>
      <el-table-column prop="brithDate" label="出生日期"></el-table-column>
      <el-table-column prop="cardType" label="证件类型"></el-table-column>
      <el-table-column prop="idNumber" label="证件号"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small" >查看</el-button>
          <el-button type="text" size="small" v-show="scope.row.status == '1'">编辑</el-button>
          <el-button type="text" size="small" v-show="scope.row.status == '2'" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    module-->
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <div style="position: absolute;right: 20px;"><img :src="rowList.photo" alt="" style="width:155px;height:200px;"></div>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="基本信息" :span="1"></el-descriptions-item>
        <el-descriptions-item label="姓名">{{ rowList.name }}</el-descriptions-item>
        <el-descriptions-item label="民族">{{ rowList.nation }}</el-descriptions-item>
        <el-descriptions-item label="出生日期">{{ rowList.brithDate }}</el-descriptions-item>
        <el-descriptions-item label="证件类型">{{ rowList.cardType }}</el-descriptions-item>
        <el-descriptions-item label="证件号">{{ rowList.idNumber }}</el-descriptions-item>
      </el-descriptions>
    </el-dialog>
  </div>
</template>

<script>
import {getList} from '@/api/Api.js'

export default {
  name: 'tableList',
  data() {
    return {
      tableList:[],
      gridData:[],
      dialogTableVisible:false,
      rowList:{},
    }
  },
  methods: {
    listFunc() {
      getList().then((data)=>{
        let table = data.data
        if(table.code == 200){
          this.tableList = table.data
        }
      }).catch(()=>{

      })
    },
    handleClick(row){
      this.rowList = row
      this.dialogTableVisible = true
    },
    add(){
      let rand = Math.floor(Math.random() * 3 + 1);
      let index = this.tableList.length
      this.tableList.push({
        id:index,
        name: "沙xx" + index,
        nation: "天宫" + index,
        brithDate:'未知',
        cardType: "身份证",
        status:rand.toString(),
        idNumber: 147203199805093668,
        photo:'https://img1.baidu.com/it/u=1688502685,3582216476&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
      })
    },
    del(row){
      console.log(row)
      this.tableList.splice(row.id,1)
    }
  },
  mounted() {
    this.listFunc()
  },
}

</script>

<style>

</style>
