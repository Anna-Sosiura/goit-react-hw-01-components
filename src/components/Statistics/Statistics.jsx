import { List, Item } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <List className="stat-list">
        <Item className="item" key={stats[0].id}>
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}%</span>
        </Item>
        <Item className="item" key={stats[1].id}>
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}%</span>
        </Item>
        <Item className="item" key={stats[2].id}>
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}%</span>
        </Item>
        <Item className="item" key={stats[3].id}>
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}%</span>
        </Item>
      </List>
    </section>
  );
};
