import classNames from "@/utils/classNames";

interface Props extends React.HTMLProps<HTMLElement> { }

export default function Button({ children, className }: Props) {
  return (
    <button className={classNames(
      `btn btn-sm btn-primary px-10 border-transparent hover:border-transparent hover:shadow-cxlab rounded-full text-white bg-orange-600 hover:bg-orange-600 lg:flex lg:justify-end`,
      className || ''
    )}>
      {children}
    </button>
  )
}