import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceTemplate from './components/invoice_template';

export default function App4() {
  const [invoice, setInvoice] = useState({
    logo: '/logo.PNG',
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    companyEmail: '',
    id: 'INV-2025-001',
    date: '2025-11-21',
    dueDate: '2025-11-30',
    customer: {
      name: '',
      address: '',
      email: '',
    },
    items: [
      { name: '', qty: 1, price: 0 },
    ],
    subtotal: 0,
    taxRate: 0,
    tax: 0,
    total: 0,
  });

//User can only add company name,address, phone and email
    const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Invoice Generator</h1>

      <input
        type="text"
        name="companyName"
        value={invoice.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="companyAddress"
        value={invoice.companyAddress}
        onChange={handleChange}
        placeholder="Company Address"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="companyPhone"
        value={invoice.companyPhone}
        onChange={handleChange}
        placeholder="Company Phone"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="companyEmail"
        value={invoice.companyEmail}
        onChange={handleChange}
        placeholder="Company Email"
        className="border p-2 w-full"
      />

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
