import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDeviceAction, updateDeviceAction } from 'redux/actions/devices';
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

const BarDeviceNote = ({ toogle, deviceId, createDevice, updateDevice, devices }) => {
  const [editDevice, setEditDevice] = useState([]);

  useEffect(() => {
    if (deviceId) {
      setEditDevice(devices.find((e) => e._id === deviceId));
    } else {
      setEditDevice([]);
    }
  }, [deviceId]);

  const { handleSubmit, register } = useForm();
  const onSubmit = (values, e) => {
    const form = {
      ...values,
    };
    if (deviceId) {
      updateDevice(deviceId, form);
    } else {
      createDevice(form);
    }
    toogle();
    e.target.reset();
  };
  return (
    <StyledWrapper>
      <Styledh1> hello </Styledh1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Device Name</Form.Label>
          <Form.Control
            name="name"
            ref={register()}
            size="lg"
            type="text"
            defaultValue={editDevice.name}
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
            defaultValue={editDevice.description}
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <StyledCheck
            name="disabled"
            ref={register()}
            type="checkbox"
            label="Turn or Disable Device"
            defaultChecked={editDevice.disabled}
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
  updateDevice: (id, contentDevice) => dispatch(updateDeviceAction(id, contentDevice)),
});

const mapStateToProps = (state) => {
  const { devices } = state.devices;
  return { devices };
};

BarDeviceNote.propTypes = {
  deviceId: PropTypes.string,
  createDevice: PropTypes.func,
  updateDevice: PropTypes.func,
  toogle: PropTypes.func,

  devices: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      disabled: PropTypes.bool.isRequired,
    }),
  ),
};

BarDeviceNote.defaultProps = {
  deviceId: '',
  createDevice: {},
  updateDevice: {},
  toogle: {},
  devices: [],
};

export default connect(mapStateToProps, mapDispathToProps)(BarDeviceNote);
