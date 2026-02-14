interface Props {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionTitle({ title, subtitle, center }: Props) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
