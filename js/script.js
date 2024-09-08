import { data } from "../js/data.js";
const nav_log = document.querySelector(".nav_login");
const toggleMenuBtn = document.querySelector(".toggleMenuBtn");
const openMenuBtn = document.querySelector(".openMenuBtn");
const closeMenuBtn = document.querySelector(".closeMenuBtn");
const logo = document.querySelectorAll(".logo svg path")[0];
const innerCircle = document.querySelectorAll(".logo svg path")[1]
const circle = document.querySelector(".logo svg circle");
const filterBtns = document.querySelectorAll(".filterBtns li");
const FAQCont = document.querySelectorAll(".FAQ-list li");
const inputContainer = document.querySelector(".input_container");
const inputError = document.querySelector(".input_error");
const emailInput = document.querySelector(".email_input");
const submitBtn = document.querySelector(".submit_btn");
const filteredContentCont = document.querySelector(".filtered_content_cont")


toggleMenuBtn.addEventListener("click", () =>{
	console.log("clicked")

	if(nav_log.classList.contains("translate-y-[-100%]")) {
		nav_log.classList.remove("translate-y-[-100%]");
		nav_log.classList.add("translate-y-[0%]");
	}
	else if(nav_log.classList.contains("translate-y-[0%]")){
		nav_log.classList.remove("translate-y-[0%]")
		nav_log.classList.add("translate-y-[-100%]");
	};
	handleMenuBtns();
	setLogoAttribute();
});

function handleMenuBtns() {
	if(nav_log.classList.contains("translate-y-[-100%]")) {
		closeMenuBtn.style.display = "none";
		openMenuBtn.style.display = "block"
	}
	else {
		closeMenuBtn.style.display = "block";
		openMenuBtn.style.display = "none"
	}
}

function setLogoAttribute() {
	if(logo.getAttribute("fill") === '#242A45' && circle.getAttribute("fill") === '#5267DF') {
		logo.setAttribute("fill", "#ffff")
		innerCircle.setAttribute("fill", "#252b46")
		circle.setAttribute("fill", "#ffff")
	}
	else {
		logo.setAttribute("fill", "#242A45")
		innerCircle.setAttribute("fill", "#FFF")
		circle.setAttribute("fill", "#5267DF")
	}
}

/* Filtering section */


filterBtns.forEach(each =>{
	each.addEventListener("click", (e) => {
		handlwFiltering(e)
		handleFiltering(e.target.innerHTML)
	})
})
function handlwFiltering (e) {
	filterBtns.forEach(each => {
		each.children.item(1).classList.remove("underLine");
		/* console.log(each.children.item(1)) */
	});
	e.currentTarget.children.item(1).classList.add("underLine");
	/* console.log(e.currentTarget) */
}

/* FAQ section */

FAQCont.forEach((each) => {
	each.addEventListener("click", (e) =>{
		handleFaq(e)
	})
})

function handleFaq(e) {
	e.currentTarget.classList.toggle("publish");
}

/* Form validation section */


submitBtn.addEventListener("click", (e) => {
	const isValid = /^\S+@\S+$/g
	e.preventDefault()
	handleFormValidation(isValid)
})

function handleFormValidation(isValid) {
	if(isValid.test(emailInput.value)) {
		inputContainer.classList.add("is-success");
		inputContainer.classList.add("bg-green-600");
		inputContainer.classList.remove("is-error");
		inputError.innerHTML = "Sign in was successful";
	}
	else {
		inputContainer.classList.add("is-error");
		inputContainer.classList.add("bg-SoftRed")
	}
}

let filteredContentContHTML = ``
 
data.forEach((each) => {
	console.log(each)
})

