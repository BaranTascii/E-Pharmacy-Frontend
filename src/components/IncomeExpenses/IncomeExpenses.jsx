const IncomeExpenses = () => {
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-card-title">
        Income & Expenses
      </h3>

      <div className="income-expenses-wrapper">
        <div className="income-box">
          <p>Income</p>
          <h2>$12,430</h2>
        </div>

        <div className="expenses-box">
          <p>Expenses</p>
          <h2>$4,210</h2>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;