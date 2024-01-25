'use client' // Error components must be Client Components

import { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    //console.error(error)
  }, [error])

  return (
    <Fragment>
      <Gutter>
        <div>
          <h2>Uh boy, something is amiss.... </h2>
          <p>
            We'll jiggle the handle while you hit the retry button below. Between the two of us
            we'll get this right.
          </p>
          <p>{error.message}</p>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Retry
          </button>
          <p>
            Or, <Link href="/"> click here to go home.</Link>{' '}
          </p>
        </div>
      </Gutter>
    </Fragment>
  )
}
