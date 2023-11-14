import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      <FriendListItem
        avatar={friends[0].avatar}
        name={friends[0].name}
        isOnline={friends[0].isOnline}
        id={friends[0].id}
      />
      <FriendListItem
        avatar={friends[1].avatar}
        name={friends[1].name}
        isOnline={friends[1].isOnline}
        id={friends[1].id}
      />
      <FriendListItem
        avatar={friends[2].avatar}
        name={friends[2].name}
        isOnline={friends[2].isOnline}
        id={friends[2].id}
      />
      <FriendListItem
        avatar={friends[3].avatar}
        name={friends[3].name}
        isOnline={friends[3].isOnline}
        id={friends[3].id}
      />
    </List>
  );
};
