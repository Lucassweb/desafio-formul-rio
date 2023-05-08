import { login } from './utils'

import { Container } from './components/Body/styles'
import { SectionForm } from '././components/Section/style'
import MinhaImagem from './assets/img/duvar.jpg'
import { useState } from 'react'

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: any) => {
    const value = event.target.value
    setEmail(value);
  }

  const handlePassword = (event: any) => {
    const value = event.target.value
    setPassword(value);
  }

  const handleSubmit = () => {
    console.log('submit');

    let values = { email: email, password: password }
    login
      (values)
      .then(() => {

      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <Container>
      <img src={MinhaImagem} alt='imagem-principal' />

      <SectionForm> {/*sessao form*/}
        <h1>Lucas Web 🐞</h1>
        {/* <h2>Aqui vou colocar meu error !!!</h2> */}
        <article>
          <label>Email</label>
          <input id='email' type='email' value={email} onChange={handleEmail} />
        </article>

        <article>
          <label>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePassword} />
        </article>

        <article>
          <button onClick={handleSubmit} disabled={email === '' || password.length < 6}>
            Login
          </button>
        </article>
      </SectionForm>
    </Container>
  )

}
export default App;
