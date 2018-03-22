
module.exports = app => {

  return class AdminController extends app.Controller {

    async index() {
      const { ctx } = this;
      console.log('=>使用 Client Render 输出页面 /app/controller/admin/admin.js');
      await ctx.renderClient('admin/admin.js', {
        url: this.ctx.url.replace(/\/admin/, '')
      });
    }
  };
};