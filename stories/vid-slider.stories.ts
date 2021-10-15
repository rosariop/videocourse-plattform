import { html, TemplateResult } from 'lit';
import '../src/components/Slider.js';

// props here
export default {
  title: 'Slider'
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
 // props come here
 interval: number
}

const Template: Story<ArgTypes> = ({interval}: ArgTypes) => html`
  <vid-slider .interval=${interval}></vid-slider>
`;

export const Slider = Template.bind({});
Slider.args = {
  interval: 0
};
