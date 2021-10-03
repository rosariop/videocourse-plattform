import { html, TemplateResult } from 'lit';
import '../src/components/Card.js';

// props here
export default {
  title: 'Card',
  component: 'vid-card',
  argTypes: {
    title: 'lorem ipsum dolorem',
    sale: false,
    price: 99.99,
    purchased: false
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  sale?: boolean;
  price?: number;
  purchased?: boolean;
}

const Template: Story<ArgTypes> = ({ title, sale, price, purchased }: ArgTypes) => html`
  <vid-card .sale=${sale} .price=${price} .title=${title} .purchased=${purchased}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  </vid-card>
`;

export const App = Template.bind({});
App.args = {
  title: 'Lorem ipsum dolor',
  price: 420.69,
  sale: false,
  purchased: false
};
