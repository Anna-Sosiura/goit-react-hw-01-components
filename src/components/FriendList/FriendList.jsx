import { FriendListItem } from '../FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id}
      />
    </ul>
  );
};
