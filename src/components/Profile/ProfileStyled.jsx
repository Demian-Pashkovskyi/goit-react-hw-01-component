import styled from '@emotion/styled'

export const Card = styled.img`
font-size: ${p => p.theme.fontSizes.m};
font-weight:${p => p.theme.fontWeights.bold};
font-weight:${p => p.theme.lineHeights.heading};
letter-spacing: 0.2em;
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColorBox} ${p => p.theme.radii.normal};
background-color:${p => p.theme.colors.white};
colors:${p => p.theme.colors.colorBox};
`;

export const ProfilFoto = styled.img`
object-fit: cover;
width: 160px;
height: 160px;
margin-top:${p => p.theme.space[6]}px;
margin-bottom:${p => p.theme.space[4]}px;
border-radius:${p => p.theme.radii.round};`;

export const ProfilName = styled.p`
font-size:${p => p.theme.fontSizes.xml};
font-weight:${p => p.theme.fontWeights.bold};
padding:${p => p.theme.space[0]}px;
margin-top:${p => p.theme.space[6]}px;
margin-bottom:${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.round};
color:${p => p.theme.colors.black}`;

export const ProfilInfo = styled.p`
margin-bottom:${p => p.theme.space[3]}px`;

export const ProfilLocation = styled.p`
padding:${p => p.theme.space[0]}px;
margin-bottom:${p => p.theme.space[4]}px`;

export const Stats = styled.ul`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 90px;
list-style: none;
padding:${p => p.theme.space[0]}px;
margin:${p => p.theme.space[0]}px`;

export const StatsList = styled.li`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc(33.33333%);
font-family: ${(props) => props.theme.fonts.secondary};
padding-top:${p => p.theme.space[3]}px;
padding-bottom:${p => p.theme.space[3]}px;
padding-right:${p => p.theme.space[2]}px;
padding-left:${p => p.theme.space[2]}px;
background-color:${p => p.theme.colors.backgroundColorCard};
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColorCard}`;

export const UserInfo = styled.span`
font-size: ${p => p.theme.fontSizes.m};
font-weight:${p => p.theme.fontWeights.middle}`;
export const StatsQuantity = styled.span`
color:${p => p.theme.colors.span}`;
