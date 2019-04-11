
/* helpers -----------------------------------------------------------------------------*/

// show
[].forEach.call(document.querySelectorAll("[go-show]"), function (elm) {
    elm.addEventListener("click", function () {
        let target = document.querySelector('#' + this.getAttribute("go-toggle")); // find the target pane
        target.style.display = ''; // show the target pane
    });
});

// hide
[].forEach.call(document.querySelectorAll("[go-hide]"), function (elm) {
    elm.addEventListener("click", function () {
        let target = document.querySelector('#' + this.getAttribute("go-toggle")); // find the target pane
        target.style.display = 'none'; // hide the target pane
    });
});

// toggle
[].forEach.call(document.querySelectorAll("[go-toggle]"), function (elm) {
    elm.addEventListener("click", function () {
        let target = document.querySelector('#' + this.getAttribute("go-toggle")); // find the target pane
        target.style.display = target.style.display === 'none' ? '' : 'none'; // toggle the target pane

        // state
        //if (target.hasAttribute("go-state")) localStorage.setItem("display-"+target.id, elm.style.display);
        //alert(target.style.display);

    });
});

// save state
//[].forEach.call(document.querySelectorAll("[go-state]"), function (elm) {
//    let targetId = elm.id; // find the target pane
//    localStorage.setItem(targetId, elm.style.display);  // store the state
//    alert(localStorage.getItem(targetId));  // retrieve the state
//});




//constructor() {
//    // Always call parent constructor first
//    super();

//    // Get template content from DOM
//    const template = document.getElementById("cool-timer");
//    const templateContent = template.content;

//    // Create new Shadow Root
//    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
//        templateContent.cloneNode(true)
//    );
//}



/* tab -----------------------------------------------------------------------------*/
var goTabs = document.getElementsByClassName('go-tab');
for (var i = 0; i < goTabs.length; i++) {
    let goTabLinks = goTabs[i].children;
    for (let j = 0; j < goTabLinks.length; j++) {
        goTabLinks[j].addEventListener("click", function () { go_open_tab(event, this.getAttribute("go-tab-content")); });
    }
}

function go_open_tab(e, cityName) {
    let i, tabcontent, tablinks;

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