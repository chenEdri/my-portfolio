import React from 'react'

export function SkillPreview({ skill, imgUrl }) {
    return (
        <div className="skill-card flex column sb">
            <h3 className="skill-name">{skill}</h3>
            <div className="skill-img"><img src={imgUrl} alt="#"/></div>
        </div>
    )
}