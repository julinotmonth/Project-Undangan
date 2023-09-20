import '../App.css'
import '../index.css'  
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentThree () {
    return (
        <div style={{marginLeft: '5%', marginRight: '5%'}}>
           <Container>
                 <Row style={{marginBottom: '20px'}}>
                    <Col style={{border: '2px solid #EEC373', textAlign: 'center', borderRadius: '10px', padding: '10px', marginRight: '10px'}}>
                            <span style={{color: 'white', fontSize: '20px', color: '#EEC373', marginLeft: '1px'}}>0</span>
                            <span style={{color: 'white', display: 'block', fontSize: '10px', color: '#EEC373', marginTop: '-6px'}}>Hari</span>
                        </Col>
                        <Col style={{border: '2px solid #EEC373', textAlign: 'center', borderRadius: '10px', padding: '10px', marginRight: '10px'}}>
                            <span style={{color: 'white', fontSize: '20px', color: '#EEC373', marginLeft: '1px'}}>0</span>
                            <span style={{color: 'white', display: 'block', fontSize: '10px', color: '#EEC373', marginTop: '-6px'}}>Jam</span>
                        </Col>
                        <Col style={{border: '2px solid #EEC373', textAlign: 'center', borderRadius: '10px', padding: '10px', marginRight: '10px'}}>
                            <span style={{color: 'white', fontSize: '20px', color: '#EEC373', marginLeft: '1px'}}>0</span>
                            <span style={{color: 'white', display: 'block', fontSize: '10px', color: '#EEC373', marginTop: '-6px'}}>Menit</span>
                        </Col>
                        <Col style={{border: '2px solid #EEC373', textAlign: 'center', borderRadius: '10px', padding: '10px'}}>
                            <span style={{color: 'white', fontSize: '20px', color: '#EEC373', marginLeft: '1px'}}>0</span>
                            <span style={{color: 'white', display: 'block', fontSize: '10px', color: '#EEC373', marginTop: '-6px'}}>Detik</span>
                        </Col>
                    </Row>
                    <p style={{fontSize: '20px', color: '#EEC373', fontWeight: '600', marginBottom: '0', textAlign: 'center'}} className='content'>18 Mei 2023</p>   
         </Container>
     </div>
    )
}
export default ContentThree