$(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedString = urlParams.get('selected');
    document.getElementById("showText").innerHTML = selectedString;
});