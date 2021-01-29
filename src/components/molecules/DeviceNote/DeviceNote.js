import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeDeviceAction } from 'redux/actions/devices';
import styled from 'styled-components/macro';
import { Lightbulb, LightbulbOff, XCircleFill, PencilFill } from 'react-bootstrap-icons';
import IconButton from 'components/atoms/Buttons/IconButton';
import { H1, P } from 'components/atoms/Paragraphs/Paragraphs';

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.note};
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  padding: 2%;
  max-width: 70rem;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledParagraphs = styled.div`
  display: inline-block;
  word-break: break-word;
  margin-left: 30px;
`;

const StyledH1 = styled(H1)`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledEditIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

const DeviceNote = ({ id, name, description, disabled, removeDevice, editState }) => {
  return (
    <StyledWrapper>
      <StyledParagraphs>
        <StyledH1>{name}</StyledH1>
        <P>{description}</P>
        {disabled ? (
          <Lightbulb data-testid="iconTrue" size={48} />
        ) : (
          <LightbulbOff data-testid="iconFalse" size={48} />
        )}
      </StyledParagraphs>
      <StyledEditIcon>
        <IconButton onClick={() => editState({ id })}>
          <PencilFill size={48} />
        </IconButton>
        <IconButton onClick={() => removeDevice({ id })}>
          <XCircleFill size={48} />
        </IconButton>
      </StyledEditIcon>
    </StyledWrapper>
  );
};

const mapDispathToProps = (dispatch) => ({
  removeDevice: (id) => dispatch(removeDeviceAction(id)),
});

DeviceNote.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  removeDevice: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(DeviceNote);
