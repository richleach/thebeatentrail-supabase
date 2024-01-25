import { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { Gutter } from './_components/Gutter'

export default function NotFound() {
  return (
    <Fragment>
      <Gutter>
        <div>
          <h2>Not Found. Couldn't find what you're looking for.</h2>
          <p>Focus Grasshopper!</p>
          <Link href="/">Return Home</Link>
        </div>
      </Gutter>
    </Fragment>
  )
}
