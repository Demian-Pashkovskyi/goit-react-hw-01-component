import styled from '@emotion/styled';
import { widthHeight, font } from '../Mixins/mixins';

export const Table = styled.table`
font-size:${p=> p.theme.fontSizes.xm};
font-family: ${p => p.theme.fonts.secondary};
${font({ fs: 22, fw: 600, lh: 26 })};
color:${p=> p.theme.colors.borderColorTh};
width: calc(100% / 3);
display: table;
text-align: center;
margin-left: auto;
margin-right: auto;
margin-top: ${p => p.theme.space[7]}px;
margin-bottom: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[0]}px;
box-shadow: ${p=> p.theme.shadows.custom};
border-collapse: inherit;
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
	:focus {
  transform: scale(1.05);
};
`
export const TransactionCell = styled.td`
font-size: ${p=> p.theme.fontSizes.m};
font-family: ${p => p.theme.fonts.secondary};
${font({ fs: 16, fw: 400, lh: 24 })};
color: ${p=> p.theme.colors.text};
padding: ${p => p.theme.space[3]}px;
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
width: calc(100% / 3);
`

export const Thead = styled.tr`
${widthHeight(126, 45)};
background-color:${p=> p.theme.colors.colorBoxHeader};
`
export const tr = styled.tr`
padding-top: ${p => p.theme.space[3]}px;
padding-bottom: ${p => p.theme.space[3]}px;
`
export const TransactionRow = styled.tr`
height:35px;
text-align:center;
background-color:${p=> p.theme.colors.backgroundColorCard};
:nth-of-type(2n) {
  background-color:${p=> p.theme.colors.tableTitleColorRow};
}
`
export const TableTitle = styled.th`
font-size:${p=> p.theme.fontSizes.m};
color:${p=> p.theme.colors.white};
font-weight:${p=> p.theme.fontWeights.normal};
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
width: calc(100% / 3);
`
