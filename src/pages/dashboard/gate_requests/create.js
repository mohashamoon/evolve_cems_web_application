// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
// sections
import GateRequestCreateForm from '../../../sections/@dashboard/gate_requests/create/GateRequestCreateForm';

// ----------------------------------------------------------------------

GateRequestCreate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GateRequestCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="New Gate Request">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new gate request"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Gate Requests',
              href: PATH_DASHBOARD.gate_requests.root,
            },
            { name: 'New request' },
          ]}
        />
        <GateRequestCreateForm />
      </Container>
    </Page>
  );
}
