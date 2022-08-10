import PropTypes from 'prop-types';
import { TransactionRow ,TransactionCell } from './TransactionHistoryStyled';

export const TransactionHistoryItems = ({ type, amount, currency }) => {
  return (
    <TransactionRow >
      <TransactionCell>{type}</TransactionCell>
      <TransactionCell>{amount}</TransactionCell>
      <TransactionCell>{currency}</TransactionCell>
    </TransactionRow>
  )
}

TransactionHistoryItems.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

