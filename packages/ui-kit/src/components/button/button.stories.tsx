import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI-Kit/Button',
};
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div className="flex flex-col justify-center items-center gap-10">
      <Button size="sm">Game Button</Button>
      <Button>Game Button</Button>
      <Button size="lg">Game Button</Button>
      <Button variant="rounded">Game Button</Button>
      <Button color="red">Game Button</Button>
      <Button color="red" variant="rounded">
        Game Button
      </Button>
      <Button color="orange">Game Button</Button>
      <Button color="green" variant="rounded">
        Game Button
      </Button>
      <Button as="p" color="orange" variant="rounded">
        Game Button
      </Button>
    </div>
  ),
};
export default meta;
