import './App.css';
import Message from './Message';

function App() {
  const plan = [
    {
      plan: "Free",
      price: "$0",
      users: "Single User",
      projects: "5GB Storage",
      access: "Community Access",
      privateproj: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
    {
      plan: "Plus",
      price: "$9",
      users: "Single User",
      projects: "50GB Storage",
      access: "Community Access",
      privateproj: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
    {
      plan: "Pro",
      price: "$49",
      users: "Unlimited users",
      projects: "150GB Storage",
      access: "Community Access",
      privateproj: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Unlimited Free Subdomain",
      reports: "Monthly Status Reports"
    }
  ];

  return (
    <section className='pricing py-5'>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center'>PRICE CARD</h1>
          {plan.map((detail, index) => (
            <Message key={index} details={detail} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
