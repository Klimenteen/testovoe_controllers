import React from 'react'
import { observer } from "mobx-react"
import CountryHintsStore from '../mobx/autoCompleteControllMobx';
import './HintsContainerStyle.scss'
//тут логичнее воспользоваться пропсами(как и много где еще =)), но раз приложение для мобикса маловато вывожу им

const HintsContainer = observer(({countryHintsController}:{countryHintsController:CountryHintsStore}) => {
  return (
    <div className='hints__container'>
    {countryHintsController.hints.map((el, i)=>(
        <div key={i}> {el.name} {el.fullName}<img src={el.flag}/></div>
    ))}
    </div>
  )
})

export default HintsContainer