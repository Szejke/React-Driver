import React from 'react';
import { storiesOf } from '@storybook/react';
import LogoImage from 'assets/Logo.png';
import Logo from './Logo';

storiesOf('atoms/Logo', module)
  .add('Logo', () => {
    return <Logo src={LogoImage} />;
  });
