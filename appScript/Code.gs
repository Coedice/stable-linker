function getDocContent(docId) {
  let doc = DocumentApp.openById(docId);
  return doc.getBody().getText();
}

function findUrl(text) {
  let urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex)[0];
}

function redirectToUrl(url) {
  var template = HtmlService.createTemplateFromFile('Redirect');
  template.url = url;
  return template.evaluate();
}

function doGet(e) {
  let docId = e.parameter.id;
  let content = getDocContent(docId);
  let link = findUrl(content);
  return ContentService.createTextOutput(link);
}
