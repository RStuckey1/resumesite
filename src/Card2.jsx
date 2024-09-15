import profilePic from './assets/Profilepic2.jpg'

function Card(){
    return(
        <div className="card2">
            <img className="card-image2" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title2'>RDG20 App</h2>
            <p className='card-text2'>App for rolling D20</p>
        </div>
    );

}

    export default Card;