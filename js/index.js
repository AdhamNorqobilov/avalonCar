/** sidebar */
let customSidebarToggle = document.getElementById('custom-sidebar-toggle');
let customSidebar = document.getElementById('customSidebar');
let inCustomSidebarToggle = document.getElementById('in-custom-sidebar-toggle');

customSidebarToggle.onclick = function () {

    customSidebar.classList.toggle('sidebar-toggle')

}

inCustomSidebarToggle.onclick = function () {

    customSidebarToggle.click();

}


// for date
let date = new Date();

let year = date.getFullYear()
$('#years').text(year);

setTimeout(function () {

    $('.loader_bg').fadeToggle();

}, 1500);





/**scroll pages */

let sidebars = document.querySelectorAll('aside>ul>li');

function scrollView(idName) {
    let scrolling = document.getElementById(idName)
    scrolling.scrollIntoView({
        behavior: "smooth"
    })
}

sidebars.forEach(side => {

    side.onclick = () => {

        sidebars.forEach(s => {

            s.classList.remove('sideActive');

        })
        side.classList.add('sideActive');

        scrollView(side.dataset.li)
    
    }
})

let home = document.getElementById('home')
let about = document.getElementById('about')
let whyChoose = document.getElementById('why-choose')
let testimonial = document.getElementById('testimonial')
let contactUs = document.getElementById('contact-us')

let scrolls = [home, about, whyChoose, testimonial, contactUs];

window.onscroll = () => {

    scrolls.forEach((scroll, index) => {

        if (Math.abs(scroll.offsetTop - window.scrollY) < 50) {

            sidebars.forEach(side => {

                if (side.dataset.li === scrolls[index].id.valueOf()) {

                    sidebars.forEach(s => {

                        s.classList.remove('sideActive');

                    })

                    side.classList.add('sideActive')

                }
            })
        }
    })
}