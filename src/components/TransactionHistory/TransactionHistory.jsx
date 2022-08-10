import PropTypes from 'prop-types';
import { Table, Thead, TableTitle } from './TransactionHistoryStyled';
import { TransactionHistoryItems } from './TransactionItems';

export const TransactionHistory = ({ transactions }) => {
	return (
		<Table>
			<thead>
				<Thead>
					<TableTitle>Type</TableTitle>
					<TableTitle>Amount</TableTitle>
					<TableTitle>Currency</TableTitle>
				</Thead>
			</thead>
			<tbody>
				{transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItems
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
			</tbody>
		</Table>
	);
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
