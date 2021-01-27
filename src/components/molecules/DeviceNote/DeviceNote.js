import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { LightningFill, Lightning, XCircleFill, PencilFill } from 'react-bootstrap-icons';
import IconButton from 'components/atoms/Buttons/IconButton';

const StyledWrapper = styled.div`
  display: flex;
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

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledEditIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

const DeviceNote = ({ id, name, description, disabled, removePerson, editState }) => {
  return (
    <StyledWrapper>
      <StyledParagraphs>
        <StyledH1>{name}</StyledH1>
        <p>{description}</p>
        {disabled ? (
          <LightningFill fill data-testid="iconTrue" size={48} />
        ) : (
          <Lightning data-testid="iconFalse" size={48} />
        )}
      </StyledParagraphs>
      <StyledEditIcon>
        <IconButton onClick={() => editState({ id })}>
          <PencilFill size={48} />
        </IconButton>
        <IconButton onClick={() => removePerson({ id })}>
          <XCircleFill size={48} />
        </IconButton>
      </StyledEditIcon>
    </StyledWrapper>
  );
};

DeviceNote.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  removePerson: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
};

export default DeviceNote;
