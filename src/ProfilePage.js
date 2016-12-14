import React from 'react';

import { ListGroup, ListGroupItem, Button, FormGroup, FormControl, Form, ControlLabel } from 'react-bootstrap';

import './LoginPage.css';

export default (props) => {
  return (
    <div>
      <div className="content-section-b">
          <div className="container">
            <h3>
              My Repos
              <Button className="pull-right">Add Repo</Button>
            </h3>
            <hr/>

            <Form inline>
              <FormGroup controlId="formInlineName">
                <FormControl type="url" placeholder="http://" />
              </FormGroup>
              <Button type="submit">Add</Button>
              <Button type="submit">Cancel</Button>
            </Form>
            <hr/>

            <ListGroup>
              <ListGroupItem href="#">
                <Button className="pull-right">remove</Button>
                <div className="clearfix">https://github.com/profile/myrepo1</div>
              </ListGroupItem>
              <ListGroupItem href="#">
                <Button className="pull-right">remove</Button>
                <div className="clearfix">https://github.com/profile/myrepo2</div>
              </ListGroupItem>
            </ListGroup>
            <h3>My Bots / Logs / Games</h3>
            <hr/>
          </div>
      </div>
    </div>
  );
}
