import { Container, Row, Col } from 'react-bootstrap';

import Logo from "../assets/LOGO 1.jpg";

export default function Footer() {
  return (
    <div className='bg-light'>
        <Container className='text-center pt-5 mt-5' style={{fontSize:"10px"}}>
            <Row>
                <Col>
                    <p>
                        Beautiful Home Store Ltda. <br />
                        Rua do Comércio, 1234 Cidade Linda-RS CEP: 91234-567
                        <br />
                        Beautiful.home@bh-store.com <br />
                        (51)4000-0001 | (51)9999-9999
                    </p>
                </Col>

                <Col>
                    <img
                        src={Logo}
                        alt="Home Store"
                        width={150}
                       style={ {   borderTopLeftRadius : "50%" ,
                            BorderTopRightRadius: "50%",
                            BorderBottomRightRadius:"50%",
                            BorderBottomLeftRadius: "50%"}}     />
                </Col>
            </Row>
            <p className='py-4'>© 2021 Vanessa Vargas. Todos os direitos reservados.</p>
    </Container>



        
    </div>    
  );
};