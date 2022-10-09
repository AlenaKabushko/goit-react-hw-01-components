import PropTypes from 'prop-types';
import FriendsListItem from "./FriendsListItem";

function FriendsList({ friends }) {
    return (        
        <ul>
            {friends.map((object) => (
            <FriendsListItem key={object.id} friends={object} />
        ))}
        </ul>
    )
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