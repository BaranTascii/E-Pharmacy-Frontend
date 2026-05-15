const statisticsData = [
  {
    title: "All Products",
    value: 298,
  },
  {
    title: "All Suppliers",
    value: 24,
  },
  {
    title: "All Customers",
    value: 1218,
  },
];

const Statistics = () => {
  return (
    <div className="statistics-grid">
      {statisticsData.map((item) => (
        <div key={item.title} className="statistics-card">
          <p className="statistics-title">{item.title}</p>

          <h3 className="statistics-value">{item.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
