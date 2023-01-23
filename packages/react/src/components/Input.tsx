import { forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isVisibled?: boolean
}

export function InputComponent({ ...props }: InputProps, ref: any) {
  return <input ref={ref} {...props} />
}

export const Input = forwardRef(InputComponent)
