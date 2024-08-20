/*
// step 1
const mainE1 = document.querySelector('main')

// step 2
mainE1.style.backgroundColor = 'var(--main-bg)'

//step 3
mainE1.innerHTML = '<h1>DOM Manipulation</h1>'

//step 4- add flex class list
mainE1.setAttribute('class', 'flex-ctr')


// =============Part 2======================

// name and assign a top menu var
const topMenuE1 = document.getElementById('top-menu')
// Set the height of the topMenuEl element to be 100%
topMenuE1.style.height = '100%'
// Set the background color of TopMenuEL
topMenuE1.style.backgroundColor = 'var(--top-menu-bg)'
// Set flex to TopMenu
topMenuE1.setAttribute('class', 'flex-around')
 // ================Part 3 ============

 // Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  // adding the menuLink to the navbar
  menuLinks.forEach(link=>{
    const a = document.createElement('a')
    a.setAttribute('href', link.href)
    a.textContent = link.text

  })  */