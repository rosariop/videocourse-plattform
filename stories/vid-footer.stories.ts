import { html, TemplateResult } from 'lit';
import '../src/components/Footer.js';

// props here
export default {
  title: 'Footer'
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
  <vid-footer></vid-footer>
`;

export const Footer = Template.bind({});
Footer.args = {
  
};
