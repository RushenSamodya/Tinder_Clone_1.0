
import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@mui/material';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://www.usnews.com/object/image/00000163-652c-d812-a367-eded8f0e0000/180515-10thingselonmusk-editorial.jpg?update-time=1526411160555&size=responsive640"
        },
        {
            name: "Jeff Bazos",
            url: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/2000451/170515-jeff-bezos-se-1143p.jpg"
        }
    ]);

    const Swiped = (direction, nameToDelete)=>{
        console.log("removing: "+ nameToDelete);
    };

    const outOfFrame = (name)=>{
        console.log(name + "left the screen!");
    };

  return (
    <div className='tinderCards'>
     
        <div className='tinderCards__cardContainer'>
            {people.map((person)=>(
                <TinderCard
                    className = "swipe"
                    key = {person.name}
                    preventSwipe = {["up", "down"]}
                    onSwipe = {(dir) => Swiped(dir,person.name)}
                    onCardLeftScreen = {()=> outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage: `url(${person.url})`
                    }}
                        className = "card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            

        </div>


      
    

    </div>
  )
}

export default TinderCards