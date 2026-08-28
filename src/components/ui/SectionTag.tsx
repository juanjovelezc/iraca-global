type Props = { index: string; label: string; dark?: boolean }

export default function SectionTag({ index, label, dark = false }: Props) {
  return (
    <div className="text-[12.5px] font-bold tracking-[.16em] uppercase text-teal mb-[18px]">
      {index} <span className={dark ? 'text-cream/45' : 'text-ink/45'}>/ {label}</span>
    </div>
  )
}
