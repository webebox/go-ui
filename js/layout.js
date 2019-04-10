
constructor() {
    // Always call parent constructor first
    super();

    // Get template content from DOM
    const template = document.getElementById("cool-timer");
    const templateContent = template.content;

    // Create new Shadow Root
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
    );
}



/* tab -----------------------------------------------------------------------------*/
var goTabs = document.getElementsByClassName('go-tab');
for (var i = 0; i < goTabs.length; i++) {
    var goTabLinks = goTabs[i].children;
    for (var j = 0; j < goTabLinks.length; j++) {
        goTabLinks[j].addEventListener("click", function () {go_open_tab(event, this.getAttribute("go-tab-content"));});
    }
}

function go_open_tab(e, cityName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("go-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    e.currentTarget.className += " active";
}






// مهم
// Mouse Wheel : https://alligator.io/js/speed-up-scroll-events/