import{r as t,j as e,L as s}from"./index-BHRO3trI.js";import{G as w,c as N,d as p,e as _}from"./index-DgTm_ohI.js";import y from"./Adminlogin-CKJYJUNd.js";const C="/assets/logo-D4XhCISP.png";function S(i){return w({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"},child:[]}]})(i)}const V=({onScrollToSubscription:i})=>{const[d,u]=t.useState(!1),[o,g]=t.useState(!1),[x,h]=t.useState(!1),[n,m]=t.useState(!1),l=t.useRef(null),a=t.useRef(null),f=()=>{u(!1)},b=()=>{g(!o)},j=()=>{h(!x)},v=()=>{m(!n)};return t.useEffect(()=>{const r=c=>{l.current&&!l.current.contains(c.target)&&h(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[l]),t.useEffect(()=>{const r=c=>{a.current&&!a.current.contains(c.target)&&m(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[a]),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:`shadow-md absolute z-40 w-full opacity-80 ${d&&"filter blur-sm"}`,children:[e.jsxs("div",{className:"bg-white flex justify-between items-center px-4 py-2 sm:px-8 sm:py-4 lg:flex hidden",children:[e.jsx(s,{to:"/",className:"font-bold text-2xl sm:text-3xl flex gap-2 items-center bg-[#7b1e5b]",children:e.jsx("img",{src:C,alt:"logo",className:"w-16 h-8 sm:w-40 sm:h-[55px] border-6 border-[#800080] shadow-bulge hover:shadow-xl transition-shadow duration-300 "})}),e.jsxs("div",{className:"hidden lg:flex xl:ml-40 gap-4",children:[e.jsxs(s,{to:"/",className:"font-bold text-[#bc3388] text-[17px] group [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",children:["HOME",e.jsx("div",{className:"bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500 "})]}),e.jsxs(s,{to:"/about",className:"font-bold text-[#bc3388] text-[17px] group [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",children:["ABOUT US",e.jsx("div",{className:"bg-amber-500 h-[1px] w-0 group-hover:w-[80px] transition-all duration-500"})]}),e.jsxs("div",{className:"relative",ref:l,children:[e.jsx("button",{onClick:j,className:"font-bold text-[#bc3388] text-[17px] flex items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",children:"OUR SERVICES"}),e.jsx("div",{className:"bg-amber-500 h-[1px] w-0 group-hover:w-[115px] transition-all duration-500"}),x&&e.jsxs("div",{className:"absolute left-0 mt-2 w-48 bg-[#bc3388] shadow-md rounded-md py-2 z-50",children:[e.jsx(s,{to:"/service1",className:"block px-4 py-2 text-white text-[15px] hover:bg-white hover:text-[#8D4374]",children:"Daily Support/Visiting Care Services"}),e.jsx(s,{to:"/service3",className:"block px-4 py-2 text-white text-[15px] hover:bg-gray-200 hover:text-[#8D4374]",children:"Live-in Care"}),e.jsx(s,{to:"/service4",className:"block px-4 py-2 text-white text-[15px] hover:bg-gray-200 hover:text-[#8D4374]",children:"Specialised Care"})]})]}),e.jsxs(s,{to:"/careerspage",className:"font-bold text-[#bc3388] text-[17px] group [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",children:["CAREERS",e.jsx("div",{className:"bg-amber-500 h-[1px] w-0 group-hover:w-[70px] transition-all duration-500"})]}),e.jsxs(s,{to:"/blog",className:"font-bold text-[#bc3388] text-[17px] group [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",children:["BLOGS",e.jsx("div",{className:"bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500"})]}),e.jsxs(s,{to:"/contactpage",className:"font-bold text-[#bc3388] text-[17px] group [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",children:["CONTACT US",e.jsx("div",{className:"bg-amber-500 h-[1px] w-0 group-hover:w-[110px] transition-all duration-500"})]}),e.jsx("div",{className:"flex ml-2 md:hidden lg:hidden xl:flex border-solid border-[2px] border-white bg-white rounded-full",children:e.jsx(s,{to:"/download",children:e.jsxs("div",{className:"text-[#bc3388] hover:cursor-pointer font-bold flex",children:[e.jsx(S,{className:"ml-12 font-bold",style:{width:"40px",height:"20px"}}),e.jsx("p",{children:"Download Brochure"})]})})})]}),e.jsx("button",{className:"group relative min-h-[50px] w-60 overflow-hidden border border-white bg-gradient-to-r from-[#bc3388] to-[#941d67] text-white transition-all duration-300 ease-in-out shadow-lg before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:duration-500 hover:text-[#8D4374] hover:bg-white hover:before:h-full hover:after:h-full rounded-full",onClick:i,children:e.jsx("span",{className:"absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-[#3c112e]",children:"Book Your Free Consultation"})})]}),e.jsxs("div",{className:"lg:hidden m-4 flex justify-between items-center px-4 py-2 bg-white shadow-md rounded-full",children:[e.jsx(s,{to:"/",className:"font-bold text-xl flex items-center bg-[#7b1e5b]",children:e.jsx("img",{src:C,alt:"logo",className:"w-14 h-7"})}),e.jsx("button",{onClick:b,className:"text-[#800080]",children:o?e.jsx(N,{size:28}):e.jsx(p,{size:28})})]}),o&&e.jsxs("div",{className:"lg:hidden flex flex-col gap-4 bg-white shadow-lg p-4 rounded-md mt-2",children:[e.jsx(s,{to:"/",className:"text-[#bc3388] font-bold",children:"Home"}),e.jsx(s,{to:"/about",className:"text-[#bc3388] font-bold",children:"About Us"}),e.jsxs("div",{className:"relative",ref:a,children:[e.jsxs("button",{onClick:v,className:"text-[#bc3388] font-bold flex items-center justify-between",children:["Our Services ",n?e.jsx(_,{}):e.jsx(p,{})]}),n&&e.jsxs("div",{className:"mt-2 bg-[#bc3388] rounded-md shadow-md py-2",children:[e.jsx(s,{to:"/service1",className:"block px-4 py-2 text-white",children:"Daily Support/Visiting Care Services"}),e.jsx(s,{to:"/service3",className:"block px-4 py-2 text-white",children:"Live-in Care"}),e.jsx(s,{to:"/service4",className:"block px-4 py-2 text-white",children:"Specialised Care"})]})]}),e.jsx(s,{to:"/careerspage",className:"text-[#bc3388] font-bold",children:"Careers"}),e.jsx(s,{to:"/blog",className:"text-[#bc3388] font-bold",children:"Blogs"}),e.jsx(s,{to:"/contactpage",className:"text-[#bc3388] font-bold",children:"Contact Us"})]}),d&&e.jsx(y,{onClose:f})]})})},L="/assets/foterlogo-_BnglJ97.png",Z=()=>e.jsxs("footer",{className:"bg-zinc-50 text-center text-surface/75 dark:bg-[#a43579] dark:text-white/75 lg:text-left ",children:[e.jsx("div",{className:"flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between",children:e.jsx("div",{className:"me-12 hidden lg:block",children:e.jsx("span",{children:"Get connected with us on social networks:"})})}),e.jsx("div",{className:"mx-6 py-10 text-center md:text-left",children:e.jsxs("div",{className:"grid grid-1 gap-8 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{children:[e.jsx("img",{src:L,className:"w-40 sm:ml-0  ml-[90px]",alt:"Logo"}),e.jsx("h6",{className:"mb-4 flex items-center justify-center font-semibold uppercase md:justify-start",children:"Holistic Care Services"})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-4 flex justify-center font-semibold uppercase md:justify-start",children:"Services"}),e.jsx("p",{className:"mb-4",children:e.jsxs(s,{to:"/service1",className:"p-2 px-4 group",href:"#",children:["Visiting Care Services",e.jsx("div",{class:"bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"})]})}),e.jsx("p",{className:"mb-4"}),e.jsx("p",{className:"mb-4",children:e.jsxs(s,{to:"/service3",className:"p-2 px-4 group",href:"#",children:["Live in Care",e.jsx("div",{class:"bg-amber-500 h-[1px] w-0 group-hover:w-[200px] transition-all duration-500"})]})}),e.jsx("p",{children:e.jsxs(s,{to:"/service4",className:"p-2 px-4 group",href:"#",children:["Specialised Care",e.jsx("div",{class:"bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"})]})})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-4 flex justify-center font-semibold uppercase md:justify-start lg:ml-20",children:"Useful Links"}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-4 ",children:[e.jsx("div",{className:"lg:mr-20",children:e.jsxs(s,{to:"/privacypolicy",className:"p-2 xl:px-4 group sm:mb-4 lg:mb-0 xl:mb-4  relative z-10 ",children:["Privacy Policy",e.jsx("div",{className:"bg-amber-500 h-[2px] w-0 group-hover:w-[130px] transition-all duration-500"})]})}),e.jsx("div",{children:e.jsxs(s,{to:"/leagalnotice",className:"p-2 px-4 group relative z-10 mt-4 lg:mr-40",children:["Legal Notice",e.jsx("div",{className:"bg-amber-500 h-[2px] w-0 group-hover:w-[200px] transition-all duration-500"})]})})]})]}),e.jsx("div",{className:"lg:hidden h-10"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-4 flex justify-center font-semibold uppercase  md:justify-start",children:"Contact"}),e.jsxs("p",{className:"mb-4 flex items-center justify-center md:justify-start",children:[e.jsx("span",{className:"me-3",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-5 w-5",children:[e.jsx("path",{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}),e.jsx("path",{d:"M12 5.432l8.159 8.159v6.198a1.875 1.875 0 01-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625A1.875 1.875 0 013.75 19.125v-6.198L12 5.432z"})]})}),"Unit A4, 25 Goodlass Road",e.jsx("br",{}),"Liverpool, L24 9HJ, UK"]}),e.jsxs("p",{className:"mb-4 flex items-center justify-center md:justify-start",children:[e.jsx("span",{className:"me-3",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-5 w-5",children:[e.jsx("path",{d:"M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"}),e.jsx("path",{d:"M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"})]})}),"office@holistic-careservices.co.uk",e.jsx("br",{}),"recruitment@holistic-careservices.co.uk"]}),e.jsxs("p",{className:"mb-4 flex items-center justify-center md:justify-start",children:[e.jsx("span",{className:"me-3",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-5 w-5",children:e.jsx("path",{fillRule:"evenodd",d:"M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",clipRule:"evenodd"})})}),"0151 665 0520"]}),e.jsxs("div",{class:"bg-[#a43579] w-full h-auto py-2 flex lg:items-start items-center lg:justify-start  justify-center gap-4 flex-wrap",children:[e.jsx(s,{to:"https://www.facebook.com/holisticcareservicesliverpool?mibextid=ZbWKwL",children:e.jsx("button",{class:"w-10 h-10 flex items-center justify-center rounded-lg bg-white  shadow-md shadow-gray-200 group transition-all duration-300",children:e.jsx("svg",{class:"transition-all duration-300 group-hover:scale-110",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 72 72",fill:"none",children:e.jsx("path",{d:"M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z",fill:"#337FFF"})})})}),e.jsx(s,{to:"https://www.instagram.com/holisticcareservicesliverpool?igsh=MWZjaTR2NWxyZTlkcA==",children:e.jsx("button",{class:"w-10 h-10 flex items-center justify-center group rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300",children:e.jsxs("svg",{class:"transition-all duration-300 group-hover:scale-110",width:"28",height:"28",viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M27.4456 35.7808C27.4456 31.1786 31.1776 27.4468 35.7826 27.4468C40.3875 27.4468 44.1216 31.1786 44.1216 35.7808C44.1216 40.383 40.3875 44.1148 35.7826 44.1148C31.1776 44.1148 27.4456 40.383 27.4456 35.7808ZM22.9377 35.7808C22.9377 42.8708 28.6883 48.618 35.7826 48.618C42.8768 48.618 48.6275 42.8708 48.6275 35.7808C48.6275 28.6908 42.8768 22.9436 35.7826 22.9436C28.6883 22.9436 22.9377 28.6908 22.9377 35.7808ZM46.1342 22.4346C46.1339 23.0279 46.3098 23.608 46.6394 24.1015C46.9691 24.595 47.4377 24.9797 47.9861 25.2069C48.5346 25.4342 49.1381 25.4939 49.7204 25.3784C50.3028 25.2628 50.8378 24.9773 51.2577 24.5579C51.6777 24.1385 51.9638 23.6041 52.0799 23.0222C52.1959 22.4403 52.1367 21.8371 51.9097 21.2888C51.6828 20.7406 51.2982 20.2719 50.8047 19.942C50.3112 19.6122 49.7309 19.436 49.1372 19.4358H49.136C48.3402 19.4361 47.5771 19.7522 47.0142 20.3144C46.4514 20.8767 46.1349 21.6392 46.1342 22.4346ZM25.6765 56.1302C23.2377 56.0192 21.9121 55.6132 21.0311 55.2702C19.8632 54.8158 19.0299 54.2746 18.1538 53.4002C17.2777 52.5258 16.7354 51.6938 16.2827 50.5266C15.9393 49.6466 15.533 48.3214 15.4222 45.884C15.3009 43.2488 15.2767 42.4572 15.2767 35.781C15.2767 29.1048 15.3029 28.3154 15.4222 25.678C15.5332 23.2406 15.9425 21.918 16.2827 21.0354C16.7374 19.8682 17.2789 19.0354 18.1538 18.1598C19.0287 17.2842 19.8612 16.7422 21.0311 16.2898C21.9117 15.9466 23.2377 15.5406 25.6765 15.4298C28.3133 15.3086 29.1054 15.2844 35.7826 15.2844C42.4598 15.2844 43.2527 15.3106 45.8916 15.4298C48.3305 15.5408 49.6539 15.9498 50.537 16.2898C51.7049 16.7422 52.5382 17.2854 53.4144 18.1598C54.2905 19.0342 54.8308 19.8682 55.2855 21.0354C55.6289 21.9154 56.0351 23.2406 56.146 25.678C56.2673 28.3154 56.2915 29.1048 56.2915 35.781C56.2915 42.4572 56.2673 43.2466 56.146 45.884C56.0349 48.3214 55.6267 49.6462 55.2855 50.5266C54.8308 51.6938 54.2893 52.5266 53.4144 53.4002C52.5394 54.2738 51.7049 54.8158 50.537 55.2702C49.6565 55.6134 48.3305 56.0194 45.8916 56.1302C43.2549 56.2514 42.4628 56.2756 35.7826 56.2756C29.1024 56.2756 28.3125 56.2514 25.6765 56.1302ZM25.4694 10.9322C22.8064 11.0534 20.9867 11.4754 19.3976 12.0934C17.7518 12.7316 16.3585 13.5878 14.9663 14.977C13.5741 16.3662 12.7195 17.7608 12.081 19.4056C11.4626 20.9948 11.0403 22.8124 10.9191 25.4738C10.7958 28.1394 10.7676 28.9916 10.7676 35.7808C10.7676 42.57 10.7958 43.4222 10.9191 46.0878C11.0403 48.7494 11.4626 50.5668 12.081 52.156C12.7195 53.7998 13.5743 55.196 14.9663 56.5846C16.3583 57.9732 17.7518 58.8282 19.3976 59.4682C20.9897 60.0862 22.8064 60.5082 25.4694 60.6294C28.138 60.7506 28.9893 60.7808 35.7826 60.7808C42.5759 60.7808 43.4286 60.7526 46.0958 60.6294C48.759 60.5082 50.5774 60.0862 52.1676 59.4682C53.8124 58.8282 55.2066 57.9738 56.5989 56.5846C57.9911 55.1954 58.8438 53.7998 59.4842 52.156C60.1026 50.5668 60.5268 48.7492 60.6461 46.0878C60.7674 43.4202 60.7956 42.57 60.7956 35.7808C60.7956 28.9916 60.7674 28.1394 60.6461 25.4738C60.5248 22.8122 60.1026 20.9938 59.4842 19.4056C58.8438 17.7618 57.9889 16.3684 56.5989 14.977C55.2088 13.5856 53.8124 12.7316 52.1696 12.0934C50.5775 11.4754 48.7588 11.0514 46.0978 10.9322C43.4306 10.811 42.5779 10.7808 35.7846 10.7808C28.9913 10.7808 28.138 10.809 25.4694 10.9322Z",fill:"url(#paint0_radial_7092_54471)"}),e.jsx("path",{d:"M27.4456 35.7808C27.4456 31.1786 31.1776 27.4468 35.7826 27.4468C40.3875 27.4468 44.1216 31.1786 44.1216 35.7808C44.1216 40.383 40.3875 44.1148 35.7826 44.1148C31.1776 44.1148 27.4456 40.383 27.4456 35.7808ZM22.9377 35.7808C22.9377 42.8708 28.6883 48.618 35.7826 48.618C42.8768 48.618 48.6275 42.8708 48.6275 35.7808C48.6275 28.6908 42.8768 22.9436 35.7826 22.9436C28.6883 22.9436 22.9377 28.6908 22.9377 35.7808ZM46.1342 22.4346C46.1339 23.0279 46.3098 23.608 46.6394 24.1015C46.9691 24.595 47.4377 24.9797 47.9861 25.2069C48.5346 25.4342 49.1381 25.4939 49.7204 25.3784C50.3028 25.2628 50.8378 24.9773 51.2577 24.5579C51.6777 24.1385 51.9638 23.6041 52.0799 23.0222C52.1959 22.4403 52.1367 21.8371 51.9097 21.2888C51.6828 20.7406 51.2982 20.2719 50.8047 19.942C50.3112 19.6122 49.7309 19.436 49.1372 19.4358H49.136C48.3402 19.4361 47.5771 19.7522 47.0142 20.3144C46.4514 20.8767 46.1349 21.6392 46.1342 22.4346ZM25.6765 56.1302C23.2377 56.0192 21.9121 55.6132 21.0311 55.2702C19.8632 54.8158 19.0299 54.2746 18.1538 53.4002C17.2777 52.5258 16.7354 51.6938 16.2827 50.5266C15.9393 49.6466 15.533 48.3214 15.4222 45.884C15.3009 43.2488 15.2767 42.4572 15.2767 35.781C15.2767 29.1048 15.3029 28.3154 15.4222 25.678C15.5332 23.2406 15.9425 21.918 16.2827 21.0354C16.7374 19.8682 17.2789 19.0354 18.1538 18.1598C19.0287 17.2842 19.8612 16.7422 21.0311 16.2898C21.9117 15.9466 23.2377 15.5406 25.6765 15.4298C28.3133 15.3086 29.1054 15.2844 35.7826 15.2844C42.4598 15.2844 43.2527 15.3106 45.8916 15.4298C48.3305 15.5408 49.6539 15.9498 50.537 16.2898C51.7049 16.7422 52.5382 17.2854 53.4144 18.1598C54.2905 19.0342 54.8308 19.8682 55.2855 21.0354C55.6289 21.9154 56.0351 23.2406 56.146 25.678C56.2673 28.3154 56.2915 29.1048 56.2915 35.781C56.2915 42.4572 56.2673 43.2466 56.146 45.884C56.0349 48.3214 55.6267 49.6462 55.2855 50.5266C54.8308 51.6938 54.2893 52.5266 53.4144 53.4002C52.5394 54.2738 51.7049 54.8158 50.537 55.2702C49.6565 55.6134 48.3305 56.0194 45.8916 56.1302C43.2549 56.2514 42.4628 56.2756 35.7826 56.2756C29.1024 56.2756 28.3125 56.2514 25.6765 56.1302ZM25.4694 10.9322C22.8064 11.0534 20.9867 11.4754 19.3976 12.0934C17.7518 12.7316 16.3585 13.5878 14.9663 14.977C13.5741 16.3662 12.7195 17.7608 12.081 19.4056C11.4626 20.9948 11.0403 22.8124 10.9191 25.4738C10.7958 28.1394 10.7676 28.9916 10.7676 35.7808C10.7676 42.57 10.7958 43.4222 10.9191 46.0878C11.0403 48.7494 11.4626 50.5668 12.081 52.156C12.7195 53.7998 13.5743 55.196 14.9663 56.5846C16.3583 57.9732 17.7518 58.8282 19.3976 59.4682C20.9897 60.0862 22.8064 60.5082 25.4694 60.6294C28.138 60.7506 28.9893 60.7808 35.7826 60.7808C42.5759 60.7808 43.4286 60.7526 46.0958 60.6294C48.759 60.5082 50.5774 60.0862 52.1676 59.4682C53.8124 58.8282 55.2066 57.9738 56.5989 56.5846C57.9911 55.1954 58.8438 53.7998 59.4842 52.156C60.1026 50.5668 60.5268 48.7492 60.6461 46.0878C60.7674 43.4202 60.7956 42.57 60.7956 35.7808C60.7956 28.9916 60.7674 28.1394 60.6461 25.4738C60.5248 22.8122 60.1026 20.9938 59.4842 19.4056C58.8438 17.7618 57.9889 16.3684 56.5989 14.977C55.2088 13.5856 53.8124 12.7316 52.1696 12.0934C50.5775 11.4754 48.7588 11.0514 46.0978 10.9322C43.4306 10.811 42.5779 10.7808 35.7846 10.7808C28.9913 10.7808 28.138 10.809 25.4694 10.9322Z",fill:"url(#paint1_radial_7092_54471)"}),e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"paint0_radial_7092_54471",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(17.4144 61.017) scale(65.31 65.2708)",children:[e.jsx("stop",{offset:"0.09","stop-color":"#FA8F21"}),e.jsx("stop",{offset:"0.78","stop-color":"#D82D7E"})]}),e.jsxs("radialGradient",{id:"paint1_radial_7092_54471",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(41.1086 63.257) scale(51.4733 51.4424)",children:[e.jsx("stop",{offset:"0.64","stop-color":"#8C3AAA","stop-opacity":"0"}),e.jsx("stop",{offset:"1","stop-color":"#8C3AAA"})]})]})]})})}),e.jsx("button",{class:"w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300",children:e.jsxs("svg",{class:"transition-all duration-300 group-hover:scale-110",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 71 72",fill:"none",children:[e.jsx("path",{d:"M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z",fill:"#00D95F"}),e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z",fill:"#00D95F"})]})})]}),e.jsx("div",{className:"flex justify-center mt-10"})]})]})}),e.jsxs("div",{className:"bg-zinc-100 p-6 text-center dark:bg-[#a43579] dark:text-white/75",children:[e.jsx("span",{children:"© 2024 Copyright:"}),e.jsx("a",{className:"font-semibold text-neutral-600 dark:text-white/75",href:"#!",children:" Holistic Care Services"})]})]});export{Z as F,V as N};
