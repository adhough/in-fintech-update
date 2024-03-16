
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './LCOE.css';
import LCOE from './images/LCOE_Image.jpg'

function LCOESection() {
  return (
    <div className='LCOE-container'>
    <h1>Levelised Cost of Energy Valuation Model</h1>
      <div className='LCOE-project-container'>




<br />
<img src={LCOE} alt="LCOE"/>
<br />
<p>This website estimates the Levelised Cost of Energy (LCOE) which is the average net present cost of generation over its lifetime or the minimum price at which energy must be sold for a project to break even. This model can be used for both Renewable Energy projects and for Energy projects using fossil fuels.  Developed using Python, Flask and launched using Heroku.
</p>
<br />
<a href="https://lcoe-app.herokuapp.com/" target="_blank" rel="noreferrer">https://lcoe-app.herokuapp.com/</a>
<br />
<h3>(First released September 2021)</h3>
    </div>
    <div className='values-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      PROJECTS
      </Button>

      </div>
      </div>
  );
}

export default LCOESection;
