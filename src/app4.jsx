import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceTemplate from './components/invoice_template';


export default function App4() {
  const invoice = {
    logo: '/logo.PNG',
    companyName: 'TechNova Solutions',
    companyAddress: '123 Business Street, Colombo, Sri Lanka',
    companyPhone: '+94 71 234 5678',
    companyEmail: 'support@technova.com',
    id: 'INV-2025-001',
    date: '2025-11-21',
    dueDate: '2025-11-30',
    customer: {
      name: 'Kusal Chamu',
      address: '45/1 Hill Road, Kandy',
      email: 'kusal@example.com',
    },
    items: [
      { name: 'Web Development Service', qty: 1, price: 50000 },
      { name: 'Maintenance Package', qty: 1, price: 15000 },
    ],
    subtotal: 65000,
    taxRate: 5,
    tax: 3250,
    total: 68250,
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Invoice Generator</h1>
      <PDFDownloadLink
        document={<InvoiceTemplate invoice={invoice} />}
        fileName="invoice.pdf"
      >
        {({ loading }) => (
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            {loading ? 'Preparing PDF...' : 'Download Invoice'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
