{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { type Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const tbtStyle = {
    color: 'rgb(173,146,52)',
    textDecoration: 'none',
    marginRight: '250',
  }
  const tbtSpacer = {
    paddingRight: '20px',
    marginRight: '20',
  }

  return (
    <>
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/" style={tbtStyle}>
            <Image src="/tbtLogoSmall.png" height={50} width={148} alt="The Beaten Trail" />
          </Link>

          <HeaderNav header={header} />
        </Gutter>
      </header>
    </>
  )
}
