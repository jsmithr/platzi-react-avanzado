import React from 'react'
import { Link } from 'react-router-dom'
import { CardFav, EmptyFavs, Grid } from './styles'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ data = [] }) => {
  if (data.length === 0) {
    return (
      <EmptyFavs>
        <h2>No tienes favoritos</h2>
        <p>
          Sigue mirando contenido y dale dos toques a una publicación para indicar que te gusta
        </p>
      </EmptyFavs>
    )
  }

  return (
    <Grid>
      {
        data.map(({ id, src }) =>
          <CardFav key={id} src={src}>
            <Link to={`/detail/${id}`}>
              <div />
            </Link>
          </CardFav>
        )
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  }))
}
