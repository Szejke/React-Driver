import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDeviceAction, updateDeviceAction } from 'redux/actions/devices';
import Button from 'components/atoms/Buttons/Button';
import styled from 'styled-components/macro';
import { getDevice } from 'redux/selector/device';
import { H1, P } from 'components/atoms/Paragraphs/Paragraphs';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundBar};
  padding: 2%;
  flex-direction: column;
`;

const Styledh1 = styled(H1)`
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledCheck = styled(Form.Check)`
  label {
    padding-left: 1rem;
  }
`;

const StyledSpan = styled.span`
  color: red;
  font-weight: blod;
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
  const { t } = useTranslation();
  const [editDevice, setEditDevice] = useState('');
  const { length } = devices;
  const { handleSubmit, register, errors } = useForm();

  useEffect(() => {
    if (deviceId) {
      setEditDevice(devices.find((e) => e._id === deviceId));
    } else {
      setEditDevice('');
    }
  }, [deviceId]);

  useEffect(() => {
    if (!deviceId) {
      setEditDevice('');
    }
  }, [deviceId]);

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
      <Styledh1> {deviceId ? t('editDevice') : t('createNewDevice')}</Styledh1>

      {loading && <P>{t('Loading')}</P>}
      {length === 0 && !loading && <P>{t('noDevicesAvailable')}</P>}
      {error && !loading && <P>{error}</P>}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label>{t('deviceName')}</Form.Label>
          <Form.Control
            name="name"
            ref={register({ required: true, maxLength: 30 })}
            size="lg"
            type="text"
            defaultValue={editDevice.name || ''}
            placeholder={t('enterDeviceName')}
          />
          {errors.name && errors.name.type === 'required' && (
            <StyledSpan role="alert">{t('isRequired')}</StyledSpan>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <StyledSpan role="alert">{t('maxLengthExceeded')}</StyledSpan>
          )}
          <Form.Text className="text-muted">{t('max30Characters')}</Form.Text>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>{t('description')}</Form.Label>
          <Form.Control
            name="description"
            ref={register()}
            as="textarea"
            size="lg"
            rows={3}
            type="text"
            defaultValue={editDevice.description || ''}
            placeholder={t('description')}
          />
        </Form.Group>
        <Form.Group controlId="disabled">
          <StyledCheck
            name="disabled"
            className="form-control"
            ref={register()}
            type="checkbox"
            label={t('turnDisableDevice')}
            defaultChecked={editDevice.disabled || false}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {t('Submit')}
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
