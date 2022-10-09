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