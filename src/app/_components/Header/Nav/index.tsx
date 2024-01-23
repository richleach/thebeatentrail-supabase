'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}

      <CartLink />

      {user && (
        <Link href="/account" style={{ paddingRight: '150px' }}>
          Account
        </Link>
      )}
      {!user && (
        <React.Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account" style={{ paddingRight: '150px' }}>
            Create Account
          </Link>
        </React.Fragment>
      )}

      <Link href="/videos">Videos</Link>
      <span style={{ color: 'darkgrey' }}>|</span>
      <Link href="/ride-with-us">Ride With Us</Link>
      <span style={{ color: 'darkgrey' }}>|</span>
      <Link href="/amazon-favorites">Amazon Favorites</Link>
      <span style={{ color: 'darkgrey' }}>|</span>
      <Link href="/our-gear">Our Gear</Link>
      <span style={{ color: 'darkgrey' }}>|</span>
      <Link href="/blog">Blog</Link>
      <span style={{ color: 'darkgrey' }}>|</span>
      <Link href="/partners-and-friends">Partners &amp; Friends</Link>
    </nav>
  )
}
