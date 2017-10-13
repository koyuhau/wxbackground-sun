const { mysql } = require('../qcloud')

module.exports = async ctx => {

  var resa = await mysql("video")
  ctx.state.data = {
    msg: resa
  }
}