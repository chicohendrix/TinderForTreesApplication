import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import './TinderCards.css';


function TinderCards() {
    const[people, setPeople] = useState([
        {
            name: "Banana",
            url: "https://raw.githubusercontent.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/main/App/Images/tree-profiles/banana.jpg" 
        },
        {
            name: "Crabapple",
            url: "https://raw.githubusercontent.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/main/App/Images/tree-profiles/crabapple.jpg"
        },
        {
            name: "Blackpine",
            url: "https://raw.githubusercontent.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/main/App/Images/tree-profiles/blackpine.jpg"
        },
        {
            name: "Flapjack",
            url: "https://raw.githubusercontent.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/main/App/Images/tree-profiles/flapjack.jpg"
        },
        {
            name: "Hellebore",
            url: "https://github.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/blob/main/App/Images/tree-profiles/hellebore.jpg?raw=true"
        },
        {
            name: "Hemlock",
            url: "https://github.com/hcdd-340-spring-2021/Assignment-2-Treender-Starter/blob/main/App/Images/tree-profiles/hemlock.jpg?raw=true"
        },
    ]);


    return (
        <div>

           <div className="tinderCards__cardContainer">
    

           {people.map(person => (
               <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                   <div 
                   style={{ backgroundImage: `url(${person.url})` }}
                   className= "card">
                       <h3>{person.name}</h3>
                   </div>
               </TinderCard>

           ))}
           </div>
        </div>
    )
}

export default TinderCards
