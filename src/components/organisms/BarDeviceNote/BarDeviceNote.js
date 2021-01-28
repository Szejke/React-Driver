import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDeviceAction, updateDeviceAction } from 'redux/actions/devices';
import Button from 'components/atoms/Buttons/Button';
import styled from 'styled-components/macro';
import { getDevice } from 'redux/selector/device';
import { barText, editeState } from './HelperDeviceNote';

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

const BarDeviceNote = ({
  toogle,
  deviceId,
  createDevice,
  updateDevice,
  devices,
  loading,
  error,
}) => {
  const [editDevice, setEditDevice] = useState([]);
  const { length } = devices;

  const text = barText(editeState(deviceId));

  useEffect(() => {
    if (deviceId) {
      setEditDevice(devices.find((e) => e._id === deviceId));
    } else {
      setEditDevice([]);
    }
  }, [deviceId]);

  const { handleSubmit, register, errors } = useForm();
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
      <Styledh1> {text.title} </Styledh1>

      {loading && <p>Loading...</p>}
      {length === 0 && !loading && <p>No devices available!</p>}
      {error && !loading && <p>{error}</p>}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Device Name</Form.Label>
          <Form.Control
            name="name"
            ref={register({ required: true, maxLength: 30 })}
            size="lg"
            type="text"
            defaultValue={editDevice.name}
            placeholder="Enter Device Name"
          />
          {errors.name && errors.name.type === 'required' && (
            <span role="alert">This is required</span>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <span role="alert">Max length exceeded</span>
          )}
          <Form.Text className="text-muted">Max 30 Characters</Form.Text>
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
            ref={register({ required: true })}
            type="checkbox"
            label="Turn or Disable Device"
            defaultChecked={editDevice.disabled}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {text.buttonName}
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
  const { devices, loading, error } = getDevice(state);
  return { devices, loading, error };
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
  loading: PropTypes.bool,
  error: PropTypes.string,
};

BarDeviceNote.defaultProps = {
  deviceId: '',
  createDevice: {},
  updateDevice: {},
  toogle: {},
  devices: [],
  loading: false,
  error: '',
};

export default connect(mapStateToProps, mapDispathToProps)(BarDeviceNote);
