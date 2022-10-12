import PropTypes from 'prop-types';
import { FriendsItemStyle, FriendsStatus, FriendsName } from './Friends.styled';

function FriendsListItem({ friends }) {
  return (
    <FriendsItemStyle>
      <FriendsStatus>{friends.isOnline}</FriendsStatus>
      <img src={friends.avatar} alt="User avatar" width="48" />
      <FriendsName>{friends.name}</FriendsName>
    </FriendsItemStyle>
  );
}
export default FriendsListItem;

FriendsListItem.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
