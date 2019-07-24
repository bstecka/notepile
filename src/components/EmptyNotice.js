import React from 'react';
import { Paragraph } from 'grommet';

function EmptyNotice() {
  return (
    <div>
    <Paragraph textAlign="center" color="brand" size="xxlarge">Empty Pile</Paragraph>
    <Paragraph textAlign="center" color="brand" size="large">Use the NotePile extension on a text selection to create notes.</Paragraph>
    </div>
  );
}

export default EmptyNotice;
