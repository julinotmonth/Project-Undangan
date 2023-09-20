import { Link } from 'react-router-dom';
import '../App.css'
import '../index.css'   
import { Container } from 'react-bootstrap';

function Cover () {
    return (
       <div className='App' style={{height: '100vh', display: 'flex', backgroundColor: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
         <Container>
          <p style={{margin: '0', fontSize: '35px'}} className='title'>Joko & Inge</p>
          <p style={{margin: '20px 0px 0px 0px', color: '#F4DFBA', fontSize: '15px'}} className='content'>Kpd Bpk/Ibu/Saudara/i</p>
          <p style={{margin: '20px 0px 0px 0px', color: 'white', fontSize: '15px'}} className='content_2'>Utul umik</p>
          <p style={{margin: '20px 0px 0px 0px', color: '#F4DFBA', fontSize: '13px'}}>Tanpa mengurangi rasa hormat, kami mengundang anda untuk berhadir di acara pernikahan kami.</p>
         <Link to='/Content'>
          <button style={{width: '173.44px', height: '41px', fontSize: '15px', borderRadius: '5px'}} className='tombol'>Buka Undangan</button>
         </Link> 
         </Container>
       </div>
    );
}

export default Cover;