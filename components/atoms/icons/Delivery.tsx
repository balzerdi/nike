import * as React from "react"
import { SVGProps } from "react"

const Delivery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5.5} cy={14.5} r={2.5} stroke="#000" strokeWidth={2} />
    <circle cx={15.5} cy={14.5} r={2.5} stroke="#000" strokeWidth={2} />
    <path stroke="#000" strokeWidth={2} d="M2 1h13v9H2zM15 4h7v8h-7z" />
    <path fill="#000" d="M7 12h7v2H7zM0 12h4v2H0z" />
  </svg>
)

export default Delivery
