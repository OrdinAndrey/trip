import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'clear' | 'dark' | 'light'

export interface PropsInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: () => void
  variant?: ButtonVariant
}
