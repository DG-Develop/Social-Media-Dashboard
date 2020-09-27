import React from 'react'

import './styles/CardSocialMedia.scss'

const CardSocialMedia = ({ username, score, score_type, logo, color_stat, amount, arrow }) => (
    <div className="Social__Card">
        <div className="Social__Header">
            <img className="Social__Header--img" src={logo} alt=""/>
            <span className="Social__Header--text">{username}</span>
        </div>
        <div className="Social__Score">
            <h1 className="Social__Score--title">{score}</h1>
            <span className="Social__Score--follow">{score_type}</span>
        </div>
        <div className="Social__Footer">
            <img className="Social__Footer--img" src={arrow} alt=""/>
            <span className={`Social__Footer--text ${color_stat}`}>{amount} Today</span>
        </div>
    </div>
)

export default CardSocialMedia