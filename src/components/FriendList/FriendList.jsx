export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <li
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id}
      />
    </ul>
  );
};
