import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

export default (props) => {
  return (
    <div>
      <a name="about"></a>
      <div className="intro-header">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="intro-message">
                  <h1>Jass-Challenge</h1>
                  <h3>Description of Jass-Challenge</h3>
                  <hr className="intro-divider" />
                  <Button className="transparent">Sign Up Here</Button>
                  <Button className="transparent">More Information</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
