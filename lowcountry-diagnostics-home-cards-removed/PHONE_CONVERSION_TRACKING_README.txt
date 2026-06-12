Phone conversion tracking added

Events sent to GA4:
- phone_call_click: fires when someone clicks any tel: phone link
- generate_lead: also fires on phone clicks with lead_type=phone_call_click
- text_message_click: fires when someone clicks any sms: link
- email_click: fires when someone clicks any mailto: link
- service_request_submit: fires when the live contact form submits
- generate_lead: also fires on contact form submits with lead_type=contact_form

Recommended GA4 key event:
- phone_call_click

Important:
This measures clicks on your phone number, not completed phone conversations.
For true Google Ads call reporting from ad traffic, set up Google Ads phone call conversion tracking with a Google forwarding number.
