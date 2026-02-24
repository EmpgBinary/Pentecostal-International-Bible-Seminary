# Pentecostal International Bible Seminary - Application System Guide

## How to Apply

### Step 1: Navigate to Admissions
- Click on "Admissions" in the main navigation menu

### Step 2: Start Your Application
- On the Admissions page, click the **"Start Application"** button
- This will take you to the multi-step application form

### Step 3: Complete the Form
The application form has 4 steps:

1. **Personal Information** - Basic details like name, email, phone, address
2. **Educational Background** - Your academic history and credentials
3. **Religious Background** - Church affiliation and ministry experience
4. **Program & Goals** - Your program choice and career aspirations

### Step 4: Submit
- Review your information on the final step
- Click "Submit Application"
- You'll see a success message confirming your application was received

### Step 5: Check Your Email
- Watch for a confirmation email from admissions@pibs.edu
- We'll review your application and contact you with next steps

---

## Admin Portal

### Accessing the Admin Dashboard

1. Click the **"Admin"** button in the top navigation menu
2. You'll be taken to the Admin Login page

### Admin Login Credentials (Demo)
- **Username:** admin
- **Password:** pibs2024secure

### Admin Dashboard Features

Once logged in, you can:

- **View All Submissions** - See both applications and contact messages
- **Filter by Type** - View only applications or contact messages
- **View Details** - Click on any submission to see full details
- **Search** - Find submissions by name or email
- **Export Data** - Download submissions as CSV
- **Download Attachments** - Save documents from submissions

### Understanding Submissions

**Applications:**
- Full multi-step form data from candidates
- Personal, educational, religious, and goal information
- Automatically timestamped

**Contact Messages:**
- General inquiries from the contact form
- Sender information and message content
- Also timestamped for reference

---

## Data Storage

All submissions are stored in `/data/submissions.json` as a JSON file. The data is:
- Automatically organized by submission type
- Timestamped for record-keeping
- Accessible via the admin dashboard
- Exportable to CSV for external analysis

---

## Candidate Email Confirmation

When a candidate submits an application or contact form:
1. Their data is saved to the system
2. They see a success message
3. They should receive a confirmation email (configure email service in production)

---

## Production Notes

For production deployment:
1. Replace demo credentials with proper authentication
2. Implement email notifications to candidates
3. Use a proper database instead of JSON files
4. Enable HTTPS for all admin access
5. Add role-based access control
6. Implement audit logging

---

## Troubleshooting

**"Start Application" button not working?**
- Make sure `/admissions/apply` page is accessible
- Check browser console for errors (F12)
- Clear browser cache and try again

**Admin login not working?**
- Use credentials: admin / pibs2024secure
- Check that cookies are enabled
- Ensure `/api/admin/auth` is accessible

**Submissions not saving?**
- Verify `/data` folder exists
- Check API error logs
- Ensure `/api/submissions` route is accessible

---

For support, contact: admissions@pibs.edu
