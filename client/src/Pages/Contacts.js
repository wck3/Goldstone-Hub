import React from "react";
import './Contacts.css';
import get_contacts from '../API/get_contacts';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export default function Contacts(){
    const [contacts, setContacts] = useState();

    useEffect(() => {
        async function fetchContactsAndSetState() {
            try {
                // fetch all contacts to display
                const result = await get_contacts();
                setContacts(result);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        }
        fetchContactsAndSetState();
    }, []);

    return(
        <div className="Contacts">
            <h1 className="pg-title">CONTACTS</h1>
            { contacts !== undefined ? (
            <>
            <div className="contact-info">
                 {contacts?.map( (contact) => (
                    <div className="contact">
                        <ul>
                            <li> <img src={contact.contact_img}></img></li>
                            <li className="contact-name">{contact.name}</li>
                            <li className="contact-title"><b>{contact.title}</b></li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className="icon"/>
                                <a href={'tel: ' + contact.phone}>{contact.phone}</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                <a href={'mailto: ' + contact.email}>{contact.email}</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
           
            <div className="meeting"> 
                <h1 className="pg-title">SCHEDULE A MEETING</h1>
                <div className="card-container">
                    <div className="card card-1">
                        <h1 className="card-title">MEET WITH CARRIE</h1>
                        <img src="/images/meeting/meeting1.jpg"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat interdum odio sit amet rhoncus. 
                            Proin mauris tortor, aliquet ut gravida auctor, tincidunt aliquet nisi. Nunc fringilla volutpat ligula at vehicula. 
                            Cras quis tincidunt ex. Pellentesque 
                            commodo sagittis imperdiet. Pellentesque et sodales elit, et cursus felis. Sed tempor dignissim nunc.
                            </p>
                        </div>
                    </div>
                    <div className="card card-2">
                        <h1 className="card-title">MEET WITH ERIN</h1>
                        <img src="/images/meeting/meeting2.jpg"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat interdum odio sit amet rhoncus. 
                            Proin mauris tortor, aliquet ut gravida auctor, tincidunt aliquet nisi. Nunc fringilla volutpat ligula at vehicula. 
                            Cras quis tincidunt ex. Pellentesque 
                            commodo sagittis imperdiet. Pellentesque et sodales elit, et cursus felis. Sed tempor dignissim nunc.
                            </p>
                        </div>
                    </div>
                    <div className="card card-3">
                        <h1 className="card-title">MEET WITH JENNIFER</h1>
                        <img src="/images/meeting/meeting3.jpg"></img>
                        <div className="card-body">
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat interdum odio sit amet rhoncus. 
                            Proin mauris tortor, aliquet ut gravida auctor, tincidunt aliquet nisi. Nunc fringilla volutpat ligula at vehicula. 
                            Cras quis tincidunt ex. Pellentesque 
                            commodo sagittis imperdiet. Pellentesque et sodales elit, et cursus felis. Sed tempor dignissim nunc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>):(<span></span>)}

            {/*<div className="socials">
                <h1 className="pg-title">SOCIALS</h1>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/goldstonerealestate/">
                            <img src="/images/socials/instagram.png"></img> 
                            @goldstonerealestate
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/GoldstoneNewJersey">
                           <img src="/images/socials/facebook.png"></img>
                            @GoldstoneNewJersey
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/goldstone-real-estate-co/">
                            <img src="/images/socials/LinkedIn.png"></img>
                            @goldstone-real-estate
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@goldstonerealtynj">  
                            <img src="/images/socials/tikTok.png"></img>
                            @goldstonerealtynj
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@goldstonerealtynj"> 
                            <img src="/images/socials/youTube.png"></img>
                            @goldstonerealtynj
                        </a>
                    </li>
                </ul>
                 </div>*/}
    
        </div>
    );
}