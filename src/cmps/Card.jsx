import React from 'react'

// Creating an illusion of slots
export function Card({ header, body, link, img, tools }) {
    return (
        <div className="card flex column align-center">
            <div className="card-img">{img && <img src={img} alt="#"/>}</div>
            <div className="card-header"><h3 className="card-title tac clr3">{header}</h3></div>
            <div className="card-body">{body}</div>
            <div className="tools-img-container">{tools.map((tool, idx)=><div key={idx} title={tool.title} className="tool-img"><img  key={idx} src={tool.url} alt="#"/></div>)}</div>
            <div className="card-link"><a href={link} target="_">View Project</a></div>
        </div>
    )
}
