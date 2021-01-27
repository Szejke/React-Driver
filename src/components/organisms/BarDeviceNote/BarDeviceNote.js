import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDeviceAction } from 'redux/actions/devices';
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

const BarDeviceNote = ({ deviceId, createDevice }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values, e) => {
    const form = {
      ...values,
    };
    createDevice(form);
    e.target.reset();
  };

  const text = editStae({ deviceId });
  return (
    <StyledWrapper>
      <Styledh1> {text.title} </Styledh1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Device Name</Form.Label>
          <Form.Control
            name="name"
            ref={register()}
            size="lg"
            type="text"
            placeholder="Enter Device Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            ref={register()}
            as="textarea"
            size="lg"
            rows={3}
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <StyledCheck
            name="disabled"
            ref={register()}
            type="checkbox"
            label="Turn or Disable Device"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Device
        </Button>
      </Form>
    </StyledWrapper>
  );
};

const mapDispathToProps = (dispatch) => ({
  createDevice: (contentDevice) => dispatch(createDeviceAction(contentDevice)),
});

BarDeviceNote.propTypes = {
  deviceId: PropTypes.string,
  createDevice: PropTypes.func,
};

BarDeviceNote.defaultProps = {
  deviceId: '',
  createDevice: {},
};

export default connect(null, mapDispathToProps)(BarDeviceNote);
