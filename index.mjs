import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const notFound = document.querySelector('.not-found');
const contributorsList = document.querySelector('.circle-208');

var acceptedProviders = [703, 706, 803, 806, 810, 813, 816, 814, 903, 809, 817, 818, 909, 705, 805, 811, 807, 815, 905, 708, 802, 808, 812, 701, 902]

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

class Contributor {
    constructor(name, email, github) {
        this.name = name,
        this.github = github,
        this.email = email
    }
}

const contributors = [
<<<<<<< HEAD
  new Contributor("Taslim Owolarafe", 
  "owolarafetaslim@gmail.com",
  "https://github.com/TaslimOwolarafe"),
  new Contributor("Motunrayo Ilawole",       
  "tunrayoilawole99@gmail.com", 
  "https://github.com/TunrayoIlawole")

]

for (let contributor of contributors) {
    contributorsList.innerHTML += `      
    <li class="members"> 
        <h5>${contributor.name}</h5>                    
        <a href="${contributor.github}" class="github-link"><i class="fa-brands fa-github"></i></a>
    </li>`;
}


=======
    new Contributor("Taslim Owolarafe", 
    "owolarafetaslim@gmail.com",
    "https://github.com/TaslimOwolarafe"),
    
    new Contributor("Esther Ibeh", "")

]

async function getData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}
>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData)["phone-number"];
<<<<<<< HEAD
    console.log(formProps);

  if (!acceptedProviders.includes(formProps.slice(1, 4)))   {
    notFound.classList.add('show');
    document.getElementById("network-img").src = `https://i.pinimg.com/736x/47/fa/6d/47fa6d9454b031cdb3b8774273c20adf.jpg`;

  }
    
=======
    // console.log(formProps);

>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112
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
<<<<<<< HEAD
            } else {
							
						}
=======
            }
        }

        if (null) {
            break;
>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112
        }
        
    }

  }



const numForm = document.getElementById("phone-form");
numForm.addEventListener("submit", handleSubmit);


<<<<<<< HEAD
=======




>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.insertBefore(a, document.querySelector("#submit"));
        for (i = 0; i < arr.length; i++) {
          console.log(arr[i]);
            var num1 = String(arr[i])
            
          if (num1.slice(0, val.length) == val) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + num1.substr(0, val.length) + "</strong>";
            b.innerHTML += num1.substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + num1 + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
<<<<<<< HEAD

			if (a.childNodes.length == 0) {
			a.style.height = "fit-content"
		}
=======
>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }


<<<<<<< HEAD
=======
var prefixes = [
    708, 802, 808, 812, 701, 902,
    705, 805, 811, 807, 815, 905,
    809, 817, 818, 909,
    703, 706, 803, 806,
    810, 813, 816, 814, 903
]

>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112
var allPrefixes = [
    
]

<<<<<<< HEAD
for (let num of acceptedProviders) {
=======
for (let num of prefixes) {
>>>>>>> 379aa453ddf3b406176d3632946948cdd5a92112
    allPrefixes.push(`+234${num}`);
    allPrefixes.push(`0${num}`);
}
console.log(allPrefixes)

autocomplete(document.getElementById("phone-number"), allPrefixes);