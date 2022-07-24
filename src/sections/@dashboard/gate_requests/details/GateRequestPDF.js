/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { Page, View, Text, Image, Document } from '@react-pdf/renderer';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
import { fDate } from '../../../../utils/formatTime';
//
import styles from './GateRequestStyle';

// ----------------------------------------------------------------------

GateRequestPDF.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default function GateRequestPDF({ request }) {
  const { id, phone, requestNumber, createdBy, companyName, startDate, expiryDate, status, requestType, items } =
    request;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.gridContainer, styles.mb40]}>
          <Image source="/logo/galleria40_logo.png" style={{ height: 32 }} />
          <View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.h3}>{status}</Text>
            <Text> {requestNumber} </Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col6}>
            <Text style={[styles.overline, styles.mb8]}>REQUESTER DETAILS</Text>
            <Text style={styles.body1}>Name: {createdBy}</Text>
            <Text style={styles.body1}>Company: {companyName}</Text>
            <Text style={styles.body1}>Phone: {phone}</Text>
          </View>

          <View style={styles.col6}>
            <Text style={[styles.overline, styles.mb8]}>REQUEST DETAILS</Text>
            <Text style={styles.body1}>Type: {requestType}</Text>
            <Text style={styles.body1}>Quantity: {id}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb40]}>
          <View style={styles.col6}>
            <Text style={[styles.overline, styles.mb8]}>REQUEST START DATE</Text>
            <Text style={styles.body1}>{fDate(startDate)}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.overline, styles.mb8]}>REQUEST EXPIRY DATE</Text>
            <Text style={styles.body1}>{fDate(expiryDate)}</Text>
          </View>
        </View>

        <Text style={[styles.overline, styles.mb8]}>REQUEST DESCRIPTION</Text>

        <View style={styles.col12}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non nibh metus. Donec cursus, dolor vel
            ullamcorper vulputate, nunc est imperdiet velit, et dictum dui lorem id ante. Mauris ut tortor accumsan,
            eleifend augue at, vehicula ipsum. Nunc consequat euismod massa at pellentesque.
          </Text>
        </View>

        <Text style={[styles.overline, styles.mb8]}>APPROVAL DETAILS</Text>

        <View style={[styles.gridContainer, styles.footer]}>
          <View style={styles.col8}>
            <Text style={styles.subtitle2}>NOTES</Text>
            <Text>
              Gate requests are valid for only one week, you'll need to create a new request for each working week.
            </Text>
          </View>
          <View style={[styles.col4, styles.alignRight]}>
            <Text style={styles.subtitle2}>Have a Question?</Text>
            <Text>support@galleria40.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
