import {ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactNode} from "react";
import {ClassBuilder} from "../../utils/ClassBuilder";

interface Props extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'children'> {
	variant?: "primary" | "styless"
	textSize?: "small" | "medium" | "large"
	children: ReactNode | ReactNode[]
}

const Button: FunctionComponent<Props> = ({variant = 'primary', textSize = 'medium', className, children, ...rest}) => {

	const classNames = new ClassBuilder('button')
		.add(`button--${variant}`)
		.add(`button--text-${textSize}`)
		.addIf(className, className)
		.build();

	const hasMultipleChildren = children instanceof Array;

	return (
		<button className={classNames} {...rest}>
			{
				hasMultipleChildren
					? <div className={'button--content'}>{children}</div>
					: children
			}
		</button>
	)
}

export default Button;
