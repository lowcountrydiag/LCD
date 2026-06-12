Google reviews/posts live feed notes

I added two homepage sections:
1. Google Reviews live-feed slot
2. Recent Google Updates / Google Business Profile posts slot

Important:
This static Cloudflare/GitHub site cannot safely pull live Google Business Profile data by itself because API keys and OAuth tokens should not be exposed in public HTML/JavaScript.

To make it truly live, paste a widget provider embed into the marked comments in index.html:
- id="google-reviews-live" for Google reviews
- id="google-posts-live" for Google Business Profile posts or field updates

Recommended approach:
Use a third-party widget such as Elfsight or SociableKIT for reviews. For posts, many businesses use a social/GBP widget or manually repurpose recent GBP/Facebook posts.

Do not paste private Google API keys directly into this site.


UPDATE: Common Ninja Google Reviews widget has been added to index.html in the google-reviews-live slot. Widget ID: pid-9fa72c0d-13ce-4f36-a061-fb7a25af79ff.
