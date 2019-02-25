import IStoreState from '../types'
import UserReducer from './User'
import UserProfileReducer from './UserProfile'

const initState: IStoreState = {
  user: undefined,
  userProfile: undefined,
}

export default function combined(state = initState, action: any) {
  return {
    user: UserReducer(state.user, action),
    userProfile: UserProfileReducer(state.userProfile, action),
  }
}
