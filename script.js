var currentURL = window.location.href;
var url = new URL(currentURL);
console.log(url)
var searchParams = url.searchParams;
var extractedValue = searchParams.get('?=');
console.log(extractedValue);
document.getElementById('extractedValue').textContent = 'Extracted Value: ' + extractedValue;