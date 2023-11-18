import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </List>
  );
};
