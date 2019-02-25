import { IUserInfos, IUserProfile } from './User'

export default interface IStoreState {
  user: IDataState<IUserInfos> | undefined
  userProfile: IDataState<IUserProfile> | undefined
}

export interface IDataState<T> {
  data: T
  error: Error | undefined
  loading: boolean
}