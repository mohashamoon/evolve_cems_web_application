// components
//
import _mock from './_mock';
import { randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _approvals = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    'Request Approved by Ayman Mohamed',
    'Request Approved by Yasmine Mohamed',
    'Request Rejected by Hatem El Shahawy',
  ][index],
  type: `request${index + 1}`,
  status: randomInArray(['pending', 'approved', 'rejected']),
  time: _mock.time(index),
}));
