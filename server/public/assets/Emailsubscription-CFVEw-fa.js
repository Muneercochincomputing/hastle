import{j as e,r as a}from"./index-Org0v9Gv.js";import{a as x}from"./axios-DsPaXkF5.js";function m(){return e.jsx("div",{})}const h=a.forwardRef((d,o)=>{const[t,r]=a.useState(""),[i,l]=a.useState(!1),n=async()=>{const s="https://holistic-careservices.co.uk/";if(!t||!/\S+@\S+\.\S+/.test(t)){alert("Please enter a valid email address.");return}const c={email:t};try{l(!0),await x.post(`${s}/subscribers/`,c),console.log("Success"),r(""),alert("Contact submitted successfully")}catch(u){console.error("Error contact submission, try later:",u),alert("Error submitting contact, please try later.")}finally{l(!1)}};return e.jsxs("div",{ref:o,children:[e.jsx("div",{className:"bg-gradient-to-r from-primary mt-10 to-primary py-20 px-6 relative font-[sans-serif]",children:e.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[e.jsx("h2",{className:"text-white text-4xl font-extrabold",children:"Subscribe to Our Newsletter"}),e.jsx("div",{className:"my-6",children:e.jsx("p",{className:"text-base text-gray-200",children:"Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!"})}),e.jsxs("div",{className:"max-w-2xl mx-auto w-full bg-white p-5 flex items-center shadow-lg",children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full bg-gray-50 py-3.5 px-4 text-gray-800 text-base focus:outline-none",value:t,onChange:s=>r(s.target.value)}),e.jsx("button",{className:"bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold tracking-wide py-3.5 px-6 focus:outline-none",onClick:n,disabled:!t||i,children:i?"Submitting...":"Subscribe"})]})]})}),e.jsx("div",{className:"w-[200px] h-[200px] hidden",children:e.jsx(m,{})})]})});export{h as E};
