import { MainContent } from './styles'
import MinhaImagem from '../.././assets/img/duvar.jpg'

export const Container = () => {
    return (
        <MainContent>
            <img src={MinhaImagem} alt='imagem-principal'></img> 
        </MainContent>
    ) 
}