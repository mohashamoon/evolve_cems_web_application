import PropTypes from 'prop-types';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// next
import { useRouter } from 'next/router';
// @mui
import { Grid, Box, Stack, Button, Dialog, Tooltip, IconButton, DialogActions, CircularProgress } from '@mui/material';
// hooks
import useToggle from '../../../../hooks/useToggle';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// components
import Iconify from '../../../../components/Iconify';
//
import GateRequestPDF from './GateRequestPDF';

// ----------------------------------------------------------------------

GateRequestToolbar.propTypes = {
  request: PropTypes.object.isRequired,
};

export default function GateRequestToolbar({ request }) {
  const { push } = useRouter();

  const { toggle: open, onOpen, onClose } = useToggle();

  const handleEdit = () => {
    push(PATH_DASHBOARD.invoice.edit(request.id));
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ sm: 'center' }}
          sx={{ mb: 5, display: 'flex' }}
          item
          xs={12}
          md={8}
        >
          <Stack direction="row" spacing={1}>
            <Tooltip title="Edit">
              <IconButton onClick={handleEdit}>
                <Iconify icon={'eva:edit-fill'} />
              </IconButton>
            </Tooltip>

            <Tooltip title="View">
              <IconButton onClick={onOpen}>
                <Iconify icon={'eva:eye-fill'} />
              </IconButton>
            </Tooltip>

            <PDFDownloadLink
              document={<GateRequestPDF request={request} />}
              fileName={request.requestNumber}
              style={{ textDecoration: 'none' }}
            >
              {({ loading }) => (
                <Tooltip title="Download">
                  <IconButton>
                    {loading ? <CircularProgress size={24} color="inherit" /> : <Iconify icon={'eva:download-fill'} />}
                  </IconButton>
                </Tooltip>
              )}
            </PDFDownloadLink>

            <Tooltip title="Print">
              <IconButton>
                <Iconify icon={'eva:printer-fill'} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Send">
              <IconButton>
                <Iconify icon={'ic:round-send'} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Share">
              <IconButton>
                <Iconify icon={'eva:share-fill'} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2} alignItems="flex-end" sx={{ flexGrow: 1, mb: 3 }}>
            <Button fullWidth variant="contained" endIcon={<Iconify icon={'eva:checkmark-circle-2-fill'} />}>
              Accept
            </Button>
            <Button fullWidth variant="contained" color="error" endIcon={<Iconify icon={'eva:close-circle-fill'} />}>
              Reject
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Dialog fullScreen open={open}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: '12px !important',
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={onClose}>
                <Iconify icon={'eva:close-fill'} />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              <GateRequestPDF request={request} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
