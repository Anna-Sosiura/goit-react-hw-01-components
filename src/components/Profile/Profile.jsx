import { List, Item } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div
        className="description"
        style={{
          textAlign: 'center',
        }}
      >
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <List className="stats">
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </List>
    </div>
  );
};
