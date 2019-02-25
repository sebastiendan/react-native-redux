import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../actions/Sign'
import SignScreen from '../screens/SignScreen'
import IStoreState from '../types'
import { ISignInByEmailDto, ISignUpByEmailDto } from '../types/dto/User'

export function mapStateToProps({ user }: IStoreState) {
  return {
    user,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SignActions>) {
  return {
    onSubmitSignInClick: (signInUser: ISignInByEmailDto) => {
      dispatch(actions.signIn(signInUser))
    },
    onSubmitSignUpClick: (signUpUser: ISignUpByEmailDto) => {
      dispatch(actions.signUp(signUpUser))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignScreen)
