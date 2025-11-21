import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyDetails: {
    fontSize: 10,
    marginTop: 2,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottom: '1px solid #000',
    paddingBottom: 5,
    marginTop: 15,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottom: '1px solid #ddd',
  },
  col1: { width: '40%' },
  col2: { width: '20%' },
  col3: { width: '20%' },
  col4: { width: '20%' },
  summaryBox: {
    marginTop: 20,
    alignSelf: 'flex-end',
    width: '40%',
    borderTop: '1px solid #000',
    paddingTop: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 10,
    color: '#777',
  },
});
