import { SignActions } from '../actions/Sign'
import { IDataState } from '../types'
import { IUserInfos } from '../types/User'

const UserReducer = (
  user: IDataState<IUserInfos> | undefined,
  action: SignActions
) => {
  switch (action.type) {
    case 'GET_USER_BY_TOKEN_REQUEST':
      return {
        ...(user as IDataState<IUserInfos>),
        error: undefined,
        loading: true,
      }
    case 'GET_USER_BY_TOKEN_FAILURE':
      return undefined
    case 'GET_USER_BY_TOKEN_SUCCESS':
      return {
        ...(user as IDataState<IUserInfos>),
        data: action.payload as IUserInfos,
        error: undefined,
        loading: false,
      }
    case 'SIGN_IN_REQUEST':
      return {
        ...(user as IDataState<IUserInfos>),
        data: { user: undefined, token: undefined },
        error: undefined,
        loading: true,
      }
    case 'SIGN_IN_FAILURE':
      return {
        ...(user as IDataState<IUserInfos>),
        error: action.payload as Error,
        loading: false,
      }
    case 'SIGN_IN_SUCCESS':
      return {
        ...(user as IDataState<IUserInfos>),
        data: action.payload as IUserInfos,
        error: undefined,
        loading: false,
      }
    case 'SIGN_UP_REQUEST':
      return {
        ...(user as IDataState<IUserInfos>),
        data: { user: undefined, token: undefined },
        error: undefined,
        loading: true,
      }
    case 'SIGN_UP_FAILURE':
      return {
        ...(user as IDataState<IUserInfos>),
        error: action.payload as Error,
        loading: false,
      }
    case 'SIGN_UP_SUCCESS':
      return {
        ...(user as IDataState<IUserInfos>),
        data: action.payload as IUserInfos,
        error: undefined,
        loading: false,
      }
    case 'SIGN_OUT':
      return undefined
    default:
      return user
  }
}

export default UserReducer
