import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Button({
	label,
	type,
	url,
	rounded,
	outlined,
	inverted,
	light,
	disabled,
	onClick,
	...options
}) {
	const style = [
		...Object.values(options),
		rounded ? 'rounded' : undefined,
		inverted ? 'inverted' : undefined,
		outlined ? 'outlined' : undefined,
		light ? 'light' : undefined,
	]
		.map((value) => (value ? `is-${value}` : undefined))
		.filter((v) => !!v);

	const props = {
		disabled,
		onClick,
	};
	switch (type) {
		case 'link':
			return (
				<a {...props} href={url} className={clsx('button', ...style)}>
					{label}
				</a>
			);
		case 'static':
			return (
				<span className={clsx('button is-static', ...style)}>{label}</span>
			);
		default:
			return (
				<button {...props} type={type} className={clsx('button', ...style)}>
					{label}
				</button>
			);
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string,
	type: PropTypes.oneOf(['link', 'static', 'button', 'submit']),
	rounded: PropTypes.bool,
	outlined: PropTypes.bool,
	inverted: PropTypes.bool,
	light: PropTypes.bool,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf([
		'white',
		'light',
		'dark',
		'black',
		'text',
		'ghost',
		'primary',
		'link',
		'info',
		'success',
		'warning',
		'danger',
	]),
	size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
	display: PropTypes.oneOf(['responsive', 'fullwidth']),
	onClick: PropTypes.func,
};

Button.defaultProps = {
	type: 'button',
	url: undefined,
	rounded: false,
	outlined: false,
	inverted: false,
	light: false,
	disabled: false,
	color: undefined,
	size: 'normal',
	display: undefined,
	onClick: undefined,
};
