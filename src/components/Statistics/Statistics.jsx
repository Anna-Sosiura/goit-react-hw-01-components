import { List, Item } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && (
        <h2 className="title" style={{ textAlign: 'center' }}>
          {title}
        </h2>
      )}
      <List className="stat-list">
        {stats.map(stat => (
          <Item className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </Item>
        ))}
      </List>
    </section>
  );
};
