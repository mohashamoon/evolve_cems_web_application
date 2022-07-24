import PropTypes from 'prop-types';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Stack,
  Card,
  Grid,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
// utils
import { fDate } from '../../../../utils/formatTime';
import { fCurrency } from '../../../../utils/formatNumber';
import { fDateTime } from '../../../../utils/formatTime';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
//
import GateRequestToolbar from './GateRequestToolbar';

import { _approvals } from '../../../../_mock/_approvals';

// ----------------------------------------------------------------------

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

GateRequestDetails.propTypes = {
  request: PropTypes.object.isRequired,
};

export default function GateRequestDetails({ request }) {
  const theme = useTheme();

  if (!request) {
    return null;
  }

  const { id, phone, requestNumber, createdBy, companyName, startDate, expiryDate, status, requestType, items } =
    request;

  return (
    <>
      <GateRequestToolbar request={request} />

      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Image disabledEffect visibleByDefault alt="logo" src="/logo/g40_logo.svg" sx={{ maxWidth: 220 }} />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Box sx={{ textAlign: { sm: 'right' } }}>
              <Label
                variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                color={
                  (status === 'completed' && 'success') ||
                  (status === 'pending' && 'warning') ||
                  (status === 'rejected' && 'error') ||
                  'default'
                }
                sx={{ textTransform: 'uppercase', mb: 1 }}
              >
                {status}
              </Label>

              <Typography variant="h6">{requestNumber}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Requester Details
            </Typography>

            <Stack direction="row" sx={{ mb: 1 }}>
              <IconStyle icon={'bi:person-fill'} />
              <Typography variant="body2">
                <strong>Created By: &nbsp;</strong>
              </Typography>
              <Typography variant="body2">{createdBy}</Typography>
            </Stack>

            <Stack direction="row" sx={{ mb: 1 }}>
              <IconStyle icon={'heroicons-solid:office-building'} />
              <Typography variant="body2">
                <strong>Company: &nbsp;</strong>
              </Typography>
              <Typography variant="body2">{companyName}</Typography>
            </Stack>

            <Stack direction="row" sx={{ mb: 1 }}>
              <IconStyle icon={'bxs:phone'} />
              <Typography variant="body2">
                <strong>Phone: &nbsp;</strong>
              </Typography>
              <Typography variant="body2">{phone}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Request Details
            </Typography>
            <Stack direction="row" sx={{ mb: 1 }}>
              <IconStyle icon={'ic:baseline-label'} />
              <Typography variant="body2">
                <strong>Type: &nbsp;</strong>
              </Typography>
              <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                {requestType}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ mb: 1 }}>
              <IconStyle icon={'mdi:counter'} />
              <Typography variant="body2">
                <strong>Quantity: &nbsp;</strong>
              </Typography>
              <Typography variant="body2">{id}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              request start date
            </Typography>
            <Typography variant="body2">{fDate(startDate)}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              request expiry date
            </Typography>
            <Typography variant="body2">{fDate(expiryDate)}</Typography>
          </Grid>
        </Grid>

        <Scrollbar>
          <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
            REQUEST Description
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non nibh metus. Donec cursus, dolor vel
            ullamcorper vulputate, nunc est imperdiet velit, et dictum dui lorem id ante. Mauris ut tortor accumsan,
            eleifend augue at, vehicula ipsum. Nunc consequat euismod massa at pellentesque.
          </Typography>

          <Typography paragraph variant="overline" sx={{ color: 'text.disabled', mt: 5 }}>
            Approval Details
          </Typography>
          <Timeline
            sx={{
              '& .MuiTimelineItem-missingOppositeContent:before': {
                display: 'none',
              },
            }}
          >
            {_approvals.map((item, index) => (
              <RequestApprovalItem key={item.id} item={item} isLast={index === _approvals.length - 1} />
            ))}
          </Timeline>
        </Scrollbar>

        <Divider sx={{ mt: 5 }} />

        <Grid container>
          <Grid item xs={12} md={9} sx={{ py: 3 }}>
            <Typography variant="subtitle2">NOTES</Typography>
            <Typography variant="body2">
              Gate requests are valid for only one week, you'll need to create a new request for each working week.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
            <Typography variant="subtitle2">Have a Question?</Typography>
            <Typography variant="body2">support@galleria40.com</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

// ----------------------------------------------------------------------

RequestApprovalItem.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.array,
  }),
};

function RequestApprovalItem({ item, isLast }) {
  const { status, title, time } = item;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (status === 'pending' && 'warning') ||
            (status === 'approved' && 'success') ||
            (status === 'rejected' && 'error') ||
            (status === 'completed' && 'success') ||
            'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
