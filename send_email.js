function sendEmail(title, today) {
  html_body = "today: " + today +
      "<br>" +
      "rest of the body";
      
  MailApp.sendEmail({
    to: "ran1@sample.com, ran2@sample.com",
    subject: title,
    htmlBody: html_body});    
  return;
}
