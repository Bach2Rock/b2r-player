import React from 'react';
import './SongCards.css';
import SongCardItem from './SongCardItem';
import { SimpleGrid } from '@chakra-ui/react'

// What fills in the song cards, need to figure out how to link to songs from database
function SongCards() {
  return (
    <div className='cards'>
      <h1> Newest Song Uploads </h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <SimpleGrid
              columns={3}
              spacing={4}
              >
              <SongCardItem
                src='images/fillerimage.jpg'
                text='Song name 1'
                label='Artist 1'
                path='/dashboard'
              />
              <SongCardItem
                src='images/fillerimage.jpg'
                text='Song name 2'
                label='Artist 2'
                path='/dashboard'
              />
              <SongCardItem
                src='images/fillerimage.jpg'
                text='Song name 3'
                label='Artist 3'
                path='/dashboard'
              />
              <SongCardItem
                src='images/fillerimage.jpg'
                text='song name 4'
                label='Artist 4'
                path='/dashboard'
              />
              <SongCardItem
                src='images/fillerimage.jpg'
                text='song name 5'
                label='Artist 5'
                path='/dashboard'
              />
              <SongCardItem
                src='images/fillerimage.jpg'
                text='song name 6'
                label='Artist 6'
                path='/dashboard'
              />
              <SongCardItem
                src='images/fillerimage.jpg'
                text='song name 7'
                label='Artist 7'
                path='/dashboard'
              />
            </SimpleGrid>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SongCards;
