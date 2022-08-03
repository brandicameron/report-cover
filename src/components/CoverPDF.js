import { Page, Text, Font, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
import Placeholder from './Placeholder/Placeholder';

export default function CoverPDF({ data, showPDF }) {
  Font.register({
    family: 'Lato',
    fonts: [
      { src: '/fonts/Lato-Light.ttf' },
      { src: '/fonts/Lato-Regular.ttf', fontStyle: 'bold', fontWeight: 400 },
    ],
  });

  const styles = StyleSheet.create({
    body: {
      fontFamily: 'Lato',
      display: 'flex',
    },
    viewer: {
      width: '40vw',
      height: window.innerHeight,
    },
    border: {
      position: 'absolute',
      border: '1px solid grey',
      width: '90vw',
      height: '92vh',
      top: '4%',
      left: '5%',
    },
    title: {
      fontSize: 36,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '12px',
      marginTop: 65,
    },
    subTitle: {
      fontSize: 9.5,
      textAlign: 'center',
      margin: '7 0',
      textTransform: 'uppercase',
      letterSpacing: '5px',
    },
    image: {
      marginTop: 30,
    },
    address: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 3,
    },
    cityStZip: {
      fontSize: 12,
      textAlign: 'center',
      letterSpacing: '0.5px',
    },
    receipt: {
      textAlign: 'center',
      letterSpacing: '0.5px',
      marginTop: 50,
    },
    date: {
      fontSize: 11,
      textAlign: 'center',
      letterSpacing: '0.5px',
      marginTop: 5,
    },
    receiptContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '60px auto 0 auto',
    },
    receiptImage: {
      width: 275,
      marginRight: 10,
    },
    heading: {
      fontSize: 11.5,
      fontStyle: 'bold',
      textTransform: 'uppercase',
    },
    text: {
      fontSize: 11,
      hyphens: 'none',
    },
    inspectionInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: 200,
    },
    footer: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      bottom: 60,
      left: 175,
      textAlign: 'center',
    },
    url: {
      fontSize: 11,
      fontStyle: 'bold',
      marginBottom: 5,
      textTransform: 'uppercase',
    },
    contact: {
      fontSize: 11,
    },
  });

  const formatDate = (date) => {
    let formattedDate = new Date(`${date}T00:00`);
    let displayDate = formattedDate.toLocaleString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return displayDate;
  };

  return (
    <>
      {!showPDF && <Placeholder />}
      {showPDF && (
        <PDFViewer style={styles.viewer}>
          <Document title='Cover-Receipt' fileName='Cover-Receipt'>
            <Page size='LETTER' style={styles.body}>
              <div style={styles.border}></div>
              <Text style={styles.title}>Cameron</Text>
              <Text style={styles.subTitle}>Home Inspection</Text>
              <Image style={styles.image} src={data.image} />

              <Text style={styles.address}>{data.address}</Text>
              <Text style={styles.cityStZip}>
                {data.city}, {data.state} {data.zip}
              </Text>
            </Page>
            <Page size='LETTER' style={styles.body}>
              <div style={styles.border}></div>
              <Text style={styles.title}>Cameron</Text>
              <Text style={styles.subTitle}>Home Inspection</Text>
              <Text style={styles.receipt}>RECEIPT</Text>
              <Text style={styles.date}>{formatDate(data.receiptDate)}</Text>
              <div style={styles.receiptContent}>
                <Image style={styles.receiptImage} src={data.image} />
                <div style={styles.inspectionInfo}>
                  <div>
                    <Text style={styles.heading}>Property Inspected</Text>
                    <Text style={styles.text}>{data.address}</Text>
                    <Text style={styles.text}>
                      {data.city}, {data.state} {data.zip}
                    </Text>
                  </div>
                  <div>
                    <Text style={styles.heading}>Inspected For</Text>
                    <Text style={styles.text}>{data.name}</Text>
                    <Text style={styles.text}>{data.email}</Text>
                  </div>
                  <div>
                    <Text style={styles.heading}>Inspected On</Text>
                    <Text style={styles.text}>{formatDate(data.inspectionDate)}</Text>
                  </div>
                  <div>
                    <Text style={styles.heading}>Inspection Fee</Text>
                    <Text style={styles.text}>${data.fee}.00</Text>
                  </div>
                </div>
              </div>
              <footer style={styles.footer}>
                <Text style={styles.url}>www.cameronhomeinspection.com</Text>
                <Text style={styles.contact}>615-516-7066 • eric@cameronhomeinspection.com</Text>
              </footer>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </>
  );
}
