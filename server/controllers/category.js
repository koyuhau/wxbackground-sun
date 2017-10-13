const { mysql } = require('../qcloud')

module.exports = async ctx => {

  var resa = await mysql("categroy")
  ctx.state.data = {
    msg: resa
  }
}