import React, { Component } from 'react'
import { SkillPreview } from './SkillPreview.jsx'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export class SkillList extends Component {

    state = {
        isScrolled: false,
    }

    ref = React.createRef()

    executeScroll = (scrollTo) => {
        let scrollDiff = this.ref.current.scrollWidth - this.ref.current.offsetWidth

        if (this.ref.current.scrollLeft !== 0) {
            this.setState({ isScrolled: true });
        }
        if (this.ref.current.scrollLeft >= scrollDiff) {
            this.ref.current.scrollLeft = 0
            this.setState({ isScrolled: false })
        }
        else if (this.ref.current.scrollLeft < scrollDiff) {
            this.ref.current.scrollLeft += scrollTo
        }
        else {
            this.setState({ isScrolled: false })
        }
    }
    render() {
        const { lable, skill } = this.props;
        return (
            <section>
                <h2 className="tac skill-lable">{lable}</h2>
                <div ref={this.ref} className="skills-container">
                    <button className="list-left-btn" onClick={() => this.executeScroll(-350)}><ArrowBackIosIcon /></button>
                    {(skill) ? skill.map((tech, idx) => <div key={idx} className="full-grid"><SkillPreview key={idx} skill={tech.name} imgUrl={tech.imgUrl} /></div>)
                        : ''}
                    <button className="list-right-btn" onClick={() => this.executeScroll(350)}><ArrowForwardIosIcon /></button>
                </div>
            </section>
        )

    }

}