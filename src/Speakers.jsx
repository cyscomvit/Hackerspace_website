import React from "react";
import './Speakers.css'
import speaker_image from './images/user.png'
import speaker_subash from './images/speaker-subash.jpeg'
import speaker_ranganthan from './images/speaker-ranganathan.jpeg'
function Speakers() {
    return (
        <div id="container">
            <h1 id="headline">Meet Our Speakers</h1>
            <p id="intro-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit officiis asperiores doloribus sint optio voluptatem nobis pariatur ipsa dolorum vero, nisi, placeat quis ullam quibusdam aspernatur in veritatis voluptatibus nesciunt?</p>
            <div className="profiles">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="details">
                            <img src={speaker_ranganthan} width="150px"></img>
                            <h2>Ranganthan P</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="details-back">
                            <h3>Ranganthan P</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facilis velit consequatur ad, sunt suscipit. Inventore iure saepe reiciendis repellendus neque? Ad id porro sapiente magnam odio, eveniet iusto cum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <div className="details">
                            <img src={speaker_subash} width="150px"></img>
                            <h2>Subash Jaganathan</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="details-back">
                            <h3>Subash Jaganathan</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto, sint obcaecati doloribus ullam et hic, magni quisquam debitis non totam adipisci distinctio, omnis vel quo aut nostrum blanditiis aliquam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    );
}

export default Speakers