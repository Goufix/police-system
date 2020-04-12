class auth {
  get rules() {
    return {
      username: 'required',
      password: 'required'
    };
  }
  get messages() {
    return {
      required: 'Whoops! Você precisa preencher esse campo.'
    };
  }

  fails(error) {
    this.ctx.session.withErrors(error).flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = auth;
