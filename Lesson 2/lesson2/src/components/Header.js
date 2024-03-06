import './Header.css'
import styles from './Header.module.css'

function Header ()
{
    const myStyle = {
        color:'red',fontSize:'50px',textAlign:'center',border:'1px solid black',padding:'10px',margin:'10px',borderRadius:'10px',backgroundColor:'yellow',boxShadow:'5px 5px 5px black',textShadow:'2px 2px 2px black',fontFamily:'cursive',textTransform:'uppercase',letterSpacing:'5px',wordSpacing:'10px'
    }
    return(
        <>
        {/* <h1 style={myStyle}>Hello Style</h1> */}
        <h1 className={styles.bigBlue}>Hello Style</h1>
        <p>Add some style</p>
        </>
    )
}

export default Header