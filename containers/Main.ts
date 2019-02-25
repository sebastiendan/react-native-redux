import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../actions/Sign'
import Main from '../Main'
import IStoreState from '../types'

function mapStateToProps({ user }: IStoreState) {
  return {
    user,
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.SignActions>) {
  return {
    getUserByToken: () => {
      dispatch(actions.getUserByToken())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
