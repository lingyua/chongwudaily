// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "chongwuyun-wwxon"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('datas').where({
      type: "meirong",
    }).orderBy('Timestamp', 'desc')
    .get({
      success(res) {
        console.log(res);
      }
    })
}