import React from "react";
import PropTypes from 'prop-types';
import { ProfilFoto,ProfilName,ProfilInfo,ProfilLocation,Stats,StatsList,UserInfo,StatsQuantity } from './ProfileStyled';
import { Box } from "components/Box";

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return <Box width={320}
	display="flex"
	flexDirection="column"
	alignItems="center"
	ml="auto"
	mr="auto"
	mt="45px"
	pt="25px"
	boxShadow="custom"
	radii="round"
	// border-radius="normal"
	border-radius="2px">
	<Box display="flex"
      flexDirection="column"
    alignItems="center"
		transform="scale(1.1)"
		border-radius="normal"
		radii="normal"
		>
    <ProfilFoto
      src={avatar}
      alt="User avatar"
    />
    <ProfilName>{username}</ProfilName>
    <ProfilInfo>@{tag}</ProfilInfo>
    <ProfilLocation>{location}</ProfilLocation>
  </Box>
	
  

  <Stats>
    <StatsList>
      <UserInfo>Followers</UserInfo>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsList>
    <StatsList>
      <UserInfo>Views</UserInfo>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </StatsList>
    <StatsList>
      <UserInfo>Likes</UserInfo>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </StatsList>
  </Stats>
</Box>
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};