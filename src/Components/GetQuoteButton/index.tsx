import classNames from "@/utils/classNames"

interface Props {
  mobile?: boolean;
  className?: string
}
export default function GetQuoteButton({ mobile, className }: Props) {
  return (
    <button className={classNames(
      `btn btn-sm btn-primary border-transparent hover:border-transparent hover:shadow-cxlab rounded-full text-white bg-orange-600 hover:bg-orange-600 ${mobile ? '' : 'hidden'} lg:flex lg:justify-end`,
      className || ''
    )}>
      Get a Quote
    </button>
  )
}