const { mysql } = require('../qcloud')

module.exports = async ctx => {

  var query = ctx.request.query
  if (query.category != null){
    var resa = await mysql("video").where("category_id", query.category)
  }else{
    var resa = await mysql("video")
  }

  ctx.state.data = {
    msg: resa
  }
}