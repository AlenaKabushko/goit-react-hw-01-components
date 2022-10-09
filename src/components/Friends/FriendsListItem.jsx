import PropTypes from 'prop-types';

function FriendsListItem({ friends }) {
    return (
        <li>
            <span>{friends.isOnline}</span>
            <img src={friends.avatar} alt="User avatar" width="48" />
            <p>{friends.name}</p>
        </li>
    )
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