import Image from 'react-bootstrap/Image';
import '../App.css'
import '../index.css'  
import { Container } from 'react-bootstrap';

function ContentTwo () {
    return (
        <div style={{backgroundColor: 'black', marginLeft: '5%', marginRight: '5%'}}>
          <Container>
            <div>
                <div style={{height: '100vh'}}>s</div>
                <h1 style={{textAlign: 'center', marginBottom: '20px'}} className='title'>Joko & Inge</h1>
                <p style={{color: '#F4DFBA', textAlign: 'center', marginBottom: '20px', fontWeight: '600', fontSize: '15px'}} className='content'>Kami akan menikah, dan kami ingin Anda menjadi bagian dari hari istimewa kami!</p>
            </div>
           </Container>
        </div>
    ) 
}

export default ContentTwo;