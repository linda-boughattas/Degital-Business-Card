import BobRoss from './assets/bobross.jpg'

export default function Header(){
    return(
        <>
        <img src={BobRoss} className="pictureOfRoss" alt="Bob Ross" />
        <h1>Bob Ross</h1>
        <h3>Artist and Television Host</h3>
        <a href="https://www.bobross.com/" target="_blank" rel="noopener noreferrer">
            bobross.com
        </a>        
        <div className="buttons">
            <button onClick={() => window.location.href = "mailto:someone@example.com"}>Email</button>
            <button onClick={() => window.location.href = "https://www.linkedin.com/in/yourprofile"}>LinkedIn</button>
        </div>
        </>
    )
}