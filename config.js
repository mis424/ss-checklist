/* ════════════════════════════════════════════════════════════════════
   SS CHECKLIST — NOTIFICATIONS SITE · config.js
   Filled in for the Firebase project "ss-checklists".
   These values are safe to be public. NEVER put the private key file here.
   ════════════════════════════════════════════════════════════════════ */

/* 1. The checklist web app link (Apps Script → Deploy → Manage deployments) */
var PORTAL_URL = 'https://script.google.com/macros/s/AKfycbyTdfcYhHFkWUrIDiPDcaoxOzgN8QtYfbPiSCjOd8CzzL6S8YBod9Aaf4DgMMl3PSHI/exec';

/* 2. Firebase → the web app's Config */
const firebaseConfig = {
  apiKey: "AIzaSyAE5mgg2AoRSednNj8sEN1hBkI56sEGsvw",
  authDomain: "ss-checklists.firebaseapp.com",
  projectId: "ss-checklists",
  storageBucket: "ss-checklists.firebasestorage.app",
  messagingSenderId: "88988590990",
  appId: "1:88988590990:web:cc62aa4937e6b4a476badf"
};

/* 3. Firebase → Cloud Messaging → Web Push certificates → Key pair */
var VAPID_KEY = 'BECGL7Om5AynoD_Yu1bQOpSpBxZz0jFSjCI3S0lJFSMD-LrBA_49eUX64geNmwYh-NXQuKwo-5POAGn6RTC9YIs';

/* ── do not change anything below this line ── */
self.SS_CONFIG = {
  appName: 'SS Checklist',
  portalUrl: String(PORTAL_URL).trim(),
  firebase: firebaseConfig,
  vapidKey: String(VAPID_KEY).trim()
};
