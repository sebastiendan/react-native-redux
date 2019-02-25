import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { Dispatch } from 'redux'

import { delay } from '../_utils'
import * as constants from '../constants/actions/Sign'
import { getAPIUrl } from '../constants/Remotes'
import { ISignInByEmailDto, ISignUpByEmailDto } from '../types/dto/User'
import { IUserInfos } from '../types/User'

export interface ISignActions {
  type:
    | constants.GET_USER_BY_TOKEN_REQUEST
    | constants.GET_USER_BY_TOKEN_SUCCESS
    | constants.GET_USER_BY_TOKEN_FAILURE
    | constants.SIGN_IN_REQUEST
    | constants.SIGN_IN_SUCCESS
    | constants.SIGN_IN_FAILURE
    | constants.SIGN_UP_REQUEST
    | constants.SIGN_UP_SUCCESS
    | constants.SIGN_UP_FAILURE
    | constants.SIGN_OUT
  payload?: string | IUserInfos | Error
}

export function GetUserByTokenRequest(): ISignActions {
  return {
    type: constants.GET_USER_BY_TOKEN_REQUEST,
  }
}

export function GetUserByTokenSuccess(userInfos: IUserInfos): ISignActions {
  return {
    payload: userInfos,
    type: constants.GET_USER_BY_TOKEN_SUCCESS,
  }
}

export async function GetUserByTokenError(err: Error): Promise<ISignActions> {
  await AsyncStorage.removeItem('auth-token')
  return {
    payload: err,
    type: constants.GET_USER_BY_TOKEN_FAILURE,
  }
}

export function getUserByToken(): any {
  return (dispatch: Dispatch<SignActions>) => {
    dispatch(GetUserByTokenRequest())
    AsyncStorage.getItem('auth-token')
      .then(token => {
        if (!token) {
          throw new Error()
        }

        axios
          .get(getAPIUrl('auth/getAuthUserByToken'), {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(delay(2000))
          .then(res => {
            const userInfos: IUserInfos = { user: res.data, token }
            dispatch(GetUserByTokenSuccess(userInfos))
          })
          .catch(async err => {
            dispatch(await GetUserByTokenError(err))
          })
      })
      .catch(async err => {
        dispatch(await GetUserByTokenError(err))
      })
  }
}

export function SignInRequest(): ISignActions {
  return {
    type: constants.SIGN_IN_REQUEST,
  }
}

export async function SignInSuccess(
  userInfos: IUserInfos
): Promise<ISignActions> {
  await AsyncStorage.setItem('auth-token', userInfos.token as string)
  return {
    payload: userInfos,
    type: constants.SIGN_IN_SUCCESS,
  }
}

export async function SignInError(error: Error): Promise<ISignActions> {
  await AsyncStorage.removeItem('auth-token')
  return {
    payload: error,
    type: constants.SIGN_IN_FAILURE,
  }
}

export function signIn(dto: ISignInByEmailDto): any {
  return async (dispatch: Dispatch<SignActions>) => {
    dispatch(SignInRequest())

    // Trick sign-in
    setTimeout(async () => {
      dispatch(
        await SignInSuccess({
          token: 'auth-token',
          user: { email: 'user@email.com' },
        } as any)
      )
    }, 2000)

    axios
      .post(getAPIUrl('auth/verifyAuthUserByEmail'), dto)
      .then(delay(2000))
      .then(async res => {
        const userInfos: IUserInfos = res.data
        dispatch(await SignInSuccess(userInfos))
      })
      .catch(async err => {
        if (err.response && err.response.data) {
          dispatch(await SignInError(err.response.data))
        }
      })
  }
}

export function SignUpRequest(): ISignActions {
  return {
    type: constants.SIGN_UP_REQUEST,
  }
}

export async function SignUpSuccess(
  userInfos: IUserInfos
): Promise<ISignActions> {
  await AsyncStorage.setItem('auth-token', userInfos.token as string)
  return {
    payload: userInfos,
    type: constants.SIGN_UP_SUCCESS,
  }
}

export async function SignUpError(error: Error): Promise<ISignActions> {
  await AsyncStorage.removeItem('auth-token')
  return {
    payload: error,
    type: constants.SIGN_UP_FAILURE,
  }
}

export function signUp(dto: ISignUpByEmailDto): any {
  return (dispatch: Dispatch<SignActions>) => {
    dispatch(SignUpRequest())

    axios
      .post(getAPIUrl('auth/createAuthUser'), dto)
      .then(async res => {
        const userInfos: IUserInfos = res.data
        dispatch(await SignUpSuccess(userInfos))
      })
      .catch(async err => {
        if (err.response && err.response.data) {
          dispatch(await SignUpError(err.response.data))
        }
      })
  }
}

export async function SignOut(): Promise<ISignActions> {
  await AsyncStorage.removeItem('auth-token')
  return {
    type: constants.SIGN_OUT,
  }
}

export type SignActions = ISignActions
