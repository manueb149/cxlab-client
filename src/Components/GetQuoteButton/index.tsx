interface Props {
  mobile?: boolean
}
export default function GetQuoteButton({ mobile }: Props) {
  return (
    <button className={`btn btn-sm btn-primary border-transparent hover:border-transparent hover:shadow-cxlab rounded-full bg-orange-600 hover:bg-orange-600 ${mobile ? '' : 'hidden'} lg:flex lg:justify-end`}>
      Get a Quote <span className="px-1" aria-hidden="true">&rarr;</span>
    </button>
  )
}