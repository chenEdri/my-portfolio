import React from 'react'
import { Card } from './Card'

export function Project() {
    return (
        <section className="project-container mb80">
            <h1 className="project-headline tac">My Projects</h1>
            <div className="cards-container">
                <Card
                    header="HealthE"
                    body="marketplace that sales events for healthy life styles"
                    img="https://res.cloudinary.com/dygtul5wx/image/upload/v1605001157/my-portfolio/healthE_bqyj3o.png"
                    link="https://health5.herokuapp.com/#/"
                    tools={[
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911188/my-portfolio/800px-Unofficial_JavaScript_logo_2.svg_mmzkwd.png', title: 'JavaScript' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911159/my-portfolio/800px-HTML5_logo_and_wordmark.svg_tboaqu.png', title: 'HTML5' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911282/my-portfolio/1280px-Sass_Logo_Color.svg_bda1ns.png', title: 'Sass' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911311/my-portfolio/1280px-React-icon.svg_tomrpn.png', title: 'React' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911452/my-portfolio/0_U2DmhXYumRyXH6X1_lvutye.png', title: 'Redux' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911493/my-portfolio/mongodb_lproxt.png', title: 'Mongo-DB' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911534/my-portfolio/logo_raw_zajdfp.svg', title: 'Material-ui' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911655/my-portfolio/cloudinary_icon_d829tv.png', title: 'Cloudinary' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911847/my-portfolio/socket-io-javascript-express-js-react-logo-png-favpng-68mCtc3fMmpFxGyCREqztPjT7_q6mbkx.jpg', title: 'Socket-io' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911938/my-portfolio/1920px-Node.js_logo.svg_fuplrs.png', title: 'Node-js' },
                        {
                            url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604912340/my-portfolio/cenlvst0fgs8ejx12n8u_hd61oq.png', title:
                                'heroku'
                        }
                    ]} />
                <Card
                    header="Apsus"
                    body="simple frontend project demonstarte email and note app"
                    img="https://res.cloudinary.com/dygtul5wx/image/upload/v1605002547/my-portfolio/apsus_kajmps.png"
                    link="https://davidmarom.github.io/appsus/?#/"
                    tools={[
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911311/my-portfolio/1280px-React-icon.svg_tomrpn.png', title: 'React' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911218/my-portfolio/800px-CSS3_logo_and_wordmark.svg_paojwy.png', title: 'CSS' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911159/my-portfolio/800px-HTML5_logo_and_wordmark.svg_tboaqu.png', title: 'HTML5' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911188/my-portfolio/800px-Unofficial_JavaScript_logo_2.svg_mmzkwd.png', title: 'JavaScript' }
                    ]} />
                <Card
                    header="Weather"
                    body="this project demonstart my ability to build within 3 hours simple web app using API's"
                    img="https://res.cloudinary.com/dygtul5wx/image/upload/v1605002325/my-portfolio/weather_ikv0bi.png"
                    link="https://chenedri.github.io/weather-app/"
                    tools={[
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911311/my-portfolio/1280px-React-icon.svg_tomrpn.png', title: 'React' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911534/my-portfolio/logo_raw_zajdfp.svg', title: 'Material-ui' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911282/my-portfolio/1280px-Sass_Logo_Color.svg_bda1ns.png', title: 'Sass' },
                        { url: 'https://res.cloudinary.com/dygtul5wx/image/upload/v1604911188/my-portfolio/800px-Unofficial_JavaScript_logo_2.svg_mmzkwd.png', title: 'JavaScript' }
                    ]} />
            </div>
        </section>
    )
}