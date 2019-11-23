import styled from 'styled-components'
import { elevation, transition, black, purple } from 'Utilities'

export const Card = styled.div`
	background: white;
	border-radius: 5px;
	padding: 15px;
	color: ${black};
	${elevation[4]};
	${transition({})};
	&:hover {
		${elevation[5]}
		color: ${purple};
	}
`;