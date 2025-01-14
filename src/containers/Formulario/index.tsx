import { MainContainer, Titulo } from '../../styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <form>
      <input type="text" placeholder="Título" />
      <textarea placeholder="Descrição da tarefa" />
      <input name="prioridade" type="radio" id="urgente" />{' '}
      <label htmlFor="urgente">Urgente</label>
      <input name="prioridade" type="radio" id="importante" />{' '}
      <label htmlFor="importante">Importante</label>
      <input name="prioridade" type="radio" id="normal" />{' '}
      <label htmlFor="normal">Normal</label>
      <button type="submit">Cadastrar</button>
    </form>
  </MainContainer>
)

export default Formulario
