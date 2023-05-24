const currentYear = new Date().getFullYear();

export const Text = {
  title: 'Portal de Vendas',
  esqueceuSenha: 'Esqueceu a senha?',
  direitosReservados: `© ${currentYear}. Todos os direitos reservados`
};

export const Placeholder = {
  placeholderEmail: 'Insira seu e-mail aqui',
  placeholderSenha: 'Insira sua senha aqui',
  placeholderRepita: 'Repita a nova senha',
  placeholderNova: 'Informe a nova senha'
};

export const Error = {
  emailInvalid: 'E-mail inválido',
  emailRequired: 'E-mail obrigatório',
  senhaRequired: 'Senha obrigatória',
  senhaMin: 'A senha deve ter pelo menos 6 caracteres',
  campoRequired: 'Campo obrigatório',
  notMatch: 'As senhas não são iguais',
  notMatchValue: 'A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um caractere especial e ter no mínimo 6 caracteres'
}

export const TextNotFound = {
  paginaNaoEncontrada: 'Página não encontrada',
  naoExiste: 'A página que você está procurando não existe ou pode ter sido removida.',
  voltar: 'Voltar'
}

export const SuccessChange = {
  success: 'Senha alterada com sucesso!',
  successText: 'Sua senha foi alterada com sucesso, clique no botão abaixo para voltar a tela de login e acessar o portal.'
}

export const ChangePassword = {
 alterar: 'Alteração de senha',
 desejada: 'Preencha os campos abaixo com a nova senha desejada para o usuário ',
 voltar: 'Voltar'
}

export const RecoverPassword = {
  voltar: 'Voltar',
  recuperar: 'Recuperação de senha',
  text: 'Informe o e-mail cadastrado da sua conta para receber as intruções e o link para recuperar sua senha'
 }

 export const RecoverPasswordSuccess = {
    enviado: 'E-mail enviado!',
    text: 'O e-mail de recuperação foi enviado com sucesso para',
    completeText: 'Em caso de não recebimento ou de continuar com problemas para efetuar o login, entre em contato com o suporte.'
 }

 export const RegisterPassword = {
    voltar: 'Voltar',
    cadastrar: 'Cadastar senha',
    text: 'Preencha os campos abaixo com a senha desejada para a sua conta'
}

export const RegisterPasswordSuccess = {
  senha: 'Senha cadastrada com sucesso!',
  text: 'Sua senha foi cadastrada com sucesso, clique no botão abaixo para voltar a tela de login e acessar o portal.'
}

export const ButtonText = {
  login: 'Login',
  irLogin: 'Ir para o Login',
  salvar: 'Salvar',
  enviar: 'Enviar e-mail'
}
