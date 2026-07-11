interface EnquiryPayload {
  fullName?: unknown;
  pickupLocation?: unknown;
  dropoffLocation?: unknown;
  date?: unknown;
  time?: unknown;
  phone?: unknown;
}

const json = (data: object, status = 200) =>
  Response.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

const cleanField = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return json({ success: false, message: 'Method not allowed.' }, 405);
  }

  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return json({ success: false, message: 'Invalid request body.' }, 400);
  }

  const enquiry = {
    fullName: cleanField(payload.fullName, 80),
    pickupLocation: cleanField(payload.pickupLocation, 160),
    dropoffLocation: cleanField(payload.dropoffLocation, 160),
    date: cleanField(payload.date, 20),
    time: cleanField(payload.time, 20),
    phone: cleanField(payload.phone, 30),
  };

  if (Object.values(enquiry).some((value) => !value)) {
    return json({ success: false, message: 'Please complete every field.' }, 400);
  }

  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminNumber = process.env.ADMIN_WHATSAPP_NUMBER;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME;
  const templateLanguage = process.env.WHATSAPP_TEMPLATE_LANGUAGE ?? 'en';
  const graphApiVersion = process.env.WHATSAPP_GRAPH_API_VERSION ?? 'v23.0';

  if (!accessToken || !phoneNumberId || !adminNumber || !templateName) {
    return json(
      { success: false, message: 'WhatsApp service is not configured yet.' },
      503,
    );
  }

  try {
    const whatsappResponse = await fetch(
      `https://graph.facebook.com/${graphApiVersion}/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: adminNumber,
          type: 'template',
          template: {
            name: templateName,
            language: { code: templateLanguage },
            components: [
              {
                type: 'body',
                parameters: [
                  { type: 'text', text: enquiry.fullName },
                  { type: 'text', text: enquiry.phone },
                  { type: 'text', text: enquiry.pickupLocation },
                  { type: 'text', text: enquiry.dropoffLocation },
                  { type: 'text', text: enquiry.date },
                  { type: 'text', text: enquiry.time },
                ],
              },
            ],
          },
        }),
      },
    );

    if (!whatsappResponse.ok) {
      const errorBody = await whatsappResponse.text();
      console.error('WhatsApp API request failed:', whatsappResponse.status, errorBody);
      return json(
        { success: false, message: 'Unable to send the enquiry right now.' },
        502,
      );
    }

    return json({ success: true, message: 'Your enquiry has been sent.' });
  } catch (error) {
    console.error('WhatsApp enquiry error:', error);
    return json(
      { success: false, message: 'Unable to send the enquiry right now.' },
      500,
    );
  }
}
