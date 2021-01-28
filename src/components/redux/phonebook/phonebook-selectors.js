import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const filter = state => state.contacts.filter;

const filteredContacts = createSelector(
  [getContacts, filter],
  (items, filter) => {
    const filterBy = filter.toLowerCase();
    return items.filter(({ name }) => name.toLowerCase().includes(filterBy));
  },
);

export { getContacts, filter, filteredContacts };
