import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Buttons/Button';
import { editStae } from 'components/organisms/SetDeviceNote/SetDeviceNote';

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

const NewDeviceNote = ({ deviceId }) => {
  const text = editStae({ deviceId });
  return (
    <StyledWrapper>
      <Styledh1> {text.title} </Styledh1>
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

NewDeviceNote.propTypes = {
  deviceId: PropTypes.string,
};

NewDeviceNote.defaultProps = {
  deviceId: '',
};

export default NewDeviceNote;
