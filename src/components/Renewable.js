
import React from 'react';
import '../App.css';
import { Button } from './ArticlesButton';
import './Renewable.css';
import WindTurbines from './images/WindTurbines_Boat.jpg'

function RenewableSection() {
  return (
    <div className='renewable-container'>

    <div className='project-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ARTICLES
      </Button>

      </div>

    <img src={WindTurbines} alt="WindTurbines"></img>
      <div className='renewable-article-container'>

<h1>Renewable energy and the challenge of intermittency</h1>
<h3>(First published May 2021)</h3>
<br />
<p>After decades of investment and technical advancements, renewable energy is a viable and cost-effective method of electricity generation. The 2020s will see many countries transition to generating their electricity from renewable sources which do not emit greenhouse gases. This will reduce carbon emissions, lead to cleaner air, lower costs and enable energy security.  However, as renewable power generation increases in importance, so will the challenge of intermittency, which is how do you supply electricity when there is no wind or sunshine.  In this article, I look at the growth potential of wind and solar energy and explore a range of solutions to intermittency.
</p>
<br />
<p><b>What is renewable energy?</b>
</p>
<br />
<p>
Renewable energy is energy from a source that is not depleted when used. For example, solar radiation is renewable because it is continuously produced by the Sun. Hydropower is currently the largest source of renewable electricity generation, but future growth is limited because most suitable rivers have already been dammed for hydroelectric power.  The renewable energy sources which are cost competitive and have the most potential for growth are wind and solar energy.
</p>
<br />
<p><b>Wind Turbines</b>
</p>
<br />
<p>
Humans have been harnessing the energy from wind since the Ancient Persians in 200BC, and in 1979 Denmark installed the first modern wind turbine to generate electricity[1]. Wind turbines only generate electricity when the wind is strong enough to turn the blades, which is typically wind speeds greater than 7 mph (11.3 kph)[2]. Wind speeds are stronger at greater heights, so taller wind turbines are exposed to more energy and larger blades are able to sweep larger areas. Offshore wind turbine projects are more efficient at generating electricity due to higher and steadier wind speeds over water. Modern wind turbines use advanced gearing systems to maximise power generation and an active control system that keeps the blades pointing in the direction of the wind.
</p>
<br />
<p>
A challenge that wind turbine projects face is that windy areas are often a long way from dense population centres. The installation of wind turbine projects therefore often require long transmission lines which are expensive to install and electricity losses increase as the distance from generation to consumption increases.
</p>
<br />
<p><b>Solar Energy</b>
</p>
<br />
<p>
Solar energy occurs when solar cells convert sun light into electricity using semiconducting materials, which are usually made from silicon. Operating costs for solar projects are low because they contain no moving parts, the raw materials are abundant and solar panels can last for 30 years.  Solar projects often require large leasing payments to land owners, although the overall costs for solar energy projects have reduced significantly over time. In 2000, it cost US$ 5 per watt but by 2017 it cost US$ 0.29 per watt to produce solar electricity[5]. The production and effectiveness of solar panels have improved due to ‘learning-by-doing’ and they have had an annual growth rate of 68% over the last decade[6].
</p>
<br />
<p>
Whilst solar energy projects can be at commercial scale (such as supplying businesses or buildings) or utility scale (up to several million solar panels), around a quarter of all solar energy is generated from residential homes. This is a significant change for electricity grids.  Since their introduction in the early 20th Century, electricity grids have generated electricity from large centralised power plants and then distributed the electricity to end-users. Using solar energy, households can generate on average 5kW of electricity which is enough to meet the energy needs of most households. This offers households the possibility of self-sufficiency in energy production and consumption. Households can receive credits for any electricity they pass onto the grid and they can also draw electricity whenever required. As long as costs are equal to or lower than electricity from the grid, many households will prefer to own and control the power they generate and use.
</p>
<br />
<p><b>Intermittency</b>
</p>
<br />
<p>
Energy generation from fossil fuels, hydro and nuclear is dispatchable, which means that energy can be generated whenever required. Solar and wind energy is intermittent, which means that electricity can only be generated when the sun shines and there is wind. The amount of energy production at any given moment from a wind or solar facility is variable, uncertain, location specific and therefore difficult to forecast.  This becomes a significant challenge when the proportion of solar and wind energy generation increases. Wind turbine energy generation is typically highest at night when winds are strongest, but when energy demand is low. Solar energy generation is highest at midday and declines in the late afternoon and evening when electricity demand is at its peak. There is also seasonal intermittency, particularly for countries that lie close to the poles such as Canada and Russia. These countries have 12 times the sun shine in the summer as they do in the winter and will therefore over-generate solar power in the summer and under-generate in winter[7]. Societies demand reliable electricity and supply and demand need to be balanced in real-time. To enable the growth of renewable electricity generation, we need to prioritise finding solutions to the intermittency of solar and wind energy.
</p>
<br />
<p>
One approach to dealing with intermittency is flexible load, which can help to balance the overall supply and demand for electricity by shifting energy use to off-peak periods. For example, electric vehicles (EV), air conditioners and water heating could use electricity when there is excess supply and prices are very low.  Smart meters can also help households and companies to optimise their electricity use and enable a smoother supply of electricity.
</p>
<br />
<p>
Intermittency can also be managed by increasing storage to enable energy supply when there is no wind or sun. Electricity will need to be stored for days, weeks and months. As of 2017, 96% of grid-scale energy storage capacity was in the form of hydro storage[8]. This involves using electricity (when prices are low) to pump water from a lower elevation reservoir to a higher one. When electricity is needed, the water from the higher reservoir is released through turbines which generate electricity. Hydro storage is only feasible where there are two reservoirs separated by significant elevation and it is expensive to develop and run.
</p>
<br />
<p>
The International Renewable Energy Agency (IRENA) forecast that battery electricity storage will need to increase by a factor of 17[9]. The energy storage solution with the most potential for growth are lithium-ion batteries. There have been enormous technology advancements due to the growth in devices such as smart phones and EV. The cost of manufacturing lithium-ion batteries declines 17% every time the cumulative production doubles.  The cost of manufacturing lithium-ion batteries fell from US$ 750 per kWh in 2010 to US$ 145 per KWh in 2017[10]. With demand for EV expected to rise over the next decade, one solution being piloted is to use their batteries as a distributed storage system for electricity grids. EV could charge when demand for power is low (during the middle of the night and the middle of the day when renewable power is plentiful and cheap) and supply the grid when demand is high. However, the technology to connect EV to the grid is not yet widely available and the batteries in EV will degrade quicker if they are used to supply electricity to the grid.  Incentives will need to be developed to ensure that sufficient numbers of EV are available when demand for power is at its peak.
</p>
<br />
<p>
Due to the investments and technical advancements over the last few decades, progress is being made in transitioning to renewable energy. In 2019, UK greenhouse gas emissions were 45.2% lower than in 1990[11]. As renewable energy increases in importance, Governments and the Energy Industry need to prioritise research and development on finding solutions to intermittency and developing markets for capacity and flexibility. Supporting the growth of renewable electricity generation is key to achieving the goal of zero carbon emissions. When electricity grids generate their electricity from renewable sources and economic sectors such as manufacturing, transport and farming transition from using fossil fuels to electricity, there will be significant decreases in greenhouse gas pollution.
</p>
<br />
<br />
<p>
[1] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 29
</p>
<br />
<p>
[2] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 32
</p>
<br />
<p>
[3] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 35
</p>
<br />
<p>
[4] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 34
</p>
<br />
<p>
[5] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 46
</p>
<br />
<p>
[6] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 52
</p>
<br />
<p>
[7] Gates, B, “How to avoid a climate disaster”, United States, Penguin Books Ltd, 2021, p. 77
</p>
<br />
<p>
[8] IRENA (2017), “Electricity Storage and renewables: Costs and markets to 2030”, International Renewable Energy Agency, Abu Dhabi, p8
</p>
<br />
<p>
[9] IRENA (2017), “Electricity Storage and renewables: Costs and markets to 2030”, International Renewable Energy Agency, Abu Dhabi, p8
</p>
<br />
<p>
[10] Usher, B, “Renewable energy : a primer for the twenty-first century”, United States, Columbia University Press, 2019, p. 156
</p>
<br />
<p>
[11] Department for Business, Energy & Industrial Strategy, “2019 UK greenhouse gas emissions, provisional figures”, National Statistics, United Kingdom, 2020
</p>
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
  );
}

export default RenewableSection;
