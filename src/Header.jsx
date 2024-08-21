import BobRoss from './assets/bobross.jpg'
import Email from './assets/email.png'
import LinkedIn from './assets/linkedin.png'

export default function Header(){
    return(
        <>
            <div className="pictureOfRoss">
                <img src={BobRoss}  alt="Bob Ross" />
            </div>
            <div className='header'>
                <h1>Bob Ross</h1>
                <h3>Artist and Television Host</h3>
                <a href="https://www.bobross.com/" target="_blank" rel="noopener noreferrer">
                    bobross.com
                </a>        
                <div className="buttons">
                    <button className='email' onClick={() => window.location.href = "mailto:someone@example.com"}><img className='email--icon'src={Email}  alt="Email"></img>Email</button>
                    <button className='linkedin' onClick={() => window.location.href = "https://www.linkedin.com/in/yourprofile"}><img className='linkedin--icon'src={LinkedIn}  alt="Email"></img>LinkedIn</button>
                </div>
            </div>
        </>
    )
}