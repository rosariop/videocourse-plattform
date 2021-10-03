import { html, TemplateResult } from 'lit';
import '../src/components/Navigation.js';

// props here
export default {
  title: 'Navigation',
  component: 'vid-navigation',
  argTypes: {
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
 // props come here
}

const Template: Story<ArgTypes> = () => html`
  <vid-navigation></vid-navigation>
`;

export const App = Template.bind({});
App.args = {
  
};
