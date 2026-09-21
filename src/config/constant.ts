// Google Apps Script Web App URL for fetching sheet data
export const SHEET_FETCH_URL =
    "https://script.google.com/macros/s/AKfycbxAPg0xcD3df3oLQYod6BVbQcOHQzHI5ACcZwWI99h1xDrtU3IINDODDj5eOYBwo24CjA/exec";

// Google Apps Script Web App URL for fetching doc data
export const DOC_FETCH_URL = "";

// Cache revalidation time in seconds (1 hour)
export const CACHE_TIME = 3600;

// Your Google Sheet ID
export const PROJECTS_SHEET_ID = "1gvLBF2cYKRa2cftmYn3qPpI7mCcEH_MHZlQ5tku3MW0";

// Email config (server-side only)
export const EMAIL_HOST_USER = process.env.EMAIL_HOST_USER || '';
export const EMAIL_HOST_PASSWORD = process.env.EMAIL_HOST_PASSWORD || '';
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';
