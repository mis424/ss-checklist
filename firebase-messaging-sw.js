/*
 * ════════════════════════════════════════════════════════════════════
 *  SS CHECKLIST — notification worker (GitHub Pages)
 *
 *  Runs in the background on the phone, even when the page is closed.
 *  When the sheet sends a reminder, Firebase shows it from here by itself
 *  (the reminder carries its own title, text, icon and link), and tapping
 *  it opens the SS Checklist page.
 *
 *  Must sit next to index.html, with exactly this file name.
 *  The config below is the same public web config as in index.html.
 * ════════════════════════════════════════════════════════════════════
 */

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAE5mgg2AoRSednNj8sEN1hBkI56sEGsvw',
  authDomain: 'ss-checklists.firebaseapp.com',
  projectId: 'ss-checklists',
  storageBucket: 'ss-checklists.firebasestorage.app',
  messagingSenderId: '88988590990',
  appId: '1:88988590990:web:cc62aa4937e6b4a476badf'
});

/* Reminders arrive with a title and text, so Firebase shows them itself
   when the page is closed — nothing more is needed for that. */
firebase.messaging();

/* A reminder shown while the page was open (index.html shows those):
   tapping it brings the page forward, or opens it. Firebase's own
   reminders carry FCM_MSG and are handled by Firebase. */
self.addEventListener('notificationclick', function (event) {
  var d = event.notification.data || {};
  if (!d.url || d.FCM_MSG) return;
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if ('focus' in list[i]) return list[i].focus();
      }
      return clients.openWindow(d.url);
    })
  );
});

/* a new version of this file takes over at once */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
