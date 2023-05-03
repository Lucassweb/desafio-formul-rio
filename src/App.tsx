import {Container} from './components/Body/styles'
import { SectionForm } from '././components/Section/style'

import MinhaImagem from './assets/img/duvar.jpg'

const App = () => {
  return (
    <Container>
      <img src={MinhaImagem} alt='imagem-principal'></img>
      <SectionForm> {/*sessao form*/}
        <h1>Login Form 🐞</h1>
        <article>
          <label>Email</label>
          <input id='email' type='email'></input>
        </article>

        <article>
          <label>Password</label>
          <input></input>
        </article>

        <article>
          <button>Login</button>
        </article>
      </SectionForm>
    </Container>
  )

}
export default App;
