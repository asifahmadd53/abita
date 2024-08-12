import React from 'react';
import Video from './Video'; // Ensure this path is correct
import { sofachair, sofaset, videoimg } from '../../assets'; // Ensure this path is correct
import { video1 } from '../../assets';

const VideoComponent = () => {
  return (
    <div>
      <Video img={videoimg} video={video1}/>
    </div>
  );
};

export default VideoComponent;
