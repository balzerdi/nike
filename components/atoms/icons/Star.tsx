import * as React from "react"
import { SVGProps } from "react"

const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.465 15.615 11 15.37l-.465.245-4.673 2.456.893-5.202.089-.518-.377-.368L2.687 8.3l5.224-.759.52-.076.233-.471L11 2.26l2.336 4.733.233.471.52.076 5.224.759-3.78 3.684-.377.367.09.519.891 5.202-4.672-2.456Z"
      stroke="#000"
      strokeWidth={2}
    />
  </svg>
)

export default Star