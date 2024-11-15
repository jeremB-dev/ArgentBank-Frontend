import PropTypes from "prop-types";
import Header from "../Header-account/headerAccount";

const Account = ({ userName, onEdit, accountData }) => {
  return (
    <>
      <Header userName={userName} onEdit={onEdit} />

      <h2 className="sr-only">Accounts</h2>

      {accountData.map((account) => (
        <section key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
};

Account.propTypes = {
  userName: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  accountData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Account;
