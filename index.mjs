import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 


// function result() {
//     var resultData = document.getElementById("phone-number").value;
//     console.log(resultData);
// }
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


const networkProv = [
        {
            name: 'mtn',
            prefs : [
                703, 706, 803, 806,
                810, 813, 816, 814,
                903
            ],
            logo : "https://upload.wikimedia.org/wikipedia/commons/3/3f/MTN-logo.jpg"
        },

        {
            name: 'etisalat',
            prefs : [
                809, 817, 818, 909
            ],
            logo : "https://dailypost.ng/wp-content/uploads/2017/07/9Mobile-Telecom-Logo.jpg.webp"
        },

    {   
        name : 'glo',
        prefs : [
            705, 805, 811, 807, 815,
            905
        ],
        logo : "https://brandcom.ng/wp-content/uploads/2020/11/Glo-Logo.jpg"
        },

    {
        name : 'airtel',
        prefs : [
            708, 802, 808, 812, 701,
            902
        ],
        logo : "https://logos-download.com/wp-content/uploads/2016/07/Airtel_logo_logotype_emblem.png"
        }

]

const contributors = [
    {
        name: "Taslim Owolarafe",
        github : ""
    },

]


// for (let networks of networkProv) {
//     console.log(networks.prefs);
//     // for (let network of networks) {
//     //     console.log(network);
//     //     // if (formProps.slice(1, 4) == network) {

//     //     // }
//     // }
    
// }


function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData)["phone-number"];
    console.log(formProps);
    
    for (let network of networkProv) {
        for (let pre of network.prefs) {
            if (formProps.slice(0, 4) == +234) {
                if (formProps.slice(4, 7) == pre) {
                    console.log(network.name);
                    document.getElementById("network-img").src = `${network.logo}`
                }
            }
            else if (formProps.slice(1, 4) == pre ) {
                console.log(network.name);
                document.getElementById("network-img").src = `${network.logo}`
            }  
        }
    }
  }



const numForm = document.getElementById("phone-form");
numForm.addEventListener("submit", handleSubmit);
