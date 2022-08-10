import styled from '@emotion/styled';
import { block, font, flex } from '../Mixins/mixins';

export const Sections = styled.section`
${block};
width: 480px;
margin-top: ${p => p.theme.space[7]}px;
padding-top: ${p => p.theme.space[5]}px;
font-family: ${(props) => props.theme.fonts.secondary};
${font({ fs: 16, fw: 600, lh: 18 })};
color: ${p=> p.theme.colors.colorBox};
background-color: ${(props) => props.theme.colors.backgroundColorCard};
box-shadow: ${p=> p.theme.shadows.custom};
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColorBox};
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
`


export const StatTitle = styled.h2`
font-family: ${(props) => props.theme.fonts.secondary};
${font({ fs: 24, fw: 600, lh: 28 })};
colors: ${p=> p.theme.colors.colorBox};
text-align: center;
letter-spacing: 0.2em;
`
export const StatsList = styled.ul`
${flex};
margin-top: ${p => p.theme.space[5]}px;
padding: ${p => p.theme.space[0]}px;
border-bottom: ${p => p.theme.colors.colorBox};
list-style: none;
`
export const StatsItem = styled.li`
${flex};
flex-direction: column;
height: 70px;
`
export const StatlLabel = styled.span`
${flex};
font-family: ${(props) => props.theme.fonts.heading};
${font({ fs: 18, fw: 400, lh: 26 })};
color: ${p=> p.theme.colors.white};
margin-bottom:${p=> p.theme.space[1]}px;
`
export const PercentRating = styled.span`
${flex};
font-family: ${(props) => props.theme.fonts.monospace};
${font({ fs: 24, fw: 600, lh: 28 })};
color: ${p=> p.theme.colors.black};
margin-bottom:${p=> p.theme.space[1]}px;
letter-spacing: 0.2em;
`