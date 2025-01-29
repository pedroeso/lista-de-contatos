import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { alternaTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'
import { RootReducer } from '../../store'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alternaTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="normal"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="favoritos"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
