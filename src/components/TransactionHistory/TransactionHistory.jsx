import { Table, THead, Tr, Th, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>

      <tbody>
        <Tr key={items[0].id}>
          <Td>{items[0].type}</Td>
          <Td>{items[0].amount}</Td>
          <Td>{items[0].currency}</Td>
        </Tr>
        <Tr key={items[1].id}>
          <Td>{items[1].type}</Td>
          <Td>{items[1].amount}</Td>
          <Td>{items[1].currency}</Td>
        </Tr>
        <Tr key={items[2].id}>
          <Td>{items[2].type}</Td>
          <Td>{items[2].amount}</Td>
          <Td>{items[2].currency}</Td>
        </Tr>
        <Tr key={items[3].id}>
          <Td>{items[3].type}</Td>
          <Td>{items[3].amount}</Td>
          <Td>{items[3].currency}</Td>
        </Tr>
        <Tr key={items[4].id}>
          <Td>{items[4].type}</Td>
          <Td>{items[4].amount}</Td>
          <Td>{items[4].currency}</Td>
        </Tr>
      </tbody>
    </Table>
  );
};
