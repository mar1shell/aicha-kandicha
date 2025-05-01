interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

const PageHeader = ({ title, subtitle, className = "" }: PageHeaderProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold title-gradient mb-4">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-raleway">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-antique-gold to-antique-gold/30 mx-auto mt-6"></div>
    </div>
  )
}

export default PageHeader
