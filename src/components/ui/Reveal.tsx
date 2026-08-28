import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type Props = {
  children: ReactNode
  /** Retardo en cascada, en milisegundos */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}

export default function Reveal({ children, delay = 0, className = '', as = 'div' }: Props) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  const Tag = as as 'div'
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={[
        'transition-[opacity,transform] duration-[850ms] ease-brand',
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[34px]',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  )
}
