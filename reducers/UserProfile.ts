import { SignActions } from '../actions/Sign'
import { UserActions } from '../actions/User'
import { IDataState } from '../types'
import { IUserProfile } from '../types/User'

const UserProfileReducer = (
  profile: IDataState<IUserProfile> | undefined,
  action: UserActions | SignActions
) => {
  switch (action.type) {
    case 'GET_USER_PROFILE_REQUEST':
      return {
        ...(profile as IDataState<IUserProfile>),
        error: undefined,
        loading: true,
      }
    case 'GET_USER_PROFILE_FAILURE':
      return {
        ...(profile as IDataState<IUserProfile>),
        error: action.payload as Error,
        loading: false,
      }
    case 'GET_USER_PROFILE_SUCCESS':
      return {
        ...(profile as IDataState<IUserProfile>),
        data: action.payload as IUserProfile,
        error: undefined,
        loading: false,
      }
    case 'SIGN_OUT':
      return undefined
    default:
      return profile
  }
}

export default UserProfileReducer
