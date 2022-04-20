import Picture from './Picture.png'

function Header(){

    return(
        <div>
            <h1>Garrett Dick</h1>
            <img id='me'src={Picture}/>
        </div>
    )
}

export default Header