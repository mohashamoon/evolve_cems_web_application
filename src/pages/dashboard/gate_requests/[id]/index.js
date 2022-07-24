// next
import { useRouter } from 'next/router';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// _mock_
import { _gate_requests, _invoices } from '../../../../_mock';
// hooks
import useSettings from '../../../../hooks/useSettings';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import GateRequest from '../../../../sections/@dashboard/gate_requests/details';

// ----------------------------------------------------------------------

GateRequestDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GateRequestDetails() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { id } = query;

  const request = _gate_requests.find((request) => request.id === id);

  return (
    <Page title="Gate Request Details">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Gate Request Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Gate Requests',
              href: PATH_DASHBOARD.gate_requests.root,
            },
            { name: request?.requestNumber || '' },
          ]}
        />

        <GateRequest request={request} />
      </Container>
    </Page>
  );
}
