import React from 'react'

function OtherGames(){

  return (
    <article className="jr">
      <h2 className="jr mt-0">Other Games</h2>

      <article className="jr card p-2">
        <h3 className="jr mt-0">LEGEND OF COLORS</h3>

        <div className="jr p-1 flex-row evenly">
          <div className="jr flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNDg2ODcwLzI1MTQ0MjYucG5n/347x500/0rlOZT.png" alt="Legend Of Colors Title Screeny"></img>
          </div>
          <div className="jr flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNDg2ODcwLzI1MTQ0MTAucG5n/347x500/6k62y3.png" alt="Legend Of Colors GamePlay"></img>
          </div>
        </div>

        <p>An Action- Adventure game in the RGB colors world. Made for Godot Wild Jam.</p>

        <p>A evil creature stole all the colors from our hero world. You need to help him deafeat the ultimate vilain and recorver the colors for the world.</p>

        <a className="jr button mt-1" target="_blank" href="https://www.newgrounds.com/portal/view/738808">PLAY LEGEND OF COLORS</a>
         
      </article>


      <article className="jr card mt-15 p-2">
        <h3 className="jr mt-0">LIFE GUARD</h3>

        <div className="jr p-1 flex-row evenly">
          <div className="jr p-1  flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNjg0NTI5LzM3NjU5MjgucG5n/original/F%2F8hHw.png" alt="Life Guard Gameplay"></img>
          </div>
          <div className="jr p-1  flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNjg0NTI5LzM3NjU5MjkucG5n/original/3kaeJb.png" alt="Life Guard GamePlay"></img>
          </div>
        </div>

        <p>A space shooter arcade game.</p>

        <p>This is a simple space shooter arcade game I was doing for a Game Jam.</p>

        <a className="jr button mt-1" target="_blank" href="https://lufemas.itch.io/life-guard">PLAY LIFE GUARD</a>
         
      </article>

      
      <article className="jr card mt-15 p-2">
        <h3 className="jr mt-0">DASH GRABBER</h3>

        <div className="jr p-1 flex-row evenly">
          <div className="jr p-1  flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNjg0NTgwLzM3NjYxNzIucG5n/original/5BJ9dw.png" alt="Dash Grabber Gameplay"></img>
          </div>
          <div className="jr p-1  flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNjg0NTgwLzM3NjYxNzMucG5n/original/5cbkBq.png" alt="Dash Grabber Gameplay"></img>
          </div>
          <div className="jr p-1  flex-col center">
            <img className="jr img" src="https://img.itch.zone/aW1hZ2UvNjg0NTgwLzM3NjYxNzQucG5n/original/gchH1U.png" alt="Dash Grabber Gameplay"></img>
          </div>
        </div>
        <div className="jr flex-row center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/h7GtG2mRhp0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <p>Just Dash and Grab.</p>

        <p>Very fun game made with Godot 3.2. The gameplay was aimed to smartphones, but I found out it's very fun with a mouse too.</p>

        <p>IN DEVELOPMENT</p>
         
      </article>

      <article className="jr card mt-15 p-2">
        <h3 className="jr mt-0">RPG ENGINE Prototype</h3>

        <div className="jr p-1 flex-row evenly">
          <div className=" p-1 flex-col center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/plILqG2lLhk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="jr p-1  flex-col ">
            <img className="jr img" src="https://img.itch.zone/aW1nLzM3NjYxODcucG5n/original/8gG53d.png" alt="RpgEngine Title image"></img>
          </div>
        </div>
        

        <p>A prototype of a RPG Engine for old school like RPG Game. Made with Godot 3.2</p>

        <p>IN DEVELOPMENT</p>
         
      </article>


    </article>
  )
}

export default OtherGames;