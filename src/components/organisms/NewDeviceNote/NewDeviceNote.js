import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'components/atoms/Buttons/Button';

import styled from 'styled-components/macro';

const StyledWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2%;
  flex-direction: column;
`;

const Styledh1 = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledCheck = styled(Form.Check)`
  label {
    padding-left: 1rem;
  }
`;

const NewPersonBar = () => {
  return (
    <StyledWrapper>
      <Styledh1> Create New Device </Styledh1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Device Name</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter Device Name" />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" size="lg" rows={3} type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <StyledCheck type="checkbox" label="Turn or Disable Device" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Device
        </Button>
      </Form>
    </StyledWrapper>
  );
};

// NewPersonBar.propTypes = {
//   handleClose: PropTypes.func.isRequired,
//   addPerson: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   addPerson: (itemContent) => dispatch(addPersonAction(itemContent)),
// });

export default // connect(null, mapDispatchToProps)
NewPersonBar;
