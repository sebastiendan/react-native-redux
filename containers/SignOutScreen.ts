import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../actions/Sign'
import SignOutScreen from '../screens/SignOutScreen'
import IStoreState from '../types'

function mapStateToProps({ user }: IStoreState) {
  return {
    user,
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.SignActions>) {
  return {
    signOut: async () => {
      dispatch(await actions.SignOut())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOutScreen)
