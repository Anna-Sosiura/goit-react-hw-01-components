export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr key={items[0].id}>
          <td>{items[0].type}</td>
          <td>{items[0].amount}</td>
          <td>{items[0].currency}</td>
        </tr>
        <tr key={items[1].id}>
          <td>{items[1].type}</td>
          <td>{items[1].amount}</td>
          <td>{items[1].currency}</td>
        </tr>
        <tr key={items[2].id}>
          <td>{items[2].type}</td>
          <td>{items[2].amount}</td>
          <td>{items[2].currency}</td>
        </tr>
        <tr key={items[3].id}>
          <td>{items[3].type}</td>
          <td>{items[3].amount}</td>
          <td>{items[3].currency}</td>
        </tr>
        <tr key={items[4].id}>
          <td>{items[4].type}</td>
          <td>{items[4].amount}</td>
          <td>{items[4].currency}</td>
        </tr>
      </tbody>
    </table>
  );
};
