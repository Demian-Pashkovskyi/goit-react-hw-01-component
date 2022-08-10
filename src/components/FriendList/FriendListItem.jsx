import React from "react";
import PropTypes from 'prop-types';
import { FriendItem ,IsOnline,IsOffline,FriendAvatar,FriendName} from './FriendListStyled';

export const FriendListItem = ({ friends }) => {
  return friends.map((friend) => (
		<FriendItem key={friend.id}>
			{friend.isOnline ? <IsOnline /> : <IsOffline />}
			<FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
			<FriendName>{friend.name}</FriendName>
		</FriendItem>
	));
};

FriendListItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
};