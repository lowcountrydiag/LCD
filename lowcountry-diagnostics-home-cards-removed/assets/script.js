const btn=document.getElementById('hamburger');const menu=document.getElementById('mobileMenu');if(btn&&menu){btn.addEventListener('click',()=>menu.classList.toggle('open'));}


/* GA4 phone-call and lead tracking */
(function () {
  function sendGaEvent(eventName, params) {
    if (typeof gtag === "function") {
      gtag("event", eventName, params || {});
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";

    if (href.indexOf("tel:") === 0) {
      var phoneNumber = href.replace("tel:", "").trim();

      sendGaEvent("phone_call_click", {
        event_category: "lead",
        event_label: phoneNumber,
        method: "phone",
        value: 1
      });

      sendGaEvent("generate_lead", {
        lead_type: "phone_call_click",
        method: "phone",
        value: 1
      });
    }

    if (href.indexOf("sms:") === 0) {
      sendGaEvent("text_message_click", {
        event_category: "lead",
        event_label: href.replace("sms:", "").trim(),
        method: "sms",
        value: 1
      });
    }

    if (href.indexOf("mailto:") === 0) {
      sendGaEvent("email_click", {
        event_category: "lead",
        event_label: href.replace("mailto:", "").trim(),
        method: "email",
        value: 1
      });
    }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (form && form.classList && form.classList.contains("contact-form-live")) {
      sendGaEvent("service_request_submit", {
        event_category: "lead",
        method: "contact_form",
        value: 1
      });

      sendGaEvent("generate_lead", {
        lead_type: "contact_form",
        method: "contact_form",
        value: 1
      });
    }
  });
})();

