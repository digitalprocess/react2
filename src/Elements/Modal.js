import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops'
import styled from 'styled-components';

import Icon from './Icon';
import { Card } from './Cards';
import { Portal, absolute } from 'Utilities';

export default class Modal extends Component {
	render() {
		const { children, toggle, on } = this.props;
		return (
			<Portal>
				<Transition
					items={on}
					unique={true}
					from={{ opacity: 0, bgOpacity: 0, y: -50 }}
					enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
					leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
				>
					{on => on &&
						(styles => (
							<ModalWrapper style={{...styles}}>
							<ModalCard
								style={{
									transform: `translate3d(0, ${styles.y}px, 0)`,
									...styles
								}}
							>
									<CloseButton onClick={toggle}>
										<Icon name="close" />
									</CloseButton>
									<div>{children}</div>
								</ModalCard>
								<Background
									onClick={toggle}
									style={{opacity: styles.bgOpacity}}
								/>
							</ModalWrapper>
					))}
				</Transition>
			</Portal>
		)
	}
}

const ModalWrapper = styled.div`
	${absolute};
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ModalCard = styled(Card)`
	position: relative;
	min-width: 320px;
	z-index: 10;
	margin-bottom: 100px;
`

const CloseButton = styled.button`
	${absolute({
		y: 'top',
		x: 'right',
	})}
	border: none;
	padding: 10px;
	background: transparent;
`

const Background = styled.div`
	${absolute};
	width: 100%;
	height: 100%;
	background: black;
	opacity: 0.5;
`
