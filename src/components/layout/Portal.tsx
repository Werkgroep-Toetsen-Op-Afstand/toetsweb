import {FunctionComponent, useState, cloneElement, ReactElement} from 'react'
import {createPortal} from 'react-dom'

interface Props {
	trigger: ReactElement
	children: any
	onClick?: () => void
}

export const Portal: FunctionComponent<Props> = ({ trigger, children, onClick }) => {
	const [show, setShow] = useState(false)

	const updatedTrigger = cloneElement(trigger, {
		onMouseEnter: () => setShow(true),
		onMouseLeave: () => setShow(false),
		onClick: onClick,
	})

	return (
		<>
			{updatedTrigger}
			{show &&
				createPortal(
					children,
					document.getElementById('modal-root') as HTMLElement,
				)}
		</>
	)
}
