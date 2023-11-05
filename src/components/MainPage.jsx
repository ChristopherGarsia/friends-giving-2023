import React, {useEffect, useState} from 'react'
import photo from '../images/HappyFriendsgiving.png'
import photoMenu from '../images/Menu.png'
import photoItinerary from '../images/Itinerary.png'

function MainPage(props) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        0 === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])


    return (
        <div className='mainPage'>
                {active? 
                    <div>
                        <br></br>
                        <div className='itemBox-heading'>
                        <h1 className='heading'>Welcome to the Official Site for <br/> Friendsgiving 2023 Lake Tahoe Edition</h1>
                    </div>
                    <h4>"Celebrate we will because life is short but sweet for certain!"</h4>
                    <h4>- Dave</h4>
                    <br></br>
                    <h2 className='heading2'>{"Hello " + props.user + "! Please use this site to learn more about the everyone's roles for this weekend"}</h2>
                    <h2 className='heading2'>You can also find your specific packing lists and meals within your tab</h2>
                    <h2 className='heading2'>Finally check out the Menu and Itinerary Below</h2>
                    <img src={photoMenu}/>
                    <img src={photoItinerary}/>
                    <img src={photo}/>
                </div>
                :   
                null
            }
        </div>
    )
}

export default MainPage