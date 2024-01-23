import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

import { type Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  const d = new Date()
  let year = d.getFullYear()

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <img
              className={classes.logo}
              src="/tbtLogoSmall.png"
              height={50}
              width={148}
              alt="The Beaten Trail"
            />
          </picture>
        </Link>
        <nav className={classes.nav}>
          <Link href="/about">About &nbsp; </Link>
          <Link href="/privacy">Privacy &nbsp; </Link>
          <Link href="/contact">Contact &nbsp; </Link>
          <Link href="/terms">Terms &nbsp; </Link>
          <Link href="/">Copyright &copy; {year}</Link>
        </nav>
        <nav className={classes.nav}>
          <SocialIcon url="https://www.facebook.com/TheBeatenTrailLLC" target="_blank" />
          <SocialIcon
            url="https://www.youtube.com/channel/UCnIyytMWGt41WZAc6QocKcQ"
            target="_blank"
          />
          <SocialIcon url="https://www.tiktok.com/@thebeatentrail" target="_blank" />
          <SocialIcon url="https://www.instagram.com/thebeatentrail/" target="_blank" />
          <SocialIcon url="https://twitter.com@trailbeaten" target="_blank" />
        </nav>
      </Gutter>
    </footer>
  )
}
