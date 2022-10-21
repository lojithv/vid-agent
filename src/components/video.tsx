import React from 'react'
import { VideoModel } from '../models/video'

type Props = {
    video: VideoModel
}

const Video = (props: Props) => {
  return (
    <div>{props.video.title}</div>
  )
}

export default Video;