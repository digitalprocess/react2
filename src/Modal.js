import React from 'react'
import styled from 'styled-components'
import Portal from './Portal'

const Modal = ({
		on,
		toggle,
		children,
	}) => (
	<Portal>
		{on &&
			<ModalWrapper>
				<button onClick={toggle}>Close</button>
				{children}
			</ModalWrapper>
		}
	</Portal>
)

const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: teal;
`
export default Modal
