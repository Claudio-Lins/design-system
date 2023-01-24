import { forwardRef, InputHTMLAttributes } from 'react'
import { InputForm, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
}

function TextForm({ prefix, ...props }: TextInputProps, ref: any) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <InputForm ref={ref} {...props} />
    </TextInputContainer>
  )
}

export const TextInput = forwardRef(TextForm)

TextInput.displayName = 'TextInput'
