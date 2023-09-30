function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var nameParam = getUrlParameter('name');

if (nameParam) {
    document.getElementById('value').innerHTML=  nameParam + ' send You a wish';
} else {
    document.getElementById('value').innerHTML=  'Send You a wish';
}
function assignLink(){

    var name = document.getElementById('nameInput').value;
    if (name.trim() !== '') {
        var link = 'https://fayiz120.github.io/Wishing/?name=' + encodeURIComponent(name);
        var whatsappLink  = "whatsapp://send?text=" + link ;
        console.log("changed")
        document.getElementById('what').href = whatsappLink;
    } else {
        document.getElementById('generatedLink').innerHTML = 'Please enter a name.';
    }
}
// document.getElementById('generateLinkButton').addEventListener('click', function() {
   
// });