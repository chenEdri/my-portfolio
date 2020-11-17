import React, { Component } from 'react'
import { SkillList } from './SkillList';

export class Skill extends Component {
    state = {
        
        skills: [
            {
                lable: 'Languages',
                array: [
                    { name: 'C', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912428/my-portfolio/800px-The_C_Programming_Language_logo.svg_t4ntut.png' },
                    { name: 'JavaScript', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911188/my-portfolio/800px-Unofficial_JavaScript_logo_2.svg_mmzkwd.png' },
                    { name: 'HTML5', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911159/my-portfolio/800px-HTML5_logo_and_wordmark.svg_tboaqu.png' },
                    { name: 'CSS', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911218/my-portfolio/800px-CSS3_logo_and_wordmark.svg_paojwy.png' }
                ]
            },
            {
                lable: 'Data-Base',
                array: [
                    { name: 'MongoDB', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911493/my-portfolio/mongodb_lproxt.png' },
                    { name: 'FireBase', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912152/my-portfolio/1920px-Firebase_Logo.svg_e76gf1.png' },
                    { name: 'AWS', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912303/my-portfolio/1920px-Amazon_Web_Services_Logo.svg_wlzef1.png' }
                ]
            },
            {
                lable: 'Frameworks',
                array: [
                    { name: 'React', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911311/my-portfolio/1280px-React-icon.svg_tomrpn.png' },
                    { name: 'Vue', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912030/my-portfolio/1024px-Vue.js_Logo_2.svg_kfrs8p.png' },
                    { name: 'Angular', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911991/my-portfolio/800px-Angular_full_color_logo.svg_edftli.png' },
                    { name: 'Node-Js', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911938/my-portfolio/1920px-Node.js_logo.svg_fuplrs.png' },
                    { name: 'J-Query', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912087/my-portfolio/1920px-JQuery_logo.svg_dfq3n8.png' }
                ]
            },
            {
                lable: 'Useful techniques',
                array: [
                    { name: 'Sass', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911282/my-portfolio/1280px-Sass_Logo_Color.svg_bda1ns.png' },
                    { name: 'Regular Expression', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1605028841/my-portfolio/write-regular-expression-or-regex-for-your-code_jkom4a.png' },
                    { name: 'Google-Api\'s', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1605028895/my-portfolio/1_ujbpBAj9o9_GtVOVVs-JOA_rnfbjk.png' },
                    { name: 'Npm-libaries', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1605028929/my-portfolio/1920px-Npm-logo.svg_ioh6vc.png' },
                    { name: 'Canvas', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911729/my-portfolio/Html5_canvas_logo_b6cmqb.png' },
                    { name: 'Socket-io', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911847/my-portfolio/socket-io-javascript-express-js-react-logo-png-favpng-68mCtc3fMmpFxGyCREqztPjT7_q6mbkx.jpg' },
                    { name: 'Git-hub', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912199/my-portfolio/800px-Font_Awesome_5_brands_github.svg_isczec.png' },
                    { name: 'Hiroku', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912340/my-portfolio/cenlvst0fgs8ejx12n8u_hd61oq.png' },
                    { name: 'Cloudinary', imgUrl: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911655/my-portfolio/cloudinary_icon_d829tv.png' }
                ]
            }
        ]
    }

   

    render() {
        const { skills } = this.state;
        return (
            <section className="list-container">
                <h1 className="tac skill-headline">My Skills</h1>
                <div className="flex column">
                    <div >
                        {(skills) ? skills.map((skill, idx) => <SkillList
                            key={idx}
                            lable={skill.lable}
                            skill={skill.array}
                           />)
                            : ''}
                    </div>
                </div>
            </section>
        )
    }
}