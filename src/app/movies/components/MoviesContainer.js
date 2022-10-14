import React from 'react'
import { connect } from 'react-redux'


const MoviesContainer = ({moves}) =>
  <ul>
    {
      moves.list.map((el,inx) => <li key={inx}>{el}</li>)
    }
  </ul>


const mapStateToProps = (state) => ({
  moves: state.moves,
})


export default connect(mapStateToProps,{})(MoviesContainer)