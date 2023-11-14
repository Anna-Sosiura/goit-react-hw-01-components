export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li
      className="item"
      key={id}
      style={{
        width: 150,
        backgroundColor:
          { isOnline }.isOnline.toString() === 'true' ? 'green' : 'red',
      }}
    >
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
