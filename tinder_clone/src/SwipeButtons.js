import React from 'react'
import "./SwipeButtons.css"
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';


function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton>
            <ReplayIcon className='swipeButtons__repeat' fontSize='large'/>
        </IconButton>
        <IconButton>
            <CloseIcon className='swipeButtons__left' fontSize='large'/>
        </IconButton>
        <IconButton>
            <StarRateIcon className='swipeButtons__star' fontSize='large'/>
        </IconButton>
        <IconButton>
            <FavoriteIcon className='swipeButtons__right' fontSize='large'/>
        </IconButton>
        <IconButton>
            <FlashOnIcon className='swipeButtons__lightning' fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons