import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

import Statistics from "../../components/Statistics/Statistics";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";

const DashboardPage = () => {
  return (
    <Container>
      <Title>Dashboard</Title>

      <Subtitle>Welcome to the pharmacy admin dashboard</Subtitle>

      <Statistics />

      <div className="dashboard-grid">
        <RecentCustomers />

        <IncomeExpenses />
      </div>
    </Container>
  );
};

export default DashboardPage;
