class userCreate {
  get rules() {
    return {
      username: 'required',
      password: 'required|confirmed',
      email: 'required'
    };
  }
  get messages() {
    return {
      required: 'Whoops! Você precisa preencher esse campo',
      unique: 'Eita... Já existe uma conta com esse {{ field }} no system',
      confirmed: 'Parece que as senhas não conferem.'
    };
  }

  fails(error) {
    this.ctx.session.withErrors(error).flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = userCreate;
