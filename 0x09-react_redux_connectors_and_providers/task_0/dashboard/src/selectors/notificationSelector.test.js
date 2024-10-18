import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector tests', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      list: [
        { id: 1, isRead: true, value: 'Message 1' },
        { id: 2, isRead: false, value: 'Message 2' },
      ],
    },
  };

  it('filterTypeSelected should return the filter type', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const result = getNotifications(state);
    expect(result).toEqual(state.notifications.list);
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const result = getUnreadNotifications(state);
    expect(result).toEqual([{ id: 2, isRead: false, value: 'Message 2' }]);
  });
});