import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

storiesOf('organisms/Header', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Header', () => {
    return <Header />;
  });
