import React from 'react';
import styled from 'styled-components/macro';
import ListDeviceNotes from 'components/organisms/ListDeviceNotes/ListDeviceNotes';

const StyledWrapper = styled.div`
  margin-top: 20px;
`;

const devices = [
  {
    _id: '0',
    name: 'asd',
    description: 'asd',
    disabled: true,
  },
  {
    _id: '2',
    name: 'asd',
    description: 'sdf',
    disabled: false,
  },
];

const Home = () => {
  return (
    <StyledWrapper>
      <ListDeviceNotes devices={devices} />;
    </StyledWrapper>
  );
};

export default Home;
