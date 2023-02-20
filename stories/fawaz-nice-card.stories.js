import { html } from 'lit';
import '../src/fawaz-nice-card.js';

export default {
  title: 'FawazNiceCard',
  component: 'fawaz-nice-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <fawaz-nice-card
      style="--fawaz-nice-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </fawaz-nice-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
