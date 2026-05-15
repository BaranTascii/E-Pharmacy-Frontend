const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma@example.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
  },
];

const RecentCustomers = () => {
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-card-title">Recent Customers</h3>

      <ul className="customers-list">
        {customers.map((customer) => (
          <li key={customer.id} className="customer-item">
            <div>
              <p>{customer.name}</p>
              <span>{customer.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentCustomers;
