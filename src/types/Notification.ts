export type Notification = {
  id: number;
  type: string;
  createdAt: number;
  title: string;
  isUnread: boolean;
};

export interface IDashboardNotification {
  title: string;
  subheader?: string;
  list: Notification[];
}

export interface NotificationItem {
  notification: Notification;
}
