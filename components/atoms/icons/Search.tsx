import * as React from "react"
import { SVGProps } from "react"

const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={9} cy={9} r={8} stroke="#000" strokeWidth={2} />
    <path d="m14 14 4 4" stroke="#000" strokeWidth={2} />
  </svg>
)

export default Search
