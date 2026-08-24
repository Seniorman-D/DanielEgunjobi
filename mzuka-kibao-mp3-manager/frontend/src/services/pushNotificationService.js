class PushNotificationService {
  requestPermission() {
    if (!('Notification' in window)) return false;
    return Notification.requestPermission();
  }

  notify(title, message) {
    if (Notification.permission === 'granted') {
      new Notification(title, { body: message });
    }
  }
}

export default new PushNotificationService();