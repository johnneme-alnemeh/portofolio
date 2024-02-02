import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{backgroundColor: "#121212"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>You can also get connected with me on social networks:</span>
        </div>

        <div>

          <a href="https://linkedin.com/in/john-al-nemeh-41b4642ab" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>

          <a href="https://github.com/johnneme-alnemeh" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="fas fa-j" className="me-1" />
                <MDBIcon icon="fas fa-n" className="me-3" />
                John Al-Nemeh
              </h6>
              
              <p>
                I am 23 years old, graduated from AIU in Syria, and i recently relocated to Abu Dhabi, UAE.
              I am a hard worker, trying to keep up with new features in Reactjs and Artificial Intelligence.  
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Key Skills</h6>
              <p>
                <MDBIcon className="fab fa-react" style={{paddingRight: "5px"}} />
                React
              </p>
              <p>
                <MDBIcon className="fab fa-js" style={{paddingRight: "5px"}} />
                Javascript
              </p>
              <p>
                <MDBIcon className="fab fa-python" style={{paddingRight: "5px"}} />
                Python
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Info</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Abu Dhabi, UAE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                john.alneme@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +971 50 4087731
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}> 
      </div>
    </MDBFooter>
  );
}