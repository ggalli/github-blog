import { SVGProps } from 'react'

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22 31c-.549 0-1.097-.21-1.515-.628L7.628 17.515a2.142 2.142 0 0 1 0-3.03L20.485 1.628a2.142 2.142 0 1 1 3.03 3.03L12.173 16l11.343 11.344A2.142 2.142 0 0 1 22 31Z"
    />
  </svg>
)
