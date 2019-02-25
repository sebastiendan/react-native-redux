import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { Dispatch } from 'redux'

import * as constants from '../constants/actions/User'
import { getAPIUrl } from '../constants/Remotes'
import { IProfile } from '../types'
import { IUserProfile } from '../types/User'

export interface IUserActions {
  type:
    | constants.GET_USER_PROFILE_REQUEST
    | constants.GET_USER_PROFILE_SUCCESS
    | constants.GET_USER_PROFILE_FAILURE
  payload?: IUserProfile | Error
}

export function GetUserProfileRequest(): IUserActions {
  return {
    type: constants.GET_USER_PROFILE_REQUEST,
  }
}

export function GetUserProfileSuccess(profile: IUserProfile): IUserActions {
  return {
    payload: profile,
    type: constants.GET_USER_PROFILE_SUCCESS,
  }
}

export async function GetUserProfileError(err: Error): Promise<IUserActions> {
  return {
    payload: err,
    type: constants.GET_USER_PROFILE_FAILURE,
  }
}

export function getUserProfile(): any {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch(GetUserProfileRequest())
    AsyncStorage.getItem('auth-token')
      .then(token => {
        if (!token) {
          throw new Error()
        }

        axios
          .get(getAPIUrl('user/profile'), {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(res => {
            dispatch(GetUserProfileSuccess(res.data))
          })
          .catch(async err => {
            dispatch(await GetUserProfileError(err))
          })
      })
      .catch(async err => {
        dispatch(await GetUserProfileError(err))
      })
  }
}

export async function getUserProfileByUserId(
  userId: number
): Promise<IProfile | Error> {
  return AsyncStorage.getItem('auth-token')
    .then(token => {
      if (!token) {
        throw new Error('Invalid user data, please sign in again')
      }

      return axios
        .get(getAPIUrl(`user/profile/${userId}`), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => res.data)
        .catch(err => err)
    })
    .catch(err => err)
}

export type UserActions = IUserActions
