import styled from '@emotion/styled';
import { widthHeight, font, flex } from '../Mixins/mixins';

export const FriendsList = styled.ul`
${flex};
flex-direction: column;
flex-wrap: no-wrap;
margin-top: ${p => p.theme.space[7]}px;
margin-botton: ${p => p.theme.space[8]}px;
padding: ${p => p.theme.space[0]}px;
`
export const FriendItem = styled.li`
${flex};
${widthHeight(320)};
justify-content: flex-start;
padding-top: ${p => p.theme.space[3]}px;
padding-bottom: ${p => p.theme.space[3]}px;
padding-left: ${p => p.theme.space[4]}px;
padding-right: ${p => p.theme.space[4]}px;
background-color: ${p => p.theme.colors.backgroundColorCard};
box-shadow: ${p=> p.theme.shadows.custom};
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColorBox};
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;
&:not(:last-child) {
		margin-bottom:${p => p.theme.space[4]}px;
	}
`
const Status = styled.span`
	${widthHeight(12, 12)};
	border-radius: 50%;
	margin-right: ${p => p.theme.space[5]}px;
`;

export const IsOnline = styled(Status)`
background-color: ${p => p.theme.colors.backgroundColorOn};
`
export const IsOffline = styled(Status)`
background-color: ${p => p.theme.colors.backgroundColorOff};
`
export const FriendAvatar = styled.img`
${widthHeight(60, 60)};
overflow: hidden;
margin-right: ${p => p.theme.space[5]}px;
`
export const FriendName = styled.p`
font-family: ${p => p.theme.fonts.secondary};
${font({ fs: 18, fw: 600, lh: 24 })};
color: ${p=> p.theme.colors.black};
letter-spacing: 0.2em;
margin-left: ${p => p.theme.space[5]}px
`

