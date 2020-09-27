import React from 'react'

import './styles/CardToday.scss'

const CardToday = ({ title, logo, views, arrow, color_stat, percentage }) => (
    <div className="Today">
        <span className="Today__title">{title}</span>
        <img className="Today__image" src={logo} alt=""/>
        <strong className="Today__views">{views}</strong>
        <div className="Today__stats">
            <img className="Today__stats--img" src={arrow} alt=""/>
            <span className={`Today__stats--percentage ${color_stat}`}>{percentage}</span>
        </div>
    </div>
)

export default CardToday