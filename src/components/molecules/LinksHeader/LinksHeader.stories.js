import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import LinksHeader from './LinksHeader';

storiesOf('molecules/LinksHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('LinksHeader', () => {
    return <LinksHeader />;
  });
