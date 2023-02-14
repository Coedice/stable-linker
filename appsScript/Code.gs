const docId = "";  // Add your document ID here

function getDocContent(docId) {
  const doc = DocumentApp.openById(docId);
  return doc.getBody().getText();
}

function findUrl(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex)[0];
}

function redirectToUrl(url) {
  var template = HtmlService.createTemplateFromFile('Redirect');
  template.url = url;
  return template.evaluate();
}

function doGet(e) {
  const content = getDocContent(docId);
  const link = findUrl(content);
  return ContentService.createTextOutput(link);
}
