
function filterMobiles() {
    // Get selected filter option and user input
    var selectedOption = document.getElementById("filterDropdown").value;
    var userInput = document.getElementById("filterInput").value.toLowerCase();

    // Get the list of mobile phones
    var mobileList = document.getElementById("mobileList").getElementsByTagName("li");

    // Loop through the list and show/hide based on user input
    for (var i = 0; i < mobileList.length; i++) {
        var mobile = mobileList[i];
        var value = mobile.getAttribute("data-" + selectedOption).toLowerCase();

        if (value.includes(userInput)) {
            mobile.style.display = "block";
        } else {
            mobile.style.display = "none";
        }
    }
}
