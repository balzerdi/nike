import * as React from "react"
import { SVGProps } from "react"

const Basket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 6h17l-2 8H9L5 2H0" stroke="#000" strokeWidth={3} />
    <circle cx={11} cy={19} r={2} fill="#000" />
    <circle cx={19} cy={19} r={2} fill="#000" />
  </svg>
)

export default Basket