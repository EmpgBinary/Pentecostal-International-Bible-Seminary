# Admin Portal Setup Guide

## Quick Start

### Login Credentials
- **Username:** `admin`
- **Password:** `pibs2024secure`

## Accessing the Admin Portal

1. Go to your site and click "Admin" in the top navigation bar
2. Enter the credentials above
3. You should be redirected to the dashboard

## If Login Isn't Working

### Troubleshooting Steps:

**Step 1: Check Browser Console**
- Open your browser's developer tools (F12)
- Go to the Console tab
- Look for any error messages
- Take note of any errors and try again

**Step 2: Clear Browser Cache**
- Open DevTools (F12)
- Right-click the refresh button
- Select "Empty cache and hard refresh"
- Try logging in again

**Step 3: Check Network Tab**
- Open DevTools (F12)
- Go to the Network tab
- Click "Admin" → enter credentials → click "Sign In"
- Look at the request to `/api/admin/auth`
- Check the response - it should contain `"success": true`

**Step 4: Verify Data Folder**
- The app stores submissions in `/data/submissions.json`
- Ensure the `/data` folder exists in your project root
- Check that `submissions.json` is present

## Admin Dashboard Features

### View Submissions
- See all applications and contact messages
- Filter by type (All, Applications, Contacts)
- View detailed information for each submission

### Export Data
- Click "Download CSV" to export submissions
- Useful for record-keeping and analysis

### Logout
- Click the "Logout" button to exit the admin panel

## Sample Data

The system comes with sample submissions to test functionality:
- 2 sample applications
- 1 sample contact message

These are stored in `/data/submissions.json`

## Common Issues and Solutions

### Issue: Login redirects back to login page
**Solution:** 
- Check your browser's Network tab to see what status the auth API is returning
- Ensure cookies are enabled in your browser
- Try a different browser to test

### Issue: No submissions appear in dashboard
**Solution:**
- Check that `/data/submissions.json` exists
- Verify the file contains valid JSON
- Submit a new application or contact form to generate new data

### Issue: Can't see the Admin button
**Solution:**
- Scroll to the top right of the header
- The Admin button appears on larger screens
- On mobile, you may need to expand the menu

## Architecture

The admin system uses:
- **Authentication:** Simple session-based with HTTP-only cookies
- **Data Storage:** JSON files in `/data` folder
- **Client-side:** Next.js App Router with TypeScript
- **Server-side:** API routes handling auth and data persistence

## Security Notes

For production use:
- Change the default credentials
- Implement JWT tokens instead of simple tokens
- Use a proper database instead of JSON files
- Add role-based access control
- Implement rate limiting on auth endpoints
- Use HTTPS and secure cookies

Current implementation is suitable for demo/testing purposes only.