function handleFiltering(btnValue) {
	if(btnValue.trim() === "Simpale Bookmarking") {
			filteredContentContHTML = `
			<div 
       class="
       filtered_content
       mt-16
       md:flex
       md:justify-between
       md:gap-4
       ">
         <div 
         class="
         relative
         flex
         items-center
         justify-center
         flex-1
         -z-50
         overflow-hidden
         py-16
         px-8
         "
         >
         <img
         class="
         "
          src="${data[0].img}" alt="SVG">
         <span 
         class="
         imgShadow
         absolute
         top-24
         left-0
         md:-translate-x-20
         -z-10
         bg-SoftBlue
         w-[75%]
         md:w-full
         h-[80%]
         rounded-r-full
         ">
         </span>
         </div>

         <div 
           class="
           contentInfo
           flex-1
           flex
           flex-col
           justify-center
           ">
     <h2
     class="
     text-4xl
     text-center
     mt-8
     md:text-left
     md:text-5xl
     font-semibold
     "
     >
		 ${data[0].header}
		 </h2>
     <p
     class="
     text-center
     mt-8
     text-GrayishBlue
     font-semibold
     md:text-left
     px-8
     "
     >
		 ${data[0].para}
     </p>
    <button
    class="
    hidden
    md:block
    bg-SoftBlue
    mx-auto
    py-2
    px-4
    mt-8
    rounded-lg
    text-white
    font-semibold
    border-2
    border-SoftBlue
    hover:bg-white
    hover:text-SoftBlue
    "
    >More info
   </button>
   </div>

 	</div>`
	filteredContentCont.innerHTML = filteredContentContHTML
	}
	else if(btnValue.trim() === "Speedy Searching") {
		filteredContentContHTML = `
		<div 
		 class="
		 filtered_content
		 mt-16
		 md:flex
		 md:justify-between
		 md:gap-4
		 ">
			 <div 
			 class="
			 relative
			 flex
			 items-center
			 justify-center
			 flex-1
			 -z-50
			 overflow-hidden
			 py-16
			 px-8
			 "
			 >
			 <img
			 class="
			 "
				src="${data[1].img}" alt="SVG">
			 <span 
			 class="
			 imgShadow
			 absolute
			 top-24
			 left-0
			 md:-translate-x-20
			 -z-10
			 bg-SoftBlue
			 w-[75%]
			 md:w-full
			 h-[80%]
			 rounded-r-full
			 ">
			 </span>
			 </div>

			 <div 
				 class="
				 contentInfo
				 flex-1
				 flex
				 flex-col
				 justify-center
				 ">
	 <h2
	 class="
	 text-4xl
	 text-center
	 mt-8
	 md:text-left
	 md:text-5xl
	 font-semibold
	 "
	 >
	 ${data[1].header}
	 </h2>
	 <p
	 class="
	 text-center
	 mt-8
	 text-GrayishBlue
	 font-semibold
	 md:text-left
	 px-8
	 "
	 >
	 ${data[1].para}
	 </p>
	<button
	class="
	hidden
	md:block
	bg-SoftBlue
	mx-auto
	py-2
	px-4
	mt-8
	rounded-lg
	text-white
	font-semibold
	border-2
	border-SoftBlue
	hover:bg-white
	hover:text-SoftBlue
	"
	>More info
 </button>
 </div>

 </div>`
	filteredContentCont.innerHTML = filteredContentContHTML
	}
	else if(btnValue.trim() === "Easy Sharing") {
		filteredContentContHTML = `
		<div 
		 class="
		 filtered_content
		 mt-16
		 md:flex
		 md:justify-between
		 md:gap-4
		 ">
			 <div 
			 class="
			 relative
			 flex
			 items-center
			 justify-center
			 flex-1
			 -z-50
			 overflow-hidden
			 py-16
			 px-8
			 "
			 >
			 <img
			 class="
			 "
				src="${data[2].img}" alt="SVG">
			 <span 
			 class="
			 imgShadow
			 absolute
			 top-24
			 left-0
			 md:-translate-x-20
			 -z-10
			 bg-SoftBlue
			 w-[75%]
			 md:w-full
			 h-[80%]
			 rounded-r-full
			 ">
			 </span>
			 </div>

			 <div 
				 class="
				 contentInfo
				 flex-1
				 flex
				 flex-col
				 justify-center
				 ">
	 <h2
	 class="
	 text-4xl
	 text-center
	 mt-8
	 md:text-left
	 md:text-5xl
	 font-semibold
	 "
	 >
	 ${data[2].header}
	 </h2>
	 <p
	 class="
	 text-center
	 mt-8
	 text-GrayishBlue
	 font-semibold
	 md:text-left
	 px-8
	 "
	 >
	 ${data[2].para}
	 </p>
	<button
	class="
	hidden
	md:block
	bg-SoftBlue
	mx-auto
	py-2
	px-4
	mt-8
	rounded-lg
	text-white
	font-semibold
	border-2
	border-SoftBlue
	hover:bg-white
	hover:text-SoftBlue
	"
	>More info
 </button>
 </div>

 </div>`
	filteredContentCont.innerHTML = filteredContentContHTML
	}

}






