export interface IAction {
  callbackChange?: (value: string) => void
  callbackPress?: (value: string | undefined) => void
  iconLibrary?: string
  iconName?: string
}
