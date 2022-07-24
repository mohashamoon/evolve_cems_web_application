import { add } from 'date-fns';
import _mock from './_mock';
import { randomInArray, randomNumberRange } from './funcs';

// ----------------------------------------------------------------------

export const _gate_requests = [...Array(100)].map((_, index) => ({
  id: _mock.id(index),
  requestNumber: `REQ-${15688 + index}`,
  taxes: 5,
  discount: 10,
  createdBy: _mock.name.fullName(index),
  subTotalPrice: _mock.number.price(index + 1),
  totalPrice: _mock.number.price(index + 1),
  phone: _mock.phoneNumber(index),
  startDate: add(new Date(), { days: index, hours: index }),
  expiryDate: add(new Date(), { days: index + 15, hours: index }),
  status: randomInArray(['pending', 'completed', 'rejected']),
  requestType: [randomInArray(['labor', 'incoming material', 'outgoing material', 'evacuation'])],
  companyName: _mock.company(index),
  invoiceFrom: {
    id: _mock.id(index),
    name: _mock.name.fullName(index),
    address: _mock.address.fullAddress(index),
    company: _mock.company(index),
    email: _mock.email(index),
    phone: _mock.phoneNumber(index),
  },
  invoiceTo: {
    id: _mock.id(index + 1),
    name: _mock.name.fullName(index + 1),
    address: _mock.address.fullAddress(index + 1),
    company: _mock.company(index + 1),
    email: _mock.email(index + 1),
    phone: _mock.phoneNumber(index + 1),
  },
  items: [...Array(3)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.text.title(index),
    description: _mock.text.description(index),
    quantity: 5,
    price: _mock.number.price(index),
    total: _mock.number.price(index),
    service: randomInArray(['labor', 'incoming material', 'outgoing material', 'evacuation']),
  })),
}));

export const _invoiceAddressFrom = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  address: _mock.address.fullAddress(index),
  company: _mock.company(index),
  email: _mock.email(index),
  phone: _mock.phoneNumber(index),
}));

export const _invoiceAddressTo = [...Array(16)].map((_, index) => ({
  id: _mock.id(index + 1),
  name: _mock.name.fullName(index + 1),
  address: _mock.address.fullAddress(index + 1),
  company: _mock.company(index + 1),
  email: _mock.email(index + 1),
  phone: _mock.phoneNumber(index + 1),
}));
