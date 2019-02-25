export interface IUserInfos {
  user: IUser | undefined | null
  token: string | undefined | null
}

export interface IUser {
  avatar: Express.Multer.File
  email: string
  id: number
  phoneNumber: string
  role: UserRoles
}

export interface IUserProfile {
  firstName: string
  id: number
  lastName: string
}

export enum UserRoles {
  Regular,
}
