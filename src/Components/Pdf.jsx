import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useRef } from 'react';

// Define your PDF document component
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>Job Summary</Text>
        {/* Add your summary information here */}
      </View>
    </Page>
  </Document>
);

const JobPage = () => {
  const pdfRef = useRef(null);

  const downloadPdf = () => {
    if (pdfRef.current) {
      pdfRef.current.updateContainer(MyDocument);
      pdfRef.current.save();
    }
  };

  return (
    <div>
      {/* <PDFViewer width="100%" height={600}>
        <MyDocument />
      </PDFViewer> */}
      <button onClick={downloadPdf}></button>
      <PDFDownloadLink document={<MyDocument />} fileName="job_summary.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download'
        }
      </PDFDownloadLink>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default JobPage;
