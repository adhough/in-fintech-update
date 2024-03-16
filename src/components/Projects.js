
import React from 'react';
import '../App.css';
import './Projects.css';
import CardItem from './CardItem';
import { Button } from './ArticlesButton';
import Agile from './images/Agile.jpeg'
import FXModel from './images/FXModel.jpeg'
import Libor from './images/Libor.jpeg'
import SecModel from './images/SecModel.jpeg'
import LCOE_Image from './images/LCOE_Image.jpg'

function ProjectSection() {
  return (
  <div className='cards'>
  <div className='project-container'>
  <h1>Projects</h1>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItem
        text='Levelised Cost of Energy Valuation Model'
        src={LCOE_Image}
        label='LCOE_Image'
        path='/LCOE'
      />
      <CardItem
        text='Agile Project Tracker'
        src={Agile}
        label='Agile'
        path='/agile'
      />
      </ul>
      <ul className='cards__items'>
      <CardItem
        text='Securitisation Model'
        src={SecModel}
        label='Securitisation'
        path='/secmodel'
      />
      <CardItem
        text='FX Risk Model'
        src={FXModel}
        label='FX Risk'
        path='/fxrisk'
      />

    </ul>
  </div>
  <div className='project-btns'>
  <Button
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'
  >
    ARTICLES
    </Button>

    </div>
  </div>

  </div>

);
}
export default ProjectSection;
