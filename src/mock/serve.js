//先引入mockjs模块
import Mock from 'mockjs'
//把JSON数据格式引入进来[JSON数据格式我们根本没有对外暴露,但是可以引入]
//webpack默认对外暴露的:图片、JSON数据格式
import listApi from './common/list.js'

//mock数据:第一个参数请求地址  第二个参数:请求数据  Mock.mock Mock是一个对象,mock是一个方法
// Mock.mock("/mock/listApi","post",{code:200,data:listApi.getHomeData,msg: 'success'})
// Mock.mock("/mock/listApi","get",{code:200,data:listApi.getHomeData,msg: 'success'})
Mock.mock("/mock/listApi",listApi.getHomeData)
