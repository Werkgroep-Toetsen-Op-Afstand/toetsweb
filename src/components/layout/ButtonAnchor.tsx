import {AnchorHTMLAttributes, FunctionComponent, ReactNode} from "react";
import {ClassBuilder} from "../../utils/ClassBuilder";
import {LinkProps, NavLink} from 'react-router-dom'

interface Props {
	variant?: 'primary' | 'styless'
	children: ReactNode | ReactNode[]
}

interface LocalProps extends Omit<LinkProps, 'children'>, Props {
}

export const LocalButtonAnchor: FunctionComponent<LocalProps> = ({variant = 'primary', className, children, ...rest}) => {

	const classNames = new ClassBuilder('button-anchor')
		.add(`button-anchor--${variant}`)
		.addIf(className, className)
		.build();

	const hasMultipleChildren = children instanceof Array;

	return (
		<NavLink className={classNames} {...rest}>
			{
				hasMultipleChildren
					? <div className={'button-anchor--content'}>{children}</div>
					: children
			}
		</NavLink>
	)
}

interface ExternalProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>, Props {
}

export const ExternalButtonAnchor: FunctionComponent<ExternalProps> = ({variant = 'primary', className, children, ...rest}) => {

	const classNames = new ClassBuilder('button-anchor')
		.add(`button-anchor--${variant}`)
		.add(`button--text-medium`)
		.addIf(className, className)
		.build();

	const hasMultipleChildren = children instanceof Array;

	return (
		<a className={classNames} {...rest}>
			{
				hasMultipleChildren
					? <div className={'button-anchor--content'}>{children}</div>
					: children
			}
		</a>
	)
}
