import { Button } from '../components/button/Button';

export default {
	title: 'Bulma/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		label: 'Button',
	},
	argTypes: {},
};

export const Default = {
	args: {
		label: 'Button',
	},
};

export const Colors = (args) => (
	<div className="buttons">
		<Button color="white" {...args} />
		<Button color="light" {...args} />
		<Button color="dark" {...args} />
		<Button color="black" {...args} />
		<Button color="text" {...args} />
		<Button color="ghost" {...args} />
		<Button color="primary" {...args} />
		<Button color="link" {...args} />
		<Button color="info" {...args} />
		<Button color="success" {...args} />
		<Button color="warning" {...args} />
		<Button color="danger" {...args} />
	</div>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Sizes = (args) => (
	<div className="buttons">
		<Button size="small" {...args} />
		<Button size="normal" {...args} />
		<Button size="medium" {...args} />
		<Button size="large" {...args} />
	</div>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
