export interface IField {
  id: string
  isEditable?: boolean
  label: string
  type: 'text' | 'image'
  value: string | number
}
