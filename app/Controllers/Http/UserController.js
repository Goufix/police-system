class UserController {
  async create({ view }) {
    return view.render('auth.success');
  }
  async auth({ view }) {
    return view.render('home');
  }
}

module.exports = UserController;
