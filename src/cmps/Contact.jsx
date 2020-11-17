import React from 'react'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import {Facebook, GitHub, LinkedIn } from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

const cvLink = require('../assets/CV/Chen_Edri_CV.pdf')

function openSource(source) {
    window.open(source);
}

export function Contact() {
    return (
        <section className="content-container">
            <h2>Contact Me</h2>

            <div className="contact-info-container">
                <div className="contact-info">
                    <ul>
                        <li><PersonIcon />Chen Edri</li>
                        <li><MailIcon />chenedri22@gmail.com</li>
                        <li><PhoneIcon />+972-53-7616607</li>
                    </ul>
                </div>
                <div className="contact-btns">
                    <ul>
                        <li onClick={() => openSource('https://www.linkedin.com/in/chen-edri-46290776')}><LinkedIn />Linkedin</li>
                        <li onClick={() => openSource('https://github.com/chenEdri ')}><GitHub />Github</li>
                        <li onClick={() => openSource('https://www.facebook.com/chen.edri.3')}><Facebook />Facebook</li>
                    </ul>
                    <ul>
                        <li onClick={() => openSource(cvLink.default)}><PictureAsPdfIcon />CV</li>
                        <li onClick={() => { 'https://api.whatsapp.com/send?phone=972537616607' }}><WhatsAppIcon /> Whats-App</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}