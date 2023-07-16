import { ChangeEventHandler, InputHTMLAttributes, ReactElement } from 'react'

export interface PropsInterface extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  type?: string
  control?: ReactElement
  checked: boolean
}
