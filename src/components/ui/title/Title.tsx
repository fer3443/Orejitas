interface Props {
  title:string;
  subtitle?:string;
  className?:string;
}
export const Title = ({title, subtitle, className}:Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className="antialised font-semibold text-3xl my-5">{title}</h1>
      {
        subtitle && (
          <h3 className="text-xl mb-3">
            {subtitle}
          </h3>
        )
      }
    </div>
  )
}
