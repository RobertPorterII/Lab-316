// step 1
const mainEl = document.querySelector("main");

// step 2
mainEl.style.backgroundColor = "var(--main-bg)";

//step 3 add h1
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//step 4- add flex class list
mainEl.setAttribute("class", "flex-ctr");


// =============Part 2======================

// name and assign a top menu var
const topMenuEl = document.getElementById("top-menu")
// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";
// Set the background color of TopMenuEL
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Set flex to TopMenu
topMenuEl.setAttribute("class", "flex-around");
 // ================Part 3 ============

 //  old Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

  // Updated data Structure
  var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];


  // adding the menuLink to the navbar
  menuLinks.forEach((link) => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);

  });


  // ====== Part 3 - Adding Interactivity
  // null error on mine and colton's code js
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

// Grabbing all topMenuEl <a> elements
const topMenuLinks = document.querySelectorAll("a");

// Add Eventlistener
topMenuEl.addEventListener("click", function(e) {
    e.preventDefault();
    // the second line of code of the function should immediately return if the element clicked was not an <a> element.
    if(!e.target.matches("a")) {
        return;
    }

    console.log(e.target.textContent);
    //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    e.target.classList.toggle("active");

    // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    topMenuLinks.forEach((link) => {
        if(link !== e.target) {
        link.classList.remove("active");
        }
        // might be here later
    
});


// ==============Part 5 Adding SUbmenu Interaction===========
//Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// f the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// Otherwise, set the CSS top property of subMenuEl to 0.
//Hint: Caching the "link" object will come in handy for passing its subLinks array later.

const clickedLink = menuLinks.find((link) => link.text === e.target.textContent);
if(e.target.classList.contains("active") && clickedLink.subLinks){
    subMenuEl.style.top = "100%";
    buildSubMenu(clickedLink.subLinks);
}else{
    if(!clickedLink.subLinks) {
        subMenuEl.style.top = 0;
    }
    
}

function buildSubMenu(subLinks) {
    // Clear the current contents of subMenuEL.
    subMenuEl.innerHTML ="";
    // Inter over the sublinks array, passed as an argument
    subLinks.forEach((link) => {
        // Create an <a> element.
        const a = document.createElement("a");
        // Add an href attribute 
        a.setAttribute("href", link.href);
        // Set the element's content
        a.textContent = link.text;
        // Append 
        subMenuEl.appendChild(a)
    });
}

});
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(e){
// The first line of code of the event listener function should call the event object's preventDefault() method.
e.preventDefault()
// The second line of code within the function should immediately return if the element clicked was not an <a> element.
if(!e.target.matches('a')){
    return
}
// Log the content of the <a> to verify the handler is working.
console.log(e.target.textContent);
// Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = '0'
// Remove the active class from each <a> element in topMenuLinks.
topMenuLinks.forEach(link => {
    link.classList.remove('active')

});
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
if (mainEl.innerHTML == "about") {
    mainEl.innerHTML = `<h1>About</h1>`;
} else {
mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;

}


});

