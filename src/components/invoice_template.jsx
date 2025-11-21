import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { styles } from './invoice_styles';

export default function InvoiceTemplate({ invoice }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={invoice.logo} style={styles.logo} />
          <View>
            <Text style={styles.companyName}>{invoice.companyName}</Text>
            <Text style={styles.companyDetails}>{invoice.companyAddress}</Text>
            <Text style={styles.companyDetails}>Phone: {invoice.companyPhone}</Text>
            <Text style={styles.companyDetails}>Email: {invoice.companyEmail}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Invoice Details</Text>
          <Text>Invoice ID: {invoice.id}</Text>
          <Text>Date: {invoice.date}</Text>
          <Text>Due Date: {invoice.dueDate}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Billed To</Text>
          <Text>{invoice.customer.name}</Text>
          <Text>{invoice.customer.address}</Text>
          <Text>{invoice.customer.email}</Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.col1}>Item</Text>
          <Text style={styles.col2}>Qty</Text>
          <Text style={styles.col3}>Price</Text>
          <Text style={styles.col4}>Total</Text>
        </View>

        {invoice.items.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.col1}>{item.name}</Text>
            <Text style={styles.col2}>{item.qty}</Text>
            <Text style={styles.col3}>${item.price.toFixed(2)}</Text>
            <Text style={styles.col4}>${(item.qty * item.price).toFixed(2)}</Text>
          </View>
        ))}

        <View style={styles.summaryBox}>
          <View style={styles.summaryRow}>
            <Text>Subtotal:</Text>
            <Text>${invoice.subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Tax ({invoice.taxRate}%):</Text>
            <Text>${invoice.tax.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}> 
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>${invoice.total.toFixed(2)}</Text>
          </View>
        </View>

        <Text style={styles.footer}>Thank you for your business!</Text>
      </Page>
    </Document>
  );
}
