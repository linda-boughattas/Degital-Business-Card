import Twitter from './assets/Twitter Icon.png'
import Facebook from './assets/Facebook Icon.png'
import Instagram from './assets/Instagram Icon.png'
import Youtube from './assets/Youtube icon.png'

export default function Footer(){
    return(
        <>
        <ul>
            <a href="https://twitter.com/bobrossofficial" >
            <img src={Twitter} className="logo" alt="Twitter logo" />
            </a>
            <a href="https://www.facebook.com/TheJoyofPaintingWithBobRoss/" >
            <img src={Facebook} className="logo" alt="Facebook logo" />
            </a>
            <a href="https://www.instagram.com/bobross_thejoyofpainting/" >
            <img src={Instagram} className="logo" alt="Instagram logo" />
            </a>
            <a href="https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ" >
            <img src={Youtube} className="logo" alt="Youtube logo" />
            </a>
        </ul>
        </>
    )
}