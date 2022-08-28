import * as React from "react"
import { SVGProps } from "react"

const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11} cy={11} r={10} stroke="#000" strokeWidth={2} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6h-2v2h2V6Zm0 4h-2v6h2v-6Z"
      fill="#000"
    />
  </svg>
)

export default Info
