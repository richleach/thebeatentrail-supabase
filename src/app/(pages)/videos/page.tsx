import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

async function getData() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=36&playlistId=UUnIyytMWGt41WZAc6QocKcQ&key=${process.env.YOUTUBE_API_KEY}`,
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function PlaylistPage() {
  const data = await getData()

  return (
    <Fragment>
      <Gutter>
        <h1>YouTube Playlist</h1>
        <h4>Enjoy some of our most recent videos, recorded on the trail!</h4>
        <hr style={{ color: 'purple' }} />
        <br />
        <div className="bg-blue-400 flex flex-row justify-center" style={{ paddingBottom: '30px' }}>
          <div className={classes.wrap}>
            {data.items.map(item => (
              <div
                key={item.id}
                className="moviewrapper"
                style={{ border: '2px solid purple', borderRadius: '20px', overflow: 'hidden' }}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={item.snippet.thumbnails.maxres.url}
                    height={180}
                    width={320}
                    alt={item.snippet.title}
                    style={{ borderBottom: 'thin solid purple' }}
                  />
                  <div style={{ backgroundColor: 'rgb(245, 209, 87)' }}>
                    &nbsp; {item.snippet.title.slice(0, 38)}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Gutter>
    </Fragment>
  )
}
