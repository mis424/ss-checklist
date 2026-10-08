/* SS Checklist — shows the notifications when the page is closed.
   Do not rename this file; it must sit next to index.html. */
importScripts('config.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp(self.SS_CONFIG.firebase);
firebase.messaging();   /* Firebase shows the notification and opens the link on a tap */

/* notifications shown while the page was open: a tap opens / focuses the checklist */
self.addEventListener('notificationclick', function (event) {
  var d = event.notification.data || {};
  if (!d.own) return;
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) { if ('focus' in list[i]) return list[i].focus(); }
    return clients.openWindow(self.registration.scope);
  }));
});
