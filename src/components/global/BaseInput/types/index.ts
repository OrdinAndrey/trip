import { ChangeEventHandler, InputHTMLAttributes } from 'react'

export interface PropsInterface extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  value?: string
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  errorText?: string
  fieldPassword?: boolean
}
