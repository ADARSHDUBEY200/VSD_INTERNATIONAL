import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const SOURCE_LABELS: Record<string, string> = {
  home_form:             'Homepage Form (EnquireNow)',
  contact_form:          'Contact Page Form',
  lp_commercial_kitchen: 'Landing Page — Commercial Kitchen Setup',
  lead_popup:            'Lead Popup (Auto)',
  enquiry_modal:         'Enquiry Modal (CTA Button)',
  cta_banner:            'CTA Banner Form',
};

export interface EnquiryData {
  name:     string;
  phone:    string;
  email?:   string;
  source?:  string;
  company?: string;
  city?:    string;
  service?: string;
  budget?:  string;
  message?: string;
}

export async function sendEnquiryNotification(data: EnquiryData): Promise<void> {
  if (!resend) return;

  const sourceLabel = SOURCE_LABELS[data.source ?? ''] ?? data.source ?? 'Unknown';
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });

  const rows = [
    ['Name',         data.name],
    ['Phone',        data.phone],
    ['Email',        data.email        || '—'],
    ['Company',      data.company      || '—'],
    ['City',         data.city         || '—'],
    ['Service',      data.service      || '—'],
    ['Budget',       data.budget       || '—'],
    ['Message',      data.message      || '—'],
    ['Source',       sourceLabel],
    ['Received at',  now],
  ];

  const tableRows = rows
    .map(([label, value]) => `
      <tr>
        <td style="padding:10px 14px;font-weight:600;color:#5a4a1e;background:#fdf8ee;border-bottom:1px solid #ede0b5;white-space:nowrap;">${label}</td>
        <td style="padding:10px 14px;color:#1a1a1a;background:#ffffff;border-bottom:1px solid #ede0b5;">${value}</td>
      </tr>`)
    .join('');

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a1405 0%,#2c2008 100%);padding:28px 32px;">
            <p style="margin:0;color:#c9a84c;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;">VSD International</p>
            <h1 style="margin:8px 0 0;color:#f5f0e8;font-size:22px;font-weight:700;line-height:1.3;">New Enquiry Received</h1>
            <p style="margin:6px 0 0;color:rgba(245,240,232,0.55);font-size:13px;">A visitor has submitted an enquiry through the website.</p>
          </td>
        </tr>

        <!-- Table -->
        <tr>
          <td style="padding:0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${tableRows}
            </table>
          </td>
        </tr>

        <!-- Actions -->
        <tr>
          <td style="padding:24px 32px;background:#fdf8ee;border-top:2px solid #c9a84c;">
            <p style="margin:0 0 14px;font-size:13px;color:#5a4a1e;font-weight:600;">Quick actions:</p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:10px;">
                  <a href="tel:${data.phone.replace(/\s/g, '')}" style="display:inline-block;padding:10px 20px;background:#1a1405;color:#c9a84c;text-decoration:none;border-radius:6px;font-size:13px;font-weight:700;">📞 Call Now</a>
                </td>
                <td>
                  <a href="https://wa.me/${data.phone.replace(/[^\d]/g, '')}?text=Hi%20${encodeURIComponent(data.name)}%2C%20thank%20you%20for%20your%20enquiry%20at%20VSD%20International." style="display:inline-block;padding:10px 20px;background:#25D366;color:#ffffff;text-decoration:none;border-radius:6px;font-size:13px;font-weight:700;">💬 WhatsApp</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;background:#f8f8f8;border-top:1px solid #e8e8e8;text-align:center;">
            <p style="margin:0;font-size:11px;color:#999;">This email was sent automatically by your website enquiry system. Do not reply to this email.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: 'VSD Enquiries <noreply@vsdinternational.com>',
      to:   [process.env.ADMIN_EMAIL ?? 'sales@vsdinternational.com'],
      subject: `New Enquiry — ${data.name} (${data.phone})`,
      html,
    });
  } catch {
    // Email failure must never break the form submission
  }
}
