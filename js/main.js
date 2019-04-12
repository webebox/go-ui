
/* helpers -----------------------------------------------------------------------------*/

// action
[].forEach.call(document.querySelectorAll("[go-action]"), function (elm) {
    let action = elm.getAttribute("go-action");  // show|hide|toggle|submit|dialog|modal|...
    let trigger = elm.getAttribute("go-trigger") || "click";  // click(default)|dblclick|focus|blur|keydown|keypress|keyup|...
    let target = document.querySelector('#' + elm.getAttribute("go-target")); // find the target element
    let state = elm.hasAttribute("go-state");   // save the element state
    elm.addEventListener(trigger, function () {
        // actions
        if (action === "toggle") target.style.display = target.style.display === 'none' ? '' : 'none';

        // state
        console.log(state);
        if (state) localStorage.setItem(target.id + "-display", target.style.display);
    });
});


// DomLoaded event
document.addEventListener("DOMContentLoaded", function () {

    // reload states
    [].forEach.call(document.querySelectorAll("[go-state]"), function (elm) {

        let target = document.querySelector('#' + elm.getAttribute("go-target")); // find the target element

        if (target !== undefined && target !== null) {
            let display = localStorage.getItem(target.id + "-display");
            target.style.display = display;
        }
    });


});


// save state
//[].forEach.call(document.querySelectorAll("[go-state]"), function (elm) {
//    let targetId = elm.id; // find the target pane
//    localStorage.setItem(targetId, elm.style.display);  // store the state
//    alert(localStorage.getItem(targetId));  // retrieve the state
//});


//else {  // animate
//            var timer = setInterval(function () {
//                let opacity = target.style.opacity;
//                if (opacity === "") opacity = 1;

//                if (action === "toggle") {
//                    if (target.style.display === '') {                       
//                        if (opacity <= 0) {
//                            target.style.display = 'none';
//                            clearInterval(timer);
//                        }
//                        target.style.opacity = opacity - 0.01;
//                    }
//                    else {
//                        target.style.display = '';
//                        target.style.opacity = 1;
//                        //if (opacity >= 1) clearInterval(timer);
//                        //target.style.opacity = opacity + 0.01;
//                    }
//                }
//            }, 10);

//}



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


// show all localStorage
//for (var key in localStorage) {
//    console.log(key + "   = " +localStorage.getItem(key));
//}


/* tab -----------------------------------------------------------------------------*/
//var goTabs = document.getElementsByClassName('go-tab');
//for (var i = 0; i < goTabs.length; i++) {
//    let goTabLinks = goTabs[i].children;
//    for (let j = 0; j < goTabLinks.length; j++) {
//        goTabLinks[j].addEventListener("click", function () { go_open_tab(event, this.getAttribute("go-tab-content")); });
//    }
//}

//function go_open_tab(e, cityName) {
//    let i, tabcontent, tablinks;

//    // Get all elements with class="tabcontent" and hide them
//    tabcontent = document.getElementsByClassName("go-tab-content");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }

//    // Get all elements with class="tablinks" and remove the class "active"
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }

//    // Show the current tab, and add an "active" class to the link that opened the tab
//    document.getElementById(cityName).style.display = "block";
//    e.currentTarget.className += " active";
//}






// important
// Mouse Wheel : https://alligator.io/js/speed-up-scroll-events/