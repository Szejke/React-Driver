import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Home from './Home';

storiesOf('views/Home', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Home', () => {
    return <Home />;
  });
