import React from 'react'
import styled from 'styled-components'
import Portal from './Portal'
import Icon from './Utilities/Icon'

const Modal = ({
		on,
		toggle,
		children,
	}) => (
	<Portal>
		{on &&
			<ModalWrapper>
				<ModalCard>
					<CloseButton onClick={toggle}>
						<Icon
							name="close"
							color='#09d3ac'
						/>
					</CloseButton>
					<div>{children}</div>
				</ModalCard>
				<Background onClick={toggle} />
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
	display: flex;
	align-items: center;
	justify-content: center;
`

const ModalCard = styled.div`
	position: relative;
	padding: 1rem;
	min-width: 320px;
	background: white;
	border-radius: 5px;
	margin-bottom: 100px;
	box-shadow: 2px 2px 20px rgba(0,0,0, 0.3);
	z-index: 10;
`
const CloseButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	padding: 1rem;
	background: transparent;
`

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: black;
	opacity: 0.3;
`

export default Modal
