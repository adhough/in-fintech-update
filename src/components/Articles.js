
import React from 'react';
import '../App.css';
import { Button } from './ContactButton';
import './Articles.css';
import CardItem from './CardItem';
import London from './images/London.jpg'
import FXMarket from './images/FXmarket.jpeg'
import Ethics from './images/Ethics.jpeg'
import WindTurbines from './images/WindTurbines_Boat.jpg'

function ArticleSection() {
  return (
    <div className='cards'>

      <div className='article-container'>
      <h1>Articles</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Renewable energy and the challenge of intermittency'
              src={WindTurbines}
              label='Renewables'
              path='/renewable'
            />
            <CardItem
              text='What is Open Banking?'
              src={London}
              label='Open Banking'
              path='/openbanking'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              text='Foreign Exchange: Background and Opportunities'
              src={FXMarket}
              label='Foreign Exchange'
              path='/fxmarket'
            />
            <CardItem
              text='Values and Ethics in Fintech'
              src={Ethics}
              label='Ethics'
              path='/ethics'
            />

          </ul>
        </div>
        <div className='project-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT
          </Button>

          </div>
      </div>
    </div>
  );
}


export default ArticleSection;
