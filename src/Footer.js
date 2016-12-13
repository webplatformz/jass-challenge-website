import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default (props) => {
  return (
    <footer>
      <div className="container">
        <Row>
            <Col lg={12}>
            <p className="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>
            </Col>
        </Row>
      </div>
    </footer>
  );
}
