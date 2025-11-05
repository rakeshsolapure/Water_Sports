require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_FROM,
  RECEIVER_NUMBER,
  PORT = 5000,
} = process.env;

if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM || !RECEIVER_NUMBER) {
  console.warn('Missing TWILIO env vars. SMS will not work until configured.');
}

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.post('/api/send-sms', async (req, res) => {
  console.log('POST /api/send-sms body:', req.body); // <-- log incoming data
  const { name, email, phone, subject, message } = req.body || {};

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM || !RECEIVER_NUMBER) {
    return res.status(500).json({ success: false, error: 'Server SMS not configured (missing TWILIO env vars).' });
  }

  const smsBody = `Contact form:
Name: ${name || '-'}
Phone: ${phone || '-'}
Email: ${email || '-'}
Subject: ${subject || '-'}
Message: ${message || '-'}`;

  try {
    const sent = await client.messages.create({
      body: smsBody,
      from: TWILIO_FROM,
      to: RECEIVER_NUMBER,
    });
    console.log('Twilio sent message SID:', sent.sid);
    return res.json({ success: true, sid: sent.sid });
  } catch (err) {
    console.error('Twilio error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to send SMS' });
  }
});

app.listen(PORT, () => {
  console.log(`SMS API running on http://localhost:${PORT}`);
});