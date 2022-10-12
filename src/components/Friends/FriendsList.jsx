import Box from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import FriendsListItem from './FriendsListItem';
import { FriendsListStyle } from './Friends.styled';

function FriendsList({ friends }) {
  const theme = useTheme();
  return (
    <Box
      as="section"
      p={theme.spase[2]}
      bg={theme.color.bgSection}
      fontSize={theme.fontSizes.m}
      flexDirection="column"
    >
      <FriendsListStyle>
        {friends.map(object => (
          <FriendsListItem key={object.id} friends={object} />
        ))}
      </FriendsListStyle>
    </Box>
  );
}

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
