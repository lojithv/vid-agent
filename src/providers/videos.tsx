import React from 'react'
import Video from '../components/video';

type Props = {}

const Videos = (props: Props) => {

    const videos = [
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
    ];

  return (
   <div>{videos.map((v)=><Video video={{
    id: "testid",
    title: "test title",
    url: "test url",
    thumbnail: "test thumbnail"
}}/>)}</div> 
  )
}

export default Videos;