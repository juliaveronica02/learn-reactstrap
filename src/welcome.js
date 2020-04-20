import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Button,
  Table
} from "reactstrap";
const styles = {
  container: {
    background: "cyan"
  },
  section: {
    padding: "50px 0"
  },
  row: {
    background: "red"
  },
  col: {
    background: "orange"
  }
};
export default ({ onClick }) => (
  <div onClick={onClick}>
    <div style={styles.container}>
      <Container>
        <p>Welcome to Reactstrap App. Just a hello world sort of thing</p>
        <div style={styles.section}>Direct Div</div>
        <div style={styles.section}>
          Within a container if you declare a Row, you must follow it up with a
          Col
        </div>
        <Row style={styles.row}>
          <Col style={styles.col}>Row > Col 1</Col>
          <Col>Col 2</Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row style={styles.section}>
        <Col>
          <Card>
            <CardBody>
              <p>Card > CardBody > Buttons</p>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <Table>
              <thead bordered>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);
