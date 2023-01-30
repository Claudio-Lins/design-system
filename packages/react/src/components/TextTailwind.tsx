import { ComponentProps, ElementType } from 'react'
import '../styles/index.css'

export function TextTailwind() {
  return <p className="text-orange-500 font-bold text-2xl">TextTailwind</p>
}

export interface TextTailwindProps extends ComponentProps<'p'> {
  as?: ElementType
}
