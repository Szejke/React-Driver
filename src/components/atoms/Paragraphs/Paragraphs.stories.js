import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, P } from './Paragraphs';

storiesOf('atoms/Paragraphs', module).add('H1', () => {
  return <H1>text</H1>;
});

storiesOf('atoms/Paragraphs', module).add('P', () => {
  return <P>text</P>;
});
