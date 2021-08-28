import { html, TemplateResult } from 'lit';
import '../src/video-courses.js';

export default {
  title: 'VideoCourses',
  component: 'video-courses',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <video-courses style="--video-courses-background-color: ${backgroundColor}" .title=${title}></video-courses>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
