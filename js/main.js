/*************************
*******Typography******
**************************/

@import url(http://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,700,100);
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,800,300,600,700);
@import url(http://fonts.googleapis.com/css?family=Abel);
 body {
    font-family: 'Roboto', sans-serif;
    background: ;
    position: relative;
    font-weight: 400px;
}
/*
div#carousel-example-generic{
    height: 250px;
width: 163px;
}
*/
.signupmsg{
    margin-bottom: 10px;
    color: #333;
    background: rgba(255, 146, 0, 0.39);
    padding: 10px;
    font-size: 125%;
    font-weight: 100;
}
.onlycursor:hover{
    cursor: pointer;
}
.cursor:hover {
    color: #DF041D !important;
    cursor: pointer;
}
.filterselected {
    background: black;
}
.tofirstup {
    text-transform: capitalize;
}
.showdiv {
    visibility: visible;
}
.hidediv {
    visibility: hidden;
}
.city {
    padding: 5px;
    color: #FFF;
    font-size: 15px;
    background: #049fb3;
    -webkit-appearance: initial;
    border: 0;
    text-transform: capitalize;
    /* font-weight: bold; */
}
/* .city:hover{
    color: orange;
} */
.area {
    position: absolute;
    margin-left: -8%;
    margin-top: -2% !important;
}
#login {
    margin-bottom: 30px;
    margin-top: 30px;
}
.mrt14 {
    margin-top: 14px;
}
.demo {
    color: red;
}
.searchrow {} #divsearch p {
    margin-left: 20px;
    margin-bottom: 10px !important;
    border-bottom: 1px solid white;
    width: 93%;
}
#divsearch p:hover {
    color: #049fb3;
    cursor: pointer;
    text-transform: capitalize;
}
.nosearch {
    visibility: hidden;
}
.yessearch {
    visibility: visible;
}
.searchdrop {
    background: rgba(255, 255, 255, 1);
    position: absolute;
    width: 78%;
    padding: 6px;
    margin-top: 2px;
    z-index: 1;
    color: #000;
    text-align: justify;
    font-size: 15px;
    text-transform: capitalize;
}
.fapadl {
    padding-left: 15px;
    text-transform: capitalize;
}
.fapadr {
    padding-right: 13px;
    text-transform: capitalize;
    font-size: 17px;
    color: #049fb3;
}
.msg {
    color: #333;
    background: rgba(255, 6, 16, 0.39);
    padding: 10px;
    font-size: 200%;
    font-weight: 100;
}
.subcat {
    background: #f0f0e9;
    height: 40px;
    border-radius: -0;
    color: grey;
    padding: 2px 10px;
    margin-bottom: 5px;
    -webkit-transition: all 0.5s;
}
.homecat {
    color: rgb(0, 0, 0);
}
.homecat:hover {
    color: orange;
}
/* .homecat{
    color: grey;
} */

.subcat:hover {
    background: #049fb3;
    color: white;
    text-decoration-color: white;
}
/*.subtext:hover{
    color: white;
} */

.subtext {
    position: absolute;
    margin-left: 20px;
    /* color: #043eb3; */
    color: black;
}
.mrt-80 {
    margin-top: -100px;
}
.mrd10 {
    margin-bottom: 10px;
}
/* CIRCLE HOVER */

/* .circlehover {
    width: 110px;
    height: 110px;
    text-align: center;
    color: white;
    font-size: 16px;
    padding: 10px;
    display: table;
    line-height: 1.4;
    background-color: #043eb3;
    position: relative;
    font-weight: 700;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
}
.circlehover[data-size="small"] {
    width: 80px;
    height: 80px;
    font-size: 14px;
    padding: 8px;
}
.circlehover[data-size="medium"] {
    width: 95px;
    height: 95px;
    font-size: 16px;
    padding: 10px;
}
.circlehover span {
    display: table-cell;
    vertical-align: middle;
    position: relative;
    z-index: 1;
}
.circlehover:before {
    content: '';
    position: absolute;
    top: 7px;
    left: 7px;
    background: #043eb3;
    width: 30px;
    height: 30px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.circlehover[data-position="top-left"]:before {
    top: 7px;
    left: 7px;
}
.circlehover[data-position="top-right"]:before {
    top: 7px;
    right: 7px;
    left: auto;
}
.circlehover[data-position="bottom-left"]:before {
    bottom: 7px;
    left: 7px;
    top: auto;
}
.circlehover[data-position="bottom-right"]:before {
    bottom: 7px;
    right: 7px;
    left: auto;
    top: auto;
}
.circlehover[data-position="top"]:before,
.circlehover[data-position="right"]:before,
.circlehover[data-position="left"]:before,
.circlehover[data-position="bottom"]:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.circlehover[data-position="top"]:before {
    top: -10px;
    left: 50%;
    margin-left: -15px;
}
.circlehover[data-position="right"]:before {
    top: 50%;
    right: -10px;
    left: auto;
    margin-top: -15px;
}
.circlehover[data-position="left"]:before {
    top: 50%;
    left: -10px;
    margin-top: -15px;
}
.circlehover[data-position="bottom"]:before {
    bottom: -10px;
    left: 50%;
    margin-left: -15px;
    top: auto;
}
.circlehover[data-position="bottom-right"] {
    -webkit-box-shadow: -3px -3px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -3px -3px 1px rgba(0, 0, 0, 0.5);
    box-shadow: -3px -3px 1px rgba(0, 0, 0, 0.5);
}
.circlehover:hover {
    color: #fff;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
}
.circlehover[data-position="bottom-right"]:hover {
    -webkit-box-shadow: -5px -5px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -5px -5px 1px rgba(0, 0, 0, 0.5);
    box-shadow: -5px -5px 1px rgba(0, 0, 0, 0.5);
}
.circlehover[data-align="left"] {
    float: left;
}
.circlehover[data-align="right"] {
    float: right;
}
.circlehover {
    -webkit-transition: all 400ms cubic-bezier(0.680, 0, 0.265, 1);
    older webkit
    -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    easeInOutBack
    -webkit-transition-timing-function: cubic-bezier(0.680, 0, 0.265, 1);
    older webkit
    -webkit-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    easeInOutBack
}
home number

.circlehover.with-symbol > span.text {} .circlehover.with-symbol > span.symbol {
    opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    line-height: 136px;
}
.circlehover.with-symbol:hover > span.text {
    opacity: 0;
    filter: alpha(opacity=0);
}
.circlehover.with-symbol:hover > span.symbol {
    opacity: 1;
    filter: alpha(opacity=100);
    margin-top: -10px;
} */

/** Scroll to top button **/
#totop {height:9px; opacity:0; filter:alpha(opacity=0); position:fixed; right:-50px;  width:49px; z-index:9999; display:block; top:85%; background-image:url("../images/arrow_totop.png"); background-repeat:no-repeat; background-position:center 15px; background-color:#404040; font-size: 9px; font-weight: 900; color: #fff; text-align: center; line-height: 1; padding: 28px 0 12px 0; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px; }
#totop.on { right:10px; opacity:0.7; filter:alpha(opacity=70);}
#totop.off{right:-59px}
#totop:hover { opacity:1; filter:alpha(opacity=100)}
/* css transitions - reducing transitions lines */
nav#main_menu li a,
.topnav li.drop .pPanel,
#totop,
.info_pop .buyit,
.playVideo span,
.theHoverBorder,
.hoverBorder h6,
.slidingDetails .details,
.slidingDetails,
.partners_carousel li a,
.hoverBorder:hover img,
.feature_box.style3 .box,
.services_box .icon,
.css3accordion>ul>li .thumb,
.gobox, .hover-box,
.circlehover span,
.process_box,
#sidebar ul.menu li a,
.timeline_box,
.timeline_box:hover .date,
.services_box.style2 .box,
.team_member,
.ptcarousel .controls > a,
.shop-features .shop-feature {
-webkit-transition: all 0.2s ease-out; -moz-transition: all 0.2s ease-out; -o-transition: all 0.2s ease-out; -ms-transition: all 0.2s ease-out; transition: all 0.2s ease-out;}

.circlehover{
    background: orange;
}
.subfa {
    margin-right: 7px;
    margin-top: 7px;
}
.mediumimage {
    width: 249px !important;
    border: 1px solid #000;
    margin-left: 8px;
    height: 198px !important;
}
.fa-linkedin {
    background: rgba(255, 69, 24, 0.3);
}
.fa-twitter {
    background: rgba(91, 188, 236, 0.3);
    ;
}
.fa-facebook {
    background: rgba(0, 131, 201, 0.3);
}
.fa-dribbble {
    background: rgba(144, 201, 220, 0.3);
}
.fa-google-plus {
    background: rgba(206, 60, 45, 0.3);
}
.mrr {
    margin-right: 10px;
}
.searchformtext {
    padding-top: 11%;
    padding-bottom: 11%;
    padding-left: 2%;
}

.mr30 {
    margin: 30px !important;
}
.mrt30 {
    margin-bottom: 10px;
    width: 200px;
}
.mrt10 {
    margin-top: 10px;
}
.searchslider {
/*    position: absolute;*/
    
background: rgba(183, 187, 207, 0.78);
    /* height: 11%; */
/*    margin-top: 2%;*/
/*    width: 51%;*/
/*    margin-left: 17%;*/
    z-index: 1;
    box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.8);
}
ul li {
    list-style: none;
}
a:hover {
    outline: none;
    text-decoration: none;
}
a:focus {
    outline: none;
    outline-offset: 0;
}
a {
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Roboto', sans-serif;
}
.btn {
    padding: 8px 5px !important;
    font-size: small !important;
}
.btn:,
.btn:focus {
    outline: none;
    box-shadow: none;
    
}
.btn:hover, .btn:focus {
color: #fff;
text-decoration: none;
}
.navbar-toggle {
    background-color: #000;
}
a#scrollUp {
    bottom: 0px;
    right: 10px;
    padding: 5px 10px;
    background: #043eb3;
    color: #FFF;
    -webkit-animation: bounce 2s ease infinite;
    animation: bounce 2s ease infinite;
}
a#scrollUp i {
    font-size: 30px;
}
/*************************
*******Header CSS******
**************************/

.header_top {
    background: none repeat scroll 0 0 #F0F0E9;
}
.contactinfo ul li:first-child {
    margin-left: -15px;
}
.contactinfo ul li a {
    font-size: 12px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    background: #049fb3;
    border-radius: 0px;
    padding-left: 14px;
    margin-left: 10px;
}
.contactinfo ul li a:hover {
    background: inherit;
}
.social-icons ul li a {
    border: 0 none;
    border-radius: 0;
    color: #696763;
    padding: 0px;
}
.social-icons ul li {
    display: inline-block;
}
.social-icons ul li a i {
    padding: 11px 15px;
    transition: all 0.9s ease 0s;
    -moz-transition: all 0.9s ease 0s;
    -webkit-transition: all 0.9s ease 0s;
    -o-transition: all 0.9s ease 0s;
}
.social-icons ul li a i:hover {
    color: #fff;
    transition: all 0.9s ease 0s;
    -moz-transition: all 0.9s ease 0s;
    -webkit-transition: all 0.9s ease 0s;
    -o-transition: all 0.9s ease 0s;
}
.fa-facebook:hover {
    background: #0083C9;
}
.fa-twitter:hover {
    background: #5BBCEC;
}
.fa-linkedin:hover {
    background: #FF4518;
}
.fa-dribbble:hover {
    background: #90C9DC;
}
.fa-google-plus:hover {
    background: #CE3C2D;
}
.header-middle .container .row {
    /* border-bottom: 1px solid #f5f5f5; */
    padding-bottom: 20px;
    padding-top: 20px;
}
.header-middle .container .row .col-sm-4 {
    padding-left: 0;
}
.header-middle .container .row .col-sm-8 {
    padding-right: 0;
}
.usa {
    border-radius: 0;
    color: white;
    font-size: 12px;
    margin-right: 20px;
    padding: 2px 15px;
    margin-top: 10px;
}
.usa:hover {
    background: #043eb3;
    color: #fff;
    border-color: #043eb3;
}
.usa:active,
.usa.active {
    background: none repeat scroll 0 0 #043eb3;
    box-shadow: inherit;
    outline: 0 none;
}
.btn-group.open .dropdown-toggle {
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
}
.dropdown-menu li a:hover,
.dropdown-menu li a:focus {
    background-color: #043eb3;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}
.shop-menu ul li {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
}
.shop-menu ul li:last-child {
    padding-right: 0;
}
.shop-menu ul li a {
    background: rgba(5, 5, 5, 0.59);
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 6px 13px 7px 9px;
    /* padding-right: 0; */
    margin-top: 10px;
}
.shop-menu ul li a i {
    margin-right: 3px;
}
.shop-menu ul li a:hover {
    color: #022977;
    background: #fff;
}
.header-bottom {
    padding-bottom: 30px;
    padding-top: 30px;
}
.navbar-collapse.collapse {
    padding-left: 0;
}
.mainmenu ul li {
    padding-right: 15px;
    padding-left: 15px;
}
.mainmenu ul li:first-child {
    padding-left: 0px;
}
.mainmenu ul li a {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 300;
    padding: 0;
    padding-bottom: 10px;
}
.mainmenu ul li a:hover,
.mainmenu ul li a.active,
.shop-menu ul li a.active {
    background: none;
    color: #fdb45e;
}
.search_box input {
    background: #F0F0E9;
    border: medium none;
    color: #B2B2B2;
    font-family: 'roboto';
    font-size: 12px;
    font-weight: 300;
    height: 35px;
    outline: medium none;
    padding-left: 10px;
    width: 155px;
    background-image: url(../images/home/searchicon.png);
    background-repeat: no-repeat;
    background-position: 130px;
}
/*  Dropdown menu*/

.navbar-header .navbar-toggle .icon-bar {
    background-color: #fff;
}
.nav.navbar-nav > li:hover > ul.sub-menu {
    display: block;
    -webkit-animation: fadeInUp 400ms;
    -moz-animation: fadeInUp 400ms;
    -ms-animation: fadeInUp 400ms;
    -o-animation: fadeInUp 400ms;
    animation: fadeInUp 400ms;
}
ul.sub-menu {
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    list-style: none;
    padding: 0;
    margin: 0;
    width: 220px;
    -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 999;
}
.dropdown ul.sub-menu li .active {
    color: #FDB45E;
    padding-left: 0;
}
.navbar-nav li ul.sub-menu li {
    padding: 10px 20px 0;
}
.navbar-nav li ul.sub-menu li:last-child {
    padding-bottom: 20px;
}
.navbar-nav li ul.sub-menu li a {
    color: #fff;
}
.navbar-nav li ul.sub-menu li a:hover {
    color: #FDB45E;
}
.fa-angle-down {
    padding-left: 5px;
}
@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
/*************************
*******Footer CSS******
**************************/

#footer {
    background: #F0F0E9;
}
.footer-top .container {
    border-bottom: 1px solid #E0E0DA;
    padding-bottom: 20px;
}
.companyinfo {
    margin-top: 57px;
}
.companyinfo h2 {
    color: #B4B1AB;
    font-family: abel;
    font-size: 27px;
    text-transform: uppercase;
}
.companyinfo h2 span {
    color: #043eb3;
}
.companyinfo p {
    color: #B3B3AD;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 300;
}
.footer-top .col-sm-3 {
    overflow: hidden;
}
.video-gallery {
    margin-top: 57px;
    position: inherit;
}
.video-gallery a img {
    height: 100%;
    width: 100%;
}
.iframe-img {
    position: relative;
    display: block;
    height: 61px;
    margin-bottom: 10px;
    border: 2px solid #CCCCC6;
    border-radius: 3px;
}
.overlay-icon {
    position: absolute;
    top: 0;
    width: 100%;
    height: 61px;
    background: #043eb3;
    border-radius: 3px;
    color: #FFF;
    font-size: 20px;
    line-height: 0;
    display: block;
    opacity: 0;
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
}
.overlay-icon i {
    position: relative;
    top: 50%;
    margin-top: -20px;
}
.video-gallery a:hover .overlay-icon {
    opacity: 1;
}
.video-gallery p {
    color: #8C8C88;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 0px;
}
.video-gallery h2 {
    color: #8c8c88;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 0px;
}
.address {
    margin-top: 30px;
    position: relative;
    overflow: hidden;
}
.address img {
    width: 100%;
}
.address p {
    color: #666663;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    left: 25px;
    position: absolute;
    top: 50px;
}
.footer-widget {
    margin-bottom: 68px;
}
.footer-widget .container {
    border-top: 1px solid #FFFFFF;
    padding-top: 15px;
}
.single-widget h2 {
    color: #666663;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 22px;
    text-transform: uppercase;
}
.single-widget h2 i {
    margin-right: 15px;
}
.single-widget ul li a {
    color: #8C8C88;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 5px 0;
}
.single-widget ul li a i {
    margin-right: 18px;
}
.single-widget ul li a:hover {
    background: #049fb3;
    color: #FFFFFF;
    border-radius: 0px;
    /* padding: 8px; */
    padding-left: 22px;
    margin-left: -22px;
}
.searchform input {
    border: 1px solid #DDDDDD;
    color: #CCCCC6;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin-top: 0;
    outline: medium none;
    padding: 7px;
    width: 212px;
}
.searchform button {
    background: #049fb3;
    border: medium none;
    border-radius: 0;
    margin-left: -5px;
    margin-top: -3px;
    padding: 7px 17px !important;
    height: 36px;
}
.searchform button i {
    color: #FFFFFF;
    font-size: 20px;
}
.searchform button:hover,
.searchform button:focus {
    background-color: #026177;
}
/* .searchform p {

    color: #8C8C88;

    font-family: 'Roboto', sans-serif;

    font-size: 14px;

    font-weight: 300;

    margin-top: 25px;

}
 */

.footer-bottom {
    background: #D6D6D0;
    padding-top: 10px;
}
.footer-bottom p {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-left: 15px;
}
.footer-bottom p span a {
    color: #043eb3;
    font-style: italic;
    text-decoration: underline;
}
/*************************
******* Home ******
**************************/

#slider {
    padding-bottom: 45px;
}
.carousel-indicators li {
    background: #C4C4BE;
}
.carousel-indicators li.active {
    background: #043eb3;
}
.item {} .pricing {
    position: absolute;
    right: 40%;
    top: 52%;
}
.girl {
    margin-left: 0;
}
.item h1 {
    color: #B4B1AB;
    font-family: abel;
    font-size: 48px;
    margin-top: 115px;
}
.item h1 span {
    color: #043eb3;
}
.item h2 {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 22px;
    margin-top: 10px;
}
.item p {
    color: #363432;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
}
.get {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin-top: 23px;
}
.item button:hover {
    background: #043eb3;
}
.control-carousel {
    position: absolute;
    top: 50%;
    font-size: 60px;
    color: #C2C2C1;
}
.control-carousel:hover {
    color: #043eb3;
}
.right {
    right: 0;
}
.category-products {
    border: 1px solid #F7F7F0;
    margin-bottom: 34px;
    padding-bottom: 20px;
    padding-top: 16px;
    margin: 12px auto;
}
.left-sidebar h2,
.brands_products h2 {
    color: #049fb3;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 auto 30px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    z-index: 3;
}
.left-sidebar h2:after,
h2.title:after {
    content: " ";
    position: absolute;
    border: 1px solid #049fb3;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 0;
    z-index: -2;
}
.left-sidebar h2:before {
    content: " ";
    position: absolute;
    background: #fff;
    bottom: -6px;
    width: 130px;
    height: 30px;
    z-index: -1;
    left: 50%;
    margin-left: -65px;
}
h2.title:before {
    content: " ";
    position: absolute;
    background: #fff;
    bottom: -6px;
    width: 220px;
    height: 30px;
    z-index: -1;
    left: 50%;
    margin-left: -110px;
}
.category-products .panel {
    background-color: #FFFFFF;
    border: 0px;
    border-radius: 0px;
    box-shadow: none;
    margin-bottom: 0px;
}
.category-products .panel-default .panel-heading {
    background-color: #FFFFFF;
    border: 0 none;
    color: #FFFFFF;
    padding: 5px 20px;
}
.category-products .panel-default .panel-heading .panel-title a {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
    border-top: 0 none;
}
.category-products .badge {
    background: none;
    border-radius: 10px;
    color: #696763;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    min-width: 10px;
    padding: 3px 7px;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
}
.media.commnets {
    margin: 11px auto;
    /* padding-bottom: 20px; */
    background: rgba(70, 109, 157, 0.05);
    padding: 25px 11px;
    width: 1142px;
    padding-bottom: 0px;
}
.panel-body ul {
    padding-left: 20px;
}
.panel-body ul li a {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}

.brands-name .nav-stacked li a {
    background-color: #FFFFFF;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 5px 25px;
    text-decoration: none;
    text-transform: uppercase;
}
.brands-name .nav-stacked li a:hover {
    background-color: #fff;
    color: #696763;
}
.shipping {
    background-color: #F2F2F2;
    margin-top: 40px;
    overflow: hidden;
    padding-top: 20px;
    position: relative;
}
.price-range {
    margin-top: 30px;
}
.well {
    background-color: #FFFFFF;
    border: 1px solid #F7F7F0;
    border-radius: 4px;
    box-shadow: none;
    margin-bottom: 20px;
    min-height: 20px;
    padding: 35px;
}
.tooltip-inner {
    background-color: #043eb3;
    border-radius: 4px;
    color: #FFFFFF;
    max-width: 200px;
    padding: 3px 8px;
    text-align: center;
    text-decoration: none;
}
.tooltip.top .tooltip-arrow {
    border-top-color: #043eb3;
    border-width: 5px 5px 0;
    bottom: 0;
    left: 50%;
    margin-left: -5px;
}
.padding-right {
    padding-right: 0;
}
.features_items {
    overflow: hidden;
}
h2.title {
    color: #049fb3;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 15px;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
}
.product-image-wrapper {
    /* border:1px solid #F7F7F5; */
    overflow: hidden;
    margin-bottom: 30px;
}
.single-products {
    position: relative;
}
.new,
.sale {
    position: absolute;
    top: 0;
    right: 0;
}
.productinfo h2 {
    color: #043eb3;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
.product-overlay h2 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
.productinfo p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    padding-top: 14px;
}
.productinfo img {
    width: 100%;
    border-radius: 71px;
    border: 1px solid #F7F7F5;
}
.productinfo {
    position: relative;
}
.product-overlay {
    background: #043eb3;
    top: 0;
    display: none;
    height: 0;
    position: absolute;
    transition: height 500ms ease 0s;
    width: 100%;
    display: block;
    opacity: ;
}
.single-products:hover .product-overlay {
    display: block;
    height: 100%;
}
.product-overlay .overlay-content {
    bottom: 0;
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
}
.product-overlay .add-to-cart {
    background: #fff;
    border: 0 none;
    border-radius: 0;
    color: #043eb3;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 25px;
}
.product-overlay .add-to-cart:hover {
    background: #fff;
    color: #043eb3;
}
.product-overlay p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
}
.add-to-cart {
    background: #F5F5ED;
    border: 0 none;
    border-radius: 0;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 25px;
}
.add-to-cart:hover {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
}
.add-to {
    margin-bottom: 10px;
}
.add-to-cart i {
    margin-right: 5px;
}
.add-to-cart:hover {
    background: #043eb3;
    color: #FFFFFF;
}
.choose {
    border-top: 1px solid #F7F7F0;
}
.choose ul li a {
    color: #B3AFA8;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    padding-left: 0;
    padding-right: 0;
}
.choose ul li a i {
    margin-right: 5px;
}
.choose ul li a:hover {
    background: none;
    color: #043eb3;
}
.category-tab {
    overflow: hidden;
}
.category-tab ul {
    background: #40403E;
    border-bottom: 1px solid #043eb3;
    list-style: none outside none;
    margin: 0 0 30px;
    padding: 0;
    width: 100%;
}
.category-tab ul li a {
    border: 0 none;
    border-radius: 0;
    color: #B3AFA8;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
}
.category-tab ul li a:hover {
    background: #043eb3;
    color: #fff;
}
.nav-tabs li.active a,
.nav-tabs li.active a:hover,
.nav-tabs li.active a:focus {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #043eb3;
    border: 0px;
    color: #FFFFFF;
    cursor: default;
    margin-right: 0;
    margin-left: 0;
}
.nav-tabs li a {
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 4px 4px 0 0;
    line-height: 1.42857;
    margin-right: 0;
}
.recommended_items {
    overflow: hidden;
}
#recommended-item-carousel .carousel-inner .item {
    padding-left: 0;
}
.recommended-item-control {
    position: absolute;
    top: 41%;
}
.recommended-item-control i {
    background: none repeat scroll 0 0 #043eb3;
    color: #FFFFFF;
    font-size: 20px;
    padding: 4px 10px;
}
.recommended-item-control i:hover {
    background: #ccccc6;
}
.recommended_items h2 {} .our_partners {
    overflow: hidden;
}
.our_partners ul {
    background: #F7F7F0;
    margin-bottom: 50px;
}
.our_partners ul li a:hover {
    background: none;
}
/*************************
*******Shop CSS******
**************************/

#advertisement {
    padding-bottom: 45px;
}
#advertisement img {
    width: 100%;
}
.pagination {
    display: inline-block;
    margin-bottom: 25px;
    margin-top: 0;
    padding-left: 15px;
}
.pagination li:first-child a,
.pagination li:first-child span {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: 0;
}
.pagination li:last-child a,
.pagination li:last-child span {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.pagination .active a,
.pagination .active span,
.pagination .active a:hover,
.pagination .active span:hover,
.pagination .active a:focus,
.pagination .active span:focus {
    background-color: #043eb3;
    border-color: #043eb3;
    color: #FFFFFF;
    cursor: default;
    z-index: 2;
}
.pagination li a,
.pagination li span {
    background-color: #f0f0e9;
    border: 0;
    float: left;
    line-height: 1.42857;
    margin-left: -1px;
    padding: 6px 12px;
    position: relative;
    text-decoration: none;
    margin-right: 5px;
    color: #000;
}
.pagination li a:hover {
    background: #043eb3;
    color: #fff;
}
/*************************
*******Product Details CSS******
**************************/

.product-details {
    overflow: hidden;
}
#similar-product {
    margin-top: 40px;
}
#reviews {
    padding-left: 25px;
    padding-right: 25px;
}
.product-details {
    margin-bottom: 40px;
    overflow: hidden;
    margin-top: 10px;
}
.view-product {
    position: relative;
}
.view-product img {
    border: 1px solid #F7F7F0;
    height: 380px;
    width: 100%;
}
.view-product h3 {
    background: #043eb3;
    bottom: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
    padding: 8px 20px;
    position: absolute;
    right: 0;
}
#similar-product .carousel-inner .item {
    padding-left: 0px;
}
#similar-product .carousel-inner .item img {
    display: inline-block;
    margin-left: 15px;
}
.item-control {
    position: absolute;
    top: 35%;
}
.item-control i {
    background: #043eb3;
    color: #FFFFFF;
    font-size: 20px;
    padding: 5px 10px;
}
.item-control i:hover {
    background: #ccccc6;
}
.product-information {
    border: 1px solid #F7F7F0;
    overflow: hidden;
    padding-bottom: 60px;
    padding-left: 60px;
    padding-top: 60px;
    position: relative;
}
.newarrival {
    position: absolute;
    top: 0;
    left: 0
}
.product-information h2 {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-top: 0;
}
.product-information p {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
}
.product-information span {
    display: inline-block;
    margin-bottom: 8px;
    margin-top: 18px;
}
.product-information span span {
    color: #043eb3;
    float: left;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 0px;
}
.product-information span input {
    border: 1px solid #DEDEDC;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    height: 33px;
    outline: medium none;
    text-align: center;
    width: 50px;
}
.product-information span label {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-right: 5px;
}
.share {
    margin-top: 15px;
}
.cart {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 10px;
    margin-left: 20px;
}
.shop-details-tab {
    border: 1px solid #F7F7F0;
    margin-bottom: 75px;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
}
.shop-details-tab .col-sm-12 {
    padding-left: 0;
    padding-right: 0;
}
#reviews ul {
    background: #FFFFFF;
    border: 0 none;
    list-style: none outside none;
    margin: 0 0 20px;
    padding: 0;
}
#reviews ul li {
    display: inline-block;
}
#reviews ul li a {
    color: #696763;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding-right: 15px;
}
#reviews ul li a i {
    color: #043eb3;
    padding-right: 8px;
}
#reviews ul li a:hover {
    background: #fff;
    color: #043eb3;
}
#reviews p {
    color: #363432;
}
#reviews form span {
    display: block;
}
#reviews form span input {
    background: #F0F0E9;
    border: 0 none;
    color: #A6A6A1;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    outline: medium none;
    padding: 8px;
    width: 48%;
}
#reviews form span input:last-child {
    margin-left: 3%;
}
#reviews textarea {
    background: #F0F0E9;
    border: medium none;
    color: #A6A6A1;
    height: 195px;
    margin-bottom: 25px;
    margin-top: 15px;
    outline: medium none;
    padding-left: 10px;
    padding-top: 15px;
    resize: none;
    width: 99.5%;
}
#reviews button {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}
/*************************
*******404 CSS******
**************************/

.logo-404 {
    margin-top: 60px;
}
.content-404 h1 {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 41px;
    font-weight: 300;
}
.content-404 img {
    margin: 0 auto;
}
.content-404 p {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
}
.content-404 h2 {
    margin-top: 50px;
}
.content-404 h2 a {
    background: #043eb3;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 44px;
    font-weight: 300;
    padding: 8px 40px;
}
/*************************
*******login page CSS******
**************************/

#form {
    display: block;
    margin-bottom: 185px;
    margin-top: 185px;
    overflow: hidden;
}
 
.signup-form {
    text-align: center;
} 
.login-form h2,
.signup-form h2 {
    color: #FFFEFD;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
    background: #049fb3;
    text-align: center;
    padding: 10px;
    /* width: 310px; */
}
.login-form form input,
.signup-form form input {
    background: #F0F0E9;
    border: medium none;
    color: #696763;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    height: 40px;
    margin-bottom: 10px;
    outline: medium none;
    padding-left: 10px;
    width: 100%;
}
.login-form form span {
    line-height: 25px;
}
.login-form form span input {
    width: 15px;
    float: left;
    height: 15px;
    margin-right: 5px;
}
.login-form form button {
    margin-top: 23px;
}

.login-form form button,
.signup-form form button {
    background: #043eb3;
    border: medium none;
    border-radius: 0;
    color: #FFFFFF;
    display: block;
    font-family: 'Roboto', sans-serif;
    padding: 6px 25px;
    width: 100px;
    height: 36px;
}
.login-form label {} .login-form label input {
    border: medium none;
    display: inline-block;
    height: 0;
    margin-bottom: 0;
    outline: medium none;
    padding-left: 0;
}
.or {
    background: #049fb3;
    border-radius: 40px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    /* margin-top: 75px; */
    text-align: center;
    width: 50px;
    margin: 100px auto;
}
/*************************
*******Cart CSS******
**************************/

#do_action {
    margin-bottom: 50px;
}
.breadcrumbs {
    position: relative;
}
.breadcrumbs .breadcrumb {
    background: transparent;
    margin-bottom: 75px;
    padding-left: 0;
}
.breadcrumbs .breadcrumb li a {
    background: #043eb3;
    color: #FFFFFF;
    padding: 3px 7px;
}
.breadcrumbs .breadcrumb li a:after {
    content: "";
    height: auto;
    width: auto;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent #043eb3;
    position: absolute;
    top: 11px;
    left: 48px;
}
.productinfo .fa-3x:hover {
    border-bottom: 0px solid #026177;
    box-shadow: 3px 3px 5px 1px #aaa;
    /* border-top: 5px solid #E26C0B; */
}
.productinfo .fa-3x {
    font-size: 2em;
    -webkit-transition: all 0.5s ease;
    padding: 15px;
    background: #049fb3;
    color: white;
    border-radius: 3px;
    border-bottom: 5px solid #026177;
    height: 65px;
    width: 65px;
    text-align: center;
    /* box-shadow: 0px 2px 9px 1px #ccc; */
}
.carousel-inner>.item>img,
.carousel-inner>.item>a>img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
    line-height: 1;
}
.breadcrumbs .breadcrumb > li + li:before {
    content: ".";
}
.row .col-sm-8 .logo img {
    padding: 0px;
    margin-left: -15px;
}
.phone{
    font-size: 18px;
    font-weight: 600;
}
.homeimageright{
    width: 16%;
margin-top: 2%;
    float: right;
}
.homeimageleft{
    width: 16%;
margin-top: 2%;
    float: left;
}
.a{
    cursor: pointer;
}


.carousel-inner>.item>img, .carousel-inner>.items>a>img {
display: block;
height: auto;
max-width: 100%;
width: 100%;
line-height: 1;
height: 194px;
}

.formselop{
    background: #FFFFFF;

    /* border: medium none; */
color: #696763;
display: block;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 300;
height: 40px;
margin-bottom: 10px;
outline: medium none;
padding-left: 10px;

    width: 60%;
    border-radius: 0px;
}

.ng-invalid.ng-dirty { border: 1px solid red; }
.phone a:hover, a:focus {
color: #026177;
}

.text-enquiry textarea
{
    height: 100px;
width: 100%;
    margin-bottom: 10px;
}

.button-enquiry a
{
height: 35px;
width: 100px;
margin-bottom: 10px;
}

 .subcat h4
{
text-transform: capitalize;
}

/*angular tree demo*/

div[data-angular-treeview] {
  /* prevent user selection */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* default */
  font-family: Tahoma;
  font-size:13px;
  color: #555;
  text-decoration: none;
}

div[data-tree-model] ul {
  margin: 0;
  padding: 0;
  list-style: none; 
  border: none;
  overflow: hidden;
}

div[data-tree-model] li {
  position: relative;
  padding: 11px 0px 0px 0px;
  line-height: 20px;
}

div[data-tree-model] li .expanded {
  padding: 1px 10px;
  background-image: url("http://mafiawarloots.com/anyinform/lib/images/png/minus25.png");
  background-repeat: no-repeat;
}

div[data-tree-model] li .collapsed {
  padding: 1px 10px;
  background-image: url("http://mafiawarloots.com/anyinform/lib/images/png/add196.png");
  background-repeat: no-repeat;
}

div[data-tree-model] li .normal {
  padding: 0px 10px;
  background-image: url("http://mafiawarloots.com/anyinform/lib/images/png/minus25.png");
  background-repeat: no-repeat;
}

div[data-tree-model] li i, div[data-tree-model] li span {
  cursor: pointer;
}

div[data-tree-model] li .selected {
  background-color: #aaddff;
  font-weight: bold;
  padding: 1px 5px;
}

.st-facebook-counter {
width: 61px;
height: 50px;
}
span.stButton_gradient.stHBubble {
height: 22px;
}
.stButton .st-yahoo-counter, .stButton .st-linkedin-counter {
width: 60px;
height: 50px;
}

span.stMainServices.st-facebook-counter{
height: 50px;
}
span.stMainServices.st-twitter-counter {
height: 50px;
}
span.stMainServices.st-linkedin-counter {
height: 50px;
}
a.btn.btn-primary.mrr {
    /* border: none; */
    border-radius: 0px;
  
    padding: 12px;
    width: 104px;
    text-align: center;
    text-transform: uppercase;
    padding: 0px 4px;
    box-shadow: 0 4px #026177;  
    -webkit-box-shadow: 0 4px #026177;  
    -moz-box-shadow: 0 4px #026177;  
    -o-box-shadow: 0 4px #026177; 
}
.signup-form button:hover{

/* background-color: #049fb3; */


/* border-color: #285e8e; */


/* text-transform: uppercase; */
border-bottom: 0px solid #026177;  box-shadow: 3px 3px 5px 1px #aaa;

}
.media-heading {
margin: 0 0 13px;
}
.details-content {
    margin: 50px 9px 20px -18px;
    background: rgba(70, 109, 157, 0.05);
    /* margin-right: 15px; */
    padding: 10px 0px;
}
.more-text {
    padding: 17px 0px;
}

.more-text p {
    text-indent: 10px;
}
.fapd {
    text-indent: 0px;
    padding-left: 35px;
}

.fapd.fapad1 {
    color: rgb(194, 65, 65);
}

.fapd strong.fapadl.ng-binding.ng-scope {
    color: rgb(246, 93, 93);
}
.fapd p {
    padding-left: 59px;
    font-size: 20px;
    color: rgb(246, 93, 93);
}
.signup-form input {
margin: 20px auto;
width: 50%;
border-radius: 0px;
padding: 4px 12px;
}
.signup-form textarea {
margin: 20px auto;
width: 50%;
border-radius: 0px;
padding: 4px 12px;
height: 100px;
}
.signup-form button {
/* float: center; */
text-align: center;
width: 100px;
border-radius: 0px;
margin: 13px auto;
text-transform: uppercase;
color: #fff;
background-color: #049fb3;
border-color: #049fb3;
box-shadow: 0 4px #026177;
-webkit-box-shadow: 0 4px #026177;
-moz-box-shadow: 0 4px #026177;
-o-box-shadow: 0 4px #026177;
}
.pluginSkinLight.pluginFontHelvetica {
margin: 12px auto;
}
.fapd .fa-calendar {
    color: #049fb3;
}
.fapd i.fa.fa-clock-o{
    color: #049fb3;
}
.fapd i.fa.fa-money{
    color: #049fb3;
}
.social-btn{
margin:14px auto;
}
.btn-mail{
margin:43px auto;
}
.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default {
color: none;
background-color: none;
border-color: none;
}
ul.nav.navbar-nav .fa-user {
    color: #049fb3;
}
ul.nav.navbar-nav .fa-lock {
    color: #049fb3;
}
.single-widget p {
    margin: 23px auto;
    color: #8C8C88;
}
.btn-primary {
color: #fff;
background-color: #049fb3;
border-color: #049fb3;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
color: #fff;
background-color: #049fb3;
border-color: #049fb3;
}
a {
color: #049fb3;
text-decoration: none;
}
.recent-box .panel-default {
    width: 299px;
    height: auto;
    border-radius: 0px;
    margin-top: 30px;
}
.panel.panel-default img {
    width: 60px;
}
.panel.panel-default tr {
    border-bottom: 1px solid grey;
}
.recent-box .panel-heading {
text-align: center;
}
.recent-box .panel-default>.panel-heading {
color: #FFF;
background-color: #049fb3;
border-color: #049fb3;
}
.category .media {
    width: 850px;
    padding: 21px;
    /* padding-bottom: 0px; */
}
.cate-social {
    /* padding: 55px 0px; */
    padding: 84px 0px 0px;
}
.cat-btn a {
    margin: 16px auto;
}

.cat-aside div#accordian {
    border-color: #049fb3;
}
 a.cursor:hover {
    background: #049fb3;
    padding: 10px;
    color: #fff !important;
}
a.btn.btn-primary.mrr:hover {
    border-bottom: 0px solid #026177;  box-shadow: 3px 3px 5px 1px #aaa;
}
a.cursor.ng-binding.Sub.Mobile:hover {
    background: #049fb3;  padding: 10px;  color: #fff !important;
}
.contactinfo ul li a:hover {
font-size: 12px;
color: #049fb3;
font-family: 'Roboto', sans-serif;
background: #fff;
border-radius: 0px ;
padding-left: 14px;
margin-left: 10px;
    border-color:#049fb3;
}
option.onlycursor {
    background: #fff;
    color: #000;
    padding: 11px 4px 1px;
}
.list-back {
    /* border-right: 1px solid #049fb3; */
    background: rgba(70, 109, 157, 0.05);
    padding: 11px 0px 0px 23px;
}
.list-head {
    background: #049fb3;
    color: #fff;
    /* padding: 0px 0px 1px 27px; */
    /* vertical-align: -webkit-baseline-middle; */
}

.list-head h3 {
    font-size: 23px;
    padding: 10px;
}
.list-form {
    background: rgba(70, 109, 157, 0.05);
    /* float: left; */
    padding: 26px;
    margin: 77px auto;
    /* width: 571px; */
}
.signup-list{
background: rgba(70, 109, 157, 0.05);
/* float: left; */
padding: 26px;
margin: 77px auto;
}
.signup-list input {
    width: 268px;
    border-radius: 0px;
    margin-bottom: 30px;
}
span.list-select {
    color: red;
    font-size: 12px;
    text-align: justify;
    letter-spacing: 1px;
}
.signup-list button {
border-radius: 0px;
padding: 12px;
width: 118px;
text-align: center;
text-transform: uppercase;
padding: 0px 4px;
box-shadow: 0 4px #026177;
-webkit-box-shadow: 0 4px #026177;
-moz-box-shadow: 0 4px #026177;
-o-box-shadow: 0 4px #026177;
margin-top: 20px;
background: #049fb3;
color: #fff;
}

.signup-list button:hover{
border-bottom: 0px solid #026177;
box-shadow: 3px 3px 5px 1px #aaa;
}
div[data-node-children] li {
position: relative;

line-height: 20px;
padding-left: 22px;
}
.map_canvas {
position: relative;

background-color: rgb(229, 227, 223);
height: 160px;
}

.login-form input {
    width: 268px;  border-radius: 0px;
    margin-bottom: 20px;
    margin: 20px auto;
}
.login-form button{
border-radius: 0px;
padding: 12px;
width: 118px;
text-align: center;
text-transform: uppercase;
padding: 0px 4px;
box-shadow: 0 4px #026177;
-webkit-box-shadow: 0 4px #026177;
-moz-box-shadow: 0 4px #026177;
-o-box-shadow: 0 4px #026177;
margin: 7px 100px;
background: #049fb3;
color: #fff;
padding-bottom: 10px;
}
.login-form button:hover{
border-bottom: 0px solid #026177;
box-shadow: 3px 3px 5px 1px #aaa;
}



/*************************
*******Typography******
**************************/

@import url(http://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,700,100);
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,800,300,600,700);
@import url(http://fonts.googleapis.com/css?family=Abel);
 body {
    font-family: 'Roboto', sans-serif;
    background: ;
    position: relative;
    font-weight: 400px;
}
/*
div#carousel-example-generic{
    height: 250px;
width: 163px;
}
*/
.signupmsg{
    margin-bottom: 10px;
    color: #333;
    background: rgba(255, 146, 0, 0.39);
    padding: 10px;
    font-size: 125%;
    font-weight: 100;
}
.onlycursor:hover{
    cursor: pointer;
}
.cursor:hover {
    color: #DF041D !important;
    cursor: pointer;
}
.filterselected {
    background: black;
}
.tofirstup {
    text-transform: capitalize;
}
.showdiv {
    visibility: visible;
}
.hidediv {
    visibility: hidden;
}
.city {
    padding: 5px;
    color: #FFF;
    font-size: 15px;
    background: #049fb3;
    -webkit-appearance: initial;
    border: 0;
    text-transform: capitalize;
    /* font-weight: bold; */
}
/* .city:hover{
    color: orange;
} */
.area {
    position: absolute;
    margin-left: -8%;
    margin-top: -2% !important;
}
#login {
    margin-bottom: 30px;
    margin-top: 30px;
}
.mrt14 {
    margin-top: 14px;
}
.demo {
    color: red;
}
.searchrow {} #divsearch p {
    margin-left: 20px;
    margin-bottom: 10px !important;
    border-bottom: 1px solid white;
    width: 93%;
}
#divsearch p:hover {
    color: #049fb3;
    cursor: pointer;
    text-transform: capitalize;
}
.nosearch {
    visibility: hidden;
}
.yessearch {
    visibility: visible;
}
.searchdrop {
    background: rgba(255, 255, 255, 1);
    position: absolute;
    width: 78%;
    padding: 6px;
    margin-top: 2px;
    z-index: 1;
    color: #000;
    text-align: justify;
    font-size: 15px;
    text-transform: capitalize;
}
.fapadl {
    padding-left: 15px;
    text-transform: capitalize;
}
.fapadr {
    padding-right: 13px;
    text-transform: capitalize;
    font-size: 17px;
    color: #049fb3;
}
.msg {
    color: #333;
    background: rgba(255, 6, 16, 0.39);
    padding: 10px;
    font-size: 200%;
    font-weight: 100;
}
.subcat {
    background: #f0f0e9;
    height: 40px;
    border-radius: -0;
    color: grey;
    padding: 2px 10px;
    margin-bottom: 5px;
    -webkit-transition: all 0.5s;
}
.homecat {
    color: rgb(0, 0, 0);
}
.homecat:hover {
    color: orange;
}
/* .homecat{
    color: grey;
} */

.subcat:hover {
    background: #049fb3;
    color: white;
    text-decoration-color: white;
}
/*.subtext:hover{
    color: white;
} */

.subtext {
    position: absolute;
    margin-left: 20px;
    /* color: #043eb3; */
    color: black;
}
.mrt-80 {
    margin-top: -100px;
}
.mrd10 {
    margin-bottom: 10px;
}
/* CIRCLE HOVER */

/* .circlehover {
    width: 110px;
    height: 110px;
    text-align: center;
    color: white;
    font-size: 16px;
    padding: 10px;
    display: table;
    line-height: 1.4;
    background-color: #043eb3;
    position: relative;
    font-weight: 700;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.5);
}
.circlehover[data-size="small"] {
    width: 80px;
    height: 80px;
    font-size: 14px;
    padding: 8px;
}
.circlehover[data-size="medium"] {
    width: 95px;
    height: 95px;
    font-size: 16px;
    padding: 10px;
}
.circlehover span {
    display: table-cell;
    vertical-align: middle;
    position: relative;
    z-index: 1;
}
.circlehover:before {
    content: '';
    position: absolute;
    top: 7px;
    left: 7px;
    background: #043eb3;
    width: 30px;
    height: 30px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.circlehover[data-position="top-left"]:before {
    top: 7px;
    left: 7px;
}
.circlehover[data-position="top-right"]:before {
    top: 7px;
    right: 7px;
    left: auto;
}
.circlehover[data-position="bottom-left"]:before {
    bottom: 7px;
    left: 7px;
    top: auto;
}
.circlehover[data-position="bottom-right"]:before {
    bottom: 7px;
    right: 7px;
    left: auto;
    top: auto;
}
.circlehover[data-position="top"]:before,
.circlehover[data-position="right"]:before,
.circlehover[data-position="left"]:before,
.circlehover[data-position="bottom"]:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.circlehover[data-position="top"]:before {
    top: -10px;
    left: 50%;
    margin-left: -15px;
}
.circlehover[data-position="right"]:before {
    top: 50%;
    right: -10px;
    left: auto;
    margin-top: -15px;
}
.circlehover[data-position="left"]:before {
    top: 50%;
    left: -10px;
    margin-top: -15px;
}
.circlehover[data-position="bottom"]:before {
    bottom: -10px;
    left: 50%;
    margin-left: -15px;
    top: auto;
}
.circlehover[data-position="bottom-right"] {
    -webkit-box-shadow: -3px -3px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -3px -3px 1px rgba(0, 0, 0, 0.5);
    box-shadow: -3px -3px 1px rgba(0, 0, 0, 0.5);
}
.circlehover:hover {
    color: #fff;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
}
.circlehover[data-position="bottom-right"]:hover {
    -webkit-box-shadow: -5px -5px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -5px -5px 1px rgba(0, 0, 0, 0.5);
    box-shadow: -5px -5px 1px rgba(0, 0, 0, 0.5);
}
.circlehover[data-align="left"] {
    float: left;
}
.circlehover[data-align="right"] {
    float: right;
}
.circlehover {
    -webkit-transition: all 400ms cubic-bezier(0.680, 0, 0.265, 1);
    older webkit
    -webkit-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition: all 400ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
    easeInOutBack
    -webkit-transition-timing-function: cubic-bezier(0.680, 0, 0.265, 1);
    older webkit
    -webkit-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -moz-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -ms-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    -o-transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    easeInOutBack
}
home number

.circlehover.with-symbol > span.text {} .circlehover.with-symbol > span.symbol {
    opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    line-height: 136px;
}
.circlehover.with-symbol:hover > span.text {
    opacity: 0;
    filter: alpha(opacity=0);
}
.circlehover.with-symbol:hover > span.symbol {
    opacity: 1;
    filter: alpha(opacity=100);
    margin-top: -10px;
} */

/** Scroll to top button **/
#totop {height:9px; opacity:0; filter:alpha(opacity=0); position:fixed; right:-50px;  width:49px; z-index:9999; display:block; top:85%; background-image:url("../images/arrow_totop.png"); background-repeat:no-repeat; background-position:center 15px; background-color:#404040; font-size: 9px; font-weight: 900; color: #fff; text-align: center; line-height: 1; padding: 28px 0 12px 0; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px; }
#totop.on { right:10px; opacity:0.7; filter:alpha(opacity=70);}
#totop.off{right:-59px}
#totop:hover { opacity:1; filter:alpha(opacity=100)}
/* css transitions - reducing transitions lines */
nav#main_menu li a,
.topnav li.drop .pPanel,
#totop,
.info_pop .buyit,
.playVideo span,
.theHoverBorder,
.hoverBorder h6,
.slidingDetails .details,
.slidingDetails,
.partners_carousel li a,
.hoverBorder:hover img,
.feature_box.style3 .box,
.services_box .icon,
.css3accordion>ul>li .thumb,
.gobox, .hover-box,
.circlehover span,
.process_box,
#sidebar ul.menu li a,
.timeline_box,
.timeline_box:hover .date,
.services_box.style2 .box,
.team_member,
.ptcarousel .controls > a,
.shop-features .shop-feature {
-webkit-transition: all 0.2s ease-out; -moz-transition: all 0.2s ease-out; -o-transition: all 0.2s ease-out; -ms-transition: all 0.2s ease-out; transition: all 0.2s ease-out;}

.circlehover{
    background: orange;
}
.subfa {
    margin-right: 7px;
    margin-top: 7px;
}
.mediumimage {
    width: 249px !important;
    border: 1px solid #000;
    margin-left: 8px;
    height: 198px !important;
}
.fa-linkedin {
    background: rgba(255, 69, 24, 0.3);
}
.fa-twitter {
    background: rgba(91, 188, 236, 0.3);
    ;
}
.fa-facebook {
    background: rgba(0, 131, 201, 0.3);
}
.fa-dribbble {
    background: rgba(144, 201, 220, 0.3);
}
.fa-google-plus {
    background: rgba(206, 60, 45, 0.3);
}
.mrr {
    margin-right: 10px;
}
.searchformtext {
    padding-top: 11%;
    padding-bottom: 11%;
    padding-left: 2%;
}

.mr30 {
    margin: 30px !important;
}
.mrt30 {
    margin-bottom: 10px;
    width: 200px;
}
.mrt10 {
    margin-top: 10px;
}
.searchslider {
/*    position: absolute;*/
    
background: rgba(183, 187, 207, 0.78);
    /* height: 11%; */
/*    margin-top: 2%;*/
/*    width: 51%;*/
/*    margin-left: 17%;*/
    z-index: 1;
    box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.8);
}
ul li {
    list-style: none;
}
a:hover {
    outline: none;
    text-decoration: none;
}
a:focus {
    outline: none;
    outline-offset: 0;
}
a {
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Roboto', sans-serif;
}
.btn {
    padding: 8px 5px !important;
    font-size: small !important;
}
.btn:,
.btn:focus {
    outline: none;
    box-shadow: none;
    
}
.btn:hover, .btn:focus {
color: #fff;
text-decoration: none;
}
.navbar-toggle {
    background-color: #000;
}
a#scrollUp {
    bottom: 0px;
    right: 10px;
    padding: 5px 10px;
    background: #043eb3;
    color: #FFF;
    -webkit-animation: bounce 2s ease infinite;
    animation: bounce 2s ease infinite;
}
a#scrollUp i {
    font-size: 30px;
}
/*************************
*******Header CSS******
**************************/

.header_top {
    background: none repeat scroll 0 0 #F0F0E9;
}
.contactinfo ul li:first-child {
    margin-left: -15px;
}
.contactinfo ul li a {
    font-size: 12px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    background: #049fb3;
    border-radius: 0px;
    padding-left: 14px;
    margin-left: 10px;
}
.contactinfo ul li a:hover {
    background: inherit;
}
.social-icons ul li a {
    border: 0 none;
    border-radius: 0;
    color: #696763;
    padding: 0px;
}
.social-icons ul li {
    display: inline-block;
}
.social-icons ul li a i {
    padding: 11px 15px;
    transition: all 0.9s ease 0s;
    -moz-transition: all 0.9s ease 0s;
    -webkit-transition: all 0.9s ease 0s;
    -o-transition: all 0.9s ease 0s;
}
.social-icons ul li a i:hover {
    color: #fff;
    transition: all 0.9s ease 0s;
    -moz-transition: all 0.9s ease 0s;
    -webkit-transition: all 0.9s ease 0s;
    -o-transition: all 0.9s ease 0s;
}
.fa-facebook:hover {
    background: #0083C9;
}
.fa-twitter:hover {
    background: #5BBCEC;
}
.fa-linkedin:hover {
    background: #FF4518;
}
.fa-dribbble:hover {
    background: #90C9DC;
}
.fa-google-plus:hover {
    background: #CE3C2D;
}
.header-middle .container .row {
    /* border-bottom: 1px solid #f5f5f5; */
    padding-bottom: 20px;
    padding-top: 20px;
}
.header-middle .container .row .col-sm-4 {
    padding-left: 0;
}
.header-middle .container .row .col-sm-8 {
    padding-right: 0;
}
.usa {
    border-radius: 0;
    color: white;
    font-size: 12px;
    margin-right: 20px;
    padding: 2px 15px;
    margin-top: 10px;
}
.usa:hover {
    background: #043eb3;
    color: #fff;
    border-color: #043eb3;
}
.usa:active,
.usa.active {
    background: none repeat scroll 0 0 #043eb3;
    box-shadow: inherit;
    outline: 0 none;
}
.btn-group.open .dropdown-toggle {
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
}
.dropdown-menu li a:hover,
.dropdown-menu li a:focus {
    background-color: #043eb3;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}
.shop-menu ul li {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
}
.shop-menu ul li:last-child {
    padding-right: 0;
}
.shop-menu ul li a {
    background: rgba(5, 5, 5, 0.59);
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 6px 13px 7px 9px;
    /* padding-right: 0; */
    margin-top: 10px;
}
.shop-menu ul li a i {
    margin-right: 3px;
}
.shop-menu ul li a:hover {
    color: #022977;
    background: #fff;
}
.header-bottom {
    padding-bottom: 30px;
    padding-top: 30px;
}
.navbar-collapse.collapse {
    padding-left: 0;
}
.mainmenu ul li {
    padding-right: 15px;
    padding-left: 15px;
}
.mainmenu ul li:first-child {
    padding-left: 0px;
}
.mainmenu ul li a {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 300;
    padding: 0;
    padding-bottom: 10px;
}
.mainmenu ul li a:hover,
.mainmenu ul li a.active,
.shop-menu ul li a.active {
    background: none;
    color: #fdb45e;
}
.search_box input {
    background: #F0F0E9;
    border: medium none;
    color: #B2B2B2;
    font-family: 'roboto';
    font-size: 12px;
    font-weight: 300;
    height: 35px;
    outline: medium none;
    padding-left: 10px;
    width: 155px;
    background-image: url(../images/home/searchicon.png);
    background-repeat: no-repeat;
    background-position: 130px;
}
/*  Dropdown menu*/

.navbar-header .navbar-toggle .icon-bar {
    background-color: #fff;
}
.nav.navbar-nav > li:hover > ul.sub-menu {
    display: block;
    -webkit-animation: fadeInUp 400ms;
    -moz-animation: fadeInUp 400ms;
    -ms-animation: fadeInUp 400ms;
    -o-animation: fadeInUp 400ms;
    animation: fadeInUp 400ms;
}
ul.sub-menu {
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    list-style: none;
    padding: 0;
    margin: 0;
    width: 220px;
    -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 999;
}
.dropdown ul.sub-menu li .active {
    color: #FDB45E;
    padding-left: 0;
}
.navbar-nav li ul.sub-menu li {
    padding: 10px 20px 0;
}
.navbar-nav li ul.sub-menu li:last-child {
    padding-bottom: 20px;
}
.navbar-nav li ul.sub-menu li a {
    color: #fff;
}
.navbar-nav li ul.sub-menu li a:hover {
    color: #FDB45E;
}
.fa-angle-down {
    padding-left: 5px;
}
@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}
/*************************
*******Footer CSS******
**************************/

#footer {
    background: #F0F0E9;
}
.footer-top .container {
    border-bottom: 1px solid #E0E0DA;
    padding-bottom: 20px;
}
.companyinfo {
    margin-top: 57px;
}
.companyinfo h2 {
    color: #B4B1AB;
    font-family: abel;
    font-size: 27px;
    text-transform: uppercase;
}
.companyinfo h2 span {
    color: #043eb3;
}
.companyinfo p {
    color: #B3B3AD;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 300;
}
.footer-top .col-sm-3 {
    overflow: hidden;
}
.video-gallery {
    margin-top: 57px;
    position: inherit;
}
.video-gallery a img {
    height: 100%;
    width: 100%;
}
.iframe-img {
    position: relative;
    display: block;
    height: 61px;
    margin-bottom: 10px;
    border: 2px solid #CCCCC6;
    border-radius: 3px;
}
.overlay-icon {
    position: absolute;
    top: 0;
    width: 100%;
    height: 61px;
    background: #043eb3;
    border-radius: 3px;
    color: #FFF;
    font-size: 20px;
    line-height: 0;
    display: block;
    opacity: 0;
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
}
.overlay-icon i {
    position: relative;
    top: 50%;
    margin-top: -20px;
}
.video-gallery a:hover .overlay-icon {
    opacity: 1;
}
.video-gallery p {
    color: #8C8C88;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 0px;
}
.video-gallery h2 {
    color: #8c8c88;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 0px;
}
.address {
    margin-top: 30px;
    position: relative;
    overflow: hidden;
}
.address img {
    width: 100%;
}
.address p {
    color: #666663;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    left: 25px;
    position: absolute;
    top: 50px;
}
.footer-widget {
    margin-bottom: 68px;
}
.footer-widget .container {
    border-top: 1px solid #FFFFFF;
    padding-top: 15px;
}
.single-widget h2 {
    color: #666663;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 22px;
    text-transform: uppercase;
}
.single-widget h2 i {
    margin-right: 15px;
}
.single-widget ul li a {
    color: #8C8C88;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 5px 0;
}
.single-widget ul li a i {
    margin-right: 18px;
}
.single-widget ul li a:hover {
    background: #049fb3;
    color: #FFFFFF;
    border-radius: 0px;
    /* padding: 8px; */
    padding-left: 22px;
    margin-left: -22px;
}
.searchform input {
    border: 1px solid #DDDDDD;
    color: #CCCCC6;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin-top: 0;
    outline: medium none;
    padding: 7px;
    width: 212px;
}
.searchform button {
    background: #049fb3;
    border: medium none;
    border-radius: 0;
    margin-left: -5px;
    margin-top: -3px;
    padding: 7px 17px !important;
    height: 36px;
}
.searchform button i {
    color: #FFFFFF;
    font-size: 20px;
}
.searchform button:hover,
.searchform button:focus {
    background-color: #026177;
}
/* .searchform p {

    color: #8C8C88;

    font-family: 'Roboto', sans-serif;

    font-size: 14px;

    font-weight: 300;

    margin-top: 25px;

}
 */

.footer-bottom {
    background: #D6D6D0;
    padding-top: 10px;
}
.footer-bottom p {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-left: 15px;
}
.footer-bottom p span a {
    color: #043eb3;
    font-style: italic;
    text-decoration: underline;
}
/*************************
******* Home ******
**************************/

#slider {
    padding-bottom: 45px;
}
.carousel-indicators li {
    background: #C4C4BE;
}
.carousel-indicators li.active {
    background: #043eb3;
}
.item {} .pricing {
    position: absolute;
    right: 40%;
    top: 52%;
}
.girl {
    margin-left: 0;
}
.item h1 {
    color: #B4B1AB;
    font-family: abel;
    font-size: 48px;
    margin-top: 115px;
}
.item h1 span {
    color: #043eb3;
}
.item h2 {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 22px;
    margin-top: 10px;
}
.item p {
    color: #363432;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
}
.get {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin-top: 23px;
}
.item button:hover {
    background: #043eb3;
}
.control-carousel {
    position: absolute;
    top: 50%;
    font-size: 60px;
    color: #C2C2C1;
}
.control-carousel:hover {
    color: #043eb3;
}
.right {
    right: 0;
}
.category-products {
    border: 1px solid #F7F7F0;
    margin-bottom: 34px;
    padding-bottom: 20px;
    padding-top: 16px;
    margin: 12px auto;
}
.left-sidebar h2,
.brands_products h2 {
    color: #049fb3;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 auto 30px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    z-index: 3;
}
.left-sidebar h2:after,
h2.title:after {
    content: " ";
    position: absolute;
    border: 1px solid #049fb3;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 0;
    z-index: -2;
}
.left-sidebar h2:before {
    content: " ";
    position: absolute;
    background: #fff;
    bottom: -6px;
    width: 130px;
    height: 30px;
    z-index: -1;
    left: 50%;
    margin-left: -65px;
}
h2.title:before {
    content: " ";
    position: absolute;
    background: #fff;
    bottom: -6px;
    width: 220px;
    height: 30px;
    z-index: -1;
    left: 50%;
    margin-left: -110px;
}
.category-products .panel {
    background-color: #FFFFFF;
    border: 0px;
    border-radius: 0px;
    box-shadow: none;
    margin-bottom: 0px;
}
.category-products .panel-default .panel-heading {
    background-color: #FFFFFF;
    border: 0 none;
    color: #FFFFFF;
    padding: 5px 20px;
}
.category-products .panel-default .panel-heading .panel-title a {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
    border-top: 0 none;
}
.category-products .badge {
    background: none;
    border-radius: 10px;
    color: #696763;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    min-width: 10px;
    padding: 3px 7px;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
}
.media.commnets {
    margin: 11px auto;
    /* padding-bottom: 20px; */
    background: rgba(70, 109, 157, 0.05);
    padding: 25px 11px;
    width: 1142px;
    padding-bottom: 0px;
}
.panel-body ul {
    padding-left: 20px;
}
.panel-body ul li a {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
}
.brands-name {
    border: 1px solid #049fb3;
    padding-bottom: 20px;
    padding-top: 15px;
    padding: 10px;
    text-transform: uppercase;
    margin-bottom: 30px;
}
.brands-name .nav-stacked li a {
    background-color: #FFFFFF;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 5px 25px;
    text-decoration: none;
    text-transform: uppercase;
}
.brands-name .nav-stacked li a:hover {
    background-color: #fff;
    color: #696763;
}
.shipping {
    background-color: #F2F2F2;
    margin-top: 40px;
    overflow: hidden;
    padding-top: 20px;
    position: relative;
}
.price-range {
    margin-top: 30px;
}
.well {
    background-color: #FFFFFF;
    border: 1px solid #F7F7F0;
    border-radius: 4px;
    box-shadow: none;
    margin-bottom: 20px;
    min-height: 20px;
    padding: 35px;
}
.tooltip-inner {
    background-color: #043eb3;
    border-radius: 4px;
    color: #FFFFFF;
    max-width: 200px;
    padding: 3px 8px;
    text-align: center;
    text-decoration: none;
}
.tooltip.top .tooltip-arrow {
    border-top-color: #043eb3;
    border-width: 5px 5px 0;
    bottom: 0;
    left: 50%;
    margin-left: -5px;
}
.padding-right {
    padding-right: 0;
}
.features_items {
    overflow: hidden;
}
h2.title {
    color: #049fb3;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 15px;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
}
.product-image-wrapper {
    /* border:1px solid #F7F7F5; */
    overflow: hidden;
    margin-bottom: 30px;
}
.single-products {
    position: relative;
}
.new,
.sale {
    position: absolute;
    top: 0;
    right: 0;
}
.productinfo h2 {
    color: #043eb3;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
.product-overlay h2 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
.productinfo p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    padding-top: 14px;
}
.productinfo img {
    width: 100%;
    border-radius: 71px;
    border: 1px solid #F7F7F5;
}
.productinfo {
    position: relative;
}
.product-overlay {
    background: #043eb3;
    top: 0;
    display: none;
    height: 0;
    position: absolute;
    transition: height 500ms ease 0s;
    width: 100%;
    display: block;
    opacity: ;
}
.single-products:hover .product-overlay {
    display: block;
    height: 100%;
}
.product-overlay .overlay-content {
    bottom: 0;
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
}
.product-overlay .add-to-cart {
    background: #fff;
    border: 0 none;
    border-radius: 0;
    color: #043eb3;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 25px;
}
.product-overlay .add-to-cart:hover {
    background: #fff;
    color: #043eb3;
}
.product-overlay p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
}
.add-to-cart {
    background: #F5F5ED;
    border: 0 none;
    border-radius: 0;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 25px;
}
.add-to-cart:hover {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
}
.add-to {
    margin-bottom: 10px;
}
.add-to-cart i {
    margin-right: 5px;
}
.add-to-cart:hover {
    background: #043eb3;
    color: #FFFFFF;
}
.choose {
    border-top: 1px solid #F7F7F0;
}
.choose ul li a {
    color: #B3AFA8;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    padding-left: 0;
    padding-right: 0;
}
.choose ul li a i {
    margin-right: 5px;
}
.choose ul li a:hover {
    background: none;
    color: #043eb3;
}
.category-tab {
    overflow: hidden;
}
.category-tab ul {
    background: #40403E;
    border-bottom: 1px solid #043eb3;
    list-style: none outside none;
    margin: 0 0 30px;
    padding: 0;
    width: 100%;
}
.category-tab ul li a {
    border: 0 none;
    border-radius: 0;
    color: #B3AFA8;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
}
.category-tab ul li a:hover {
    background: #043eb3;
    color: #fff;
}
.nav-tabs li.active a,
.nav-tabs li.active a:hover,
.nav-tabs li.active a:focus {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #043eb3;
    border: 0px;
    color: #FFFFFF;
    cursor: default;
    margin-right: 0;
    margin-left: 0;
}
.nav-tabs li a {
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 4px 4px 0 0;
    line-height: 1.42857;
    margin-right: 0;
}
.recommended_items {
    overflow: hidden;
}
#recommended-item-carousel .carousel-inner .item {
    padding-left: 0;
}
.recommended-item-control {
    position: absolute;
    top: 41%;
}
.recommended-item-control i {
    background: none repeat scroll 0 0 #043eb3;
    color: #FFFFFF;
    font-size: 20px;
    padding: 4px 10px;
}
.recommended-item-control i:hover {
    background: #ccccc6;
}
.recommended_items h2 {} .our_partners {
    overflow: hidden;
}
.our_partners ul {
    background: #F7F7F0;
    margin-bottom: 50px;
}
.our_partners ul li a:hover {
    background: none;
}
/*************************
*******Shop CSS******
**************************/

#advertisement {
    padding-bottom: 45px;
}
#advertisement img {
    width: 100%;
}
.pagination {
    display: inline-block;
    margin-bottom: 25px;
    margin-top: 0;
    padding-left: 15px;
}
.pagination li:first-child a,
.pagination li:first-child span {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: 0;
}
.pagination li:last-child a,
.pagination li:last-child span {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.pagination .active a,
.pagination .active span,
.pagination .active a:hover,
.pagination .active span:hover,
.pagination .active a:focus,
.pagination .active span:focus {
    background-color: #043eb3;
    border-color: #043eb3;
    color: #FFFFFF;
    cursor: default;
    z-index: 2;
}
.pagination li a,
.pagination li span {
    background-color: #f0f0e9;
    border: 0;
    float: left;
    line-height: 1.42857;
    margin-left: -1px;
    padding: 6px 12px;
    position: relative;
    text-decoration: none;
    margin-right: 5px;
    color: #000;
}
.pagination li a:hover {
    background: #043eb3;
    color: #fff;
}
/*************************
*******Product Details CSS******
**************************/

.product-details {
    overflow: hidden;
}
#similar-product {
    margin-top: 40px;
}
#reviews {
    padding-left: 25px;
    padding-right: 25px;
}
.product-details {
    margin-bottom: 40px;
    overflow: hidden;
    margin-top: 10px;
}
.view-product {
    position: relative;
}
.view-product img {
    border: 1px solid #F7F7F0;
    height: 380px;
    width: 100%;
}
.view-product h3 {
    background: #043eb3;
    bottom: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
    padding: 8px 20px;
    position: absolute;
    right: 0;
}
#similar-product .carousel-inner .item {
    padding-left: 0px;
}
#similar-product .carousel-inner .item img {
    display: inline-block;
    margin-left: 15px;
}
.item-control {
    position: absolute;
    top: 35%;
}
.item-control i {
    background: #043eb3;
    color: #FFFFFF;
    font-size: 20px;
    padding: 5px 10px;
}
.item-control i:hover {
    background: #ccccc6;
}
.product-information {
    border: 1px solid #F7F7F0;
    overflow: hidden;
    padding-bottom: 60px;
    padding-left: 60px;
    padding-top: 60px;
    position: relative;
}
.newarrival {
    position: absolute;
    top: 0;
    left: 0
}
.product-information h2 {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-top: 0;
}
.product-information p {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
}
.product-information span {
    display: inline-block;
    margin-bottom: 8px;
    margin-top: 18px;
}
.product-information span span {
    color: #043eb3;
    float: left;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 0px;
}
.product-information span input {
    border: 1px solid #DEDEDC;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    height: 33px;
    outline: medium none;
    text-align: center;
    width: 50px;
}
.product-information span label {
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-right: 5px;
}
.share {
    margin-top: 15px;
}
.cart {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-bottom: 10px;
    margin-left: 20px;
}
.shop-details-tab {
    border: 1px solid #F7F7F0;
    margin-bottom: 75px;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
}
.shop-details-tab .col-sm-12 {
    padding-left: 0;
    padding-right: 0;
}
#reviews ul {
    background: #FFFFFF;
    border: 0 none;
    list-style: none outside none;
    margin: 0 0 20px;
    padding: 0;
}
#reviews ul li {
    display: inline-block;
}
#reviews ul li a {
    color: #696763;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding-right: 15px;
}
#reviews ul li a i {
    color: #043eb3;
    padding-right: 8px;
}
#reviews ul li a:hover {
    background: #fff;
    color: #043eb3;
}
#reviews p {
    color: #363432;
}
#reviews form span {
    display: block;
}
#reviews form span input {
    background: #F0F0E9;
    border: 0 none;
    color: #A6A6A1;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    outline: medium none;
    padding: 8px;
    width: 48%;
}
#reviews form span input:last-child {
    margin-left: 3%;
}
#reviews textarea {
    background: #F0F0E9;
    border: medium none;
    color: #A6A6A1;
    height: 195px;
    margin-bottom: 25px;
    margin-top: 15px;
    outline: medium none;
    padding-left: 10px;
    padding-top: 15px;
    resize: none;
    width: 99.5%;
}
#reviews button {
    background: #043eb3;
    border: 0 none;
    border-radius: 0;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}
/*************************
*******404 CSS******
**************************/

.logo-404 {
    margin-top: 60px;
}
.content-404 h1 {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 41px;
    font-weight: 300;
}
.content-404 img {
    margin: 0 auto;
}
.content-404 p {
    color: #363432;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
}
.content-404 h2 {
    margin-top: 50px;
}
.content-404 h2 a {
    background: #043eb3;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 44px;
    font-weight: 300;
    padding: 8px 40px;
}
/*************************
*******login page CSS******
**************************/

#form {
    display: block;
    margin-bottom: 185px;
    margin-top: 185px;
    overflow: hidden;
}
.login-form {
    padding: 3px 30px 7px 30px;
    text-transform: capitalize;
    width: 100%;
    background: rgb(228, 241, 255);
    margin: 10px auto;
    margin-bottom: 40px;
} .signup-form {
    text-align: center;
} .login-form h2,
.signup-form h2 {
    color: #FFFEFD;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
    background: #049fb3;
    text-align: center;
    padding: 10px;
    /* width: 310px; */
}
.login-form form input,
.signup-form form input {
    background: #F0F0E9;
    border: medium none;
    color: #696763;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    height: 40px;
    margin-bottom: 10px;
    outline: medium none;
    padding-left: 10px;
    width: 100%;
}
.login-form form span {
    line-height: 25px;
}
.login-form form span input {
    width: 15px;
    float: left;
    height: 15px;
    margin-right: 5px;
}
.login-form form button {
    margin-top: 23px;
}
.login-form form button,
.signup-form form button {
    background: #043eb3;
    border: medium none;
    border-radius: 0;
    color: #FFFFFF;
    display: block;
    font-family: 'Roboto', sans-serif;
    padding: 6px 25px;
    width: 100px;
    height: 36px;
}
.login-form label {} .login-form label input {
    border: medium none;
    display: inline-block;
    height: 0;
    margin-bottom: 0;
    outline: medium none;
    padding-left: 0;
}
.or {
    background: #049fb3;
    border-radius: 40px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    /* margin-top: 75px; */
    text-align: center;
    width: 50px;
    margin: 100px auto;
}
/*************************
*******Cart CSS******
**************************/

#do_action {
    margin-bottom: 50px;
}
.breadcrumbs {
    position: relative;
}
.breadcrumbs .breadcrumb {
    background: transparent;
    margin-bottom: 75px;
    padding-left: 0;
}
.breadcrumbs .breadcrumb li a {
    background: #043eb3;
    color: #FFFFFF;
    padding: 3px 7px;
}
.breadcrumbs .breadcrumb li a:after {
    content: "";
    height: auto;
    width: auto;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent #043eb3;
    position: absolute;
    top: 11px;
    left: 48px;
}
.productinfo .fa-3x:hover {
    border-bottom: 0px solid #026177;
    box-shadow: 3px 3px 5px 1px #aaa;
    /* border-top: 5px solid #E26C0B; */
}
.productinfo .fa-3x {
    font-size: 2em;
    -webkit-transition: all 0.5s ease;
    padding: 15px;
    background: #049fb3;
    color: white;
    border-radius: 3px;
    border-bottom: 5px solid #026177;
    height: 65px;
    width: 65px;
    text-align: center;
    /* box-shadow: 0px 2px 9px 1px #ccc; */
}
.carousel-inner>.item>img,
.carousel-inner>.item>a>img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
    line-height: 1;
}
.breadcrumbs .breadcrumb > li + li:before {
    content: ".";
}
.row .col-sm-8 .logo img {
    padding: 0px;
    margin-left: -15px;
}
.phone{
    font-size: 18px;
    font-weight: 600;
}
.homeimageright{
    width: 16%;
margin-top: 2%;
    float: right;
}
.homeimageleft{
    width: 16%;
margin-top: 2%;
    float: left;
}
.a{
    cursor: pointer;
}


.carousel-inner>.item>img, .carousel-inner>.items>a>img {
display: block;
height: auto;
max-width: 100%;
width: 100%;
line-height: 1;
height: 194px;
}

.formselop{
    background: #FFFFFF;

    /* border: medium none; */
color: #696763;
display: block;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 300;
height: 40px;
margin-bottom: 10px;
outline: medium none;
padding-left: 10px;

    width: 60%;
    border-radius: 0px;
}

.ng-invalid.ng-dirty { border: 1px solid red; }
.phone a:hover, a:focus {
color: #026177;
}

.text-enquiry textarea
{
    height: 100px;
width: 100%;
    margin-bottom: 10px;
}

.button-enquiry a
{
height: 35px;
width: 100px;
margin-bottom: 10px;
}

 .subcat h4
{
text-transform: capitalize;
}

/*angular tree demo*/

div[data-angular-treeview] {
  /* prevent user selection */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* default */
  font-family: Tahoma;
  font-size:13px;
  color: #555;
  text-decoration: none;
}

div[data-tree-model] ul {
  margin: 0;
  padding: 0;
  list-style: none; 
  border: none;
  overflow: hidden;
}

div[data-tree-model] li {
  position: relative;
  padding: 11px 0px 0px 0px;
  line-height: 20px;
}

div[data-tree-model] li .expanded {
  padding: 1px 10px;
  background-image: url("http://mafiawarloots.com/anyinform/lib/images/png/minus25.png");
  background-repeat: no-repeat;
}

div[data-tree-model] li .collapsed {
  padding: 1px 10px;
  background-image: url("http://mafiawarloots.com/anyinform/lib/images/png/add196.png");
  background-repeat: no-repeat;
}

div[data-tree-model] li .normal {
  padding: 0px 10px;
  background-image: url("http://mafiawarloots.com/anyinform/lib/images/png/minus25.png");
  background-repeat: no-repeat;
}

div[data-tree-model] li i, div[data-tree-model] li span {
  cursor: pointer;
}

div[data-tree-model] li .selected {
  background-color: #aaddff;
  font-weight: bold;
  padding: 1px 5px;
}

.st-facebook-counter {
width: 61px;
height: 50px;
}
span.stButton_gradient.stHBubble {
height: 22px;
}
.stButton .st-yahoo-counter, .stButton .st-linkedin-counter {
width: 60px;
height: 50px;
}

span.stMainServices.st-facebook-counter{
height: 50px;
}
span.stMainServices.st-twitter-counter {
height: 50px;
}
span.stMainServices.st-linkedin-counter {
height: 50px;
}
a.btn.btn-primary.mrr {
    /* border: none; */
    border-radius: 0px;
  
    padding: 12px;
    width: 104px;
    text-align: center;
    text-transform: uppercase;
    padding: 0px 4px;
    box-shadow: 0 4px #026177;  
    -webkit-box-shadow: 0 4px #026177;  
    -moz-box-shadow: 0 4px #026177;  
    -o-box-shadow: 0 4px #026177; 
}
.signup-form button:hover{

/* background-color: #049fb3; */


/* border-color: #285e8e; */


/* text-transform: uppercase; */
border-bottom: 0px solid #026177;  box-shadow: 3px 3px 5px 1px #aaa;

}
.media-heading {
margin: 0 0 13px;
}
.details-content {
    margin: 50px 9px 20px -18px;
    background: rgba(70, 109, 157, 0.05);
    /* margin-right: 15px; */
    padding: 10px 0px;
}
.more-text {
    padding: 17px 0px;
}

.more-text p {
    text-indent: 10px;
}
.fapd {
    text-indent: 0px;
    padding-left: 35px;
}

.fapd.fapad1 {
    color: rgb(194, 65, 65);
}

.fapd strong.fapadl.ng-binding.ng-scope {
    color: rgb(246, 93, 93);
}
.fapd p {
    padding-left: 59px;
    font-size: 20px;
    color: rgb(246, 93, 93);
}
.signup-form input {
margin: 20px auto;
width: 50%;
border-radius: 0px;
padding: 4px 12px;
}
.signup-form textarea {
margin: 20px auto;
width: 50%;
border-radius: 0px;
padding: 4px 12px;
height: 100px;
}
.signup-form button {
/* float: center; */
text-align: center;
width: 100px;
border-radius: 0px;
margin: 13px auto;
text-transform: uppercase;
color: #fff;
background-color: #049fb3;
border-color: #049fb3;
box-shadow: 0 4px #026177;
-webkit-box-shadow: 0 4px #026177;
-moz-box-shadow: 0 4px #026177;
-o-box-shadow: 0 4px #026177;
}
.pluginSkinLight.pluginFontHelvetica {
margin: 12px auto;
}
.fapd .fa-calendar {
    color: #049fb3;
}
.fapd i.fa.fa-clock-o{
    color: #049fb3;
}
.fapd i.fa.fa-money{
    color: #049fb3;
}
.social-btn{
margin:14px auto;
}
.btn-mail{
margin:43px auto;
}
.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default {
color: none;
background-color: none;
border-color: none;
}
ul.nav.navbar-nav .fa-user {
    color: #049fb3;
}
ul.nav.navbar-nav .fa-lock {
    color: #049fb3;
}
.single-widget p {
    margin: 23px auto;
    color: #8C8C88;
}
.btn-primary {
color: #fff;
background-color: #049fb3;
border-color: #049fb3;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
color: #fff;
background-color: #049fb3;
border-color: #049fb3;
}
a {
color: #049fb3;
text-decoration: none;
}
.recent-box .panel-default {
    width: 299px;
    height: auto;
    border-radius: 0px;
    margin-top: 30px;
}
.panel.panel-default img {
    width: 60px;
}
.panel.panel-default tr {
    border-bottom: 1px solid grey;
}
.recent-box .panel-heading {
text-align: center;
}
.recent-box .panel-default>.panel-heading {
color: #FFF;
background-color: #049fb3;
border-color: #049fb3;
}
.category .media {
    width: 850px;
    padding: 21px;
    /* padding-bottom: 0px; */
}
.cate-social {
    /* padding: 55px 0px; */
    padding: 84px 0px 0px;
}
.cat-btn a {
    margin: 16px auto;
}
.cat-aside h4.ng-binding {
    background: #049fb3;
    padding: 6px;
    color: #fff;
    text-transform: uppercase;
    text-align: justify;
    font-size: 18px;
}
.cat-aside div#accordian {
    border-color: #049fb3;
}
 a.cursor:hover {
    background: #049fb3;
    padding: 10px;
    color: #fff !important;
}
a.btn.btn-primary.mrr:hover {
    border-bottom: 0px solid #026177;  box-shadow: 3px 3px 5px 1px #aaa;
}
a.cursor.ng-binding.Sub.Mobile:hover {
    background: #049fb3;  padding: 10px;  color: #fff !important;
}
.contactinfo ul li a:hover {
font-size: 12px;
color: #049fb3;
font-family: 'Roboto', sans-serif;
background: #fff;
border-radius: 0px ;
padding-left: 14px;
margin-left: 10px;
    border-color:#049fb3;
}
option.onlycursor {
    background: #fff;
    color: #000;
    padding: 11px 4px 1px;
}
.list-back {
    /* border-right: 1px solid #049fb3; */
    background: rgba(70, 109, 157, 0.05);
    padding: 11px 0px 0px 23px;
}
.list-head {
    background: #049fb3;
    color: #fff;
    /* padding: 0px 0px 1px 27px; */
    /* vertical-align: -webkit-baseline-middle; */
}

.list-head h3 {
    font-size: 23px;
    padding: 10px;
}
.list-form {
    background: rgba(70, 109, 157, 0.05);
    /* float: left; */
    padding: 26px;
    margin: 77px auto;
    /* width: 571px; */
}
.signup-list{
background: rgba(70, 109, 157, 0.05);
/* float: left; */
padding: 26px;
margin: 77px auto;
}
.signup-list input {
    width: 268px;
    border-radius: 0px;
    margin-bottom: 30px;
}
span.list-select {
    color: red;
    font-size: 12px;
    text-align: justify;
    letter-spacing: 1px;
}
.signup-list button {
border-radius: 0px;
padding: 12px;
width: 118px;
text-align: center;
text-transform: uppercase;
padding: 0px 4px;
box-shadow: 0 4px #026177;
-webkit-box-shadow: 0 4px #026177;
-moz-box-shadow: 0 4px #026177;
-o-box-shadow: 0 4px #026177;
margin-top: 20px;
background: #049fb3;
color: #fff;
}

.signup-list button:hover{
border-bottom: 0px solid #026177;
box-shadow: 3px 3px 5px 1px #aaa;
}
div[data-node-children] li {
position: relative;
/* padding: 11px 0px 0px 0px; */
line-height: 20px;
padding-left: 22px;
}
.map_canvas {
position: relative;
/* overflow: hidden; */
/* transform: translateZ(0px); */
background-color: rgb(229, 227, 223);
height: 160px;
}
.login-text {
/* background: rgba(66, 93, 126, 0.0470588); */
/* height: 320px; */
/* width: 100%; */
/* padding: 30px 0px; */
}
.login-form input {
    width: 268px;  border-radius: 0px;
    margin-bottom: 20px;
    margin: 20px auto;
}
.login-form button{
border-radius: 0px;
padding: 12px;
width: 118px;
/* text-align: center; */
text-transform: uppercase;
padding: 0px 4px;
box-shadow: 0 4px #026177;
-webkit-box-shadow: 0 4px #026177;
-moz-box-shadow: 0 4px #026177;
-o-box-shadow: 0 4px #026177;
margin: 7px 140px;
background: #049fb3;
color: #fff;
/* padding-bottom: 10px; */
margin-bottom: 20px;
}
.login-form button:hover{
border-bottom: 0px solid #026177;
box-shadow: 3px 3px 5px 1px #aaa;
}
.or:hover {
background: #fff;
border-radius: 40px ;
color: #049fb3;
font-family: 'Roboto', sans-serif;
font-size: 16px;
height: 50px;
line-height: 50px;
/* margin-top: 75px; */
text-align: center;
width: 50px;
margin: 100px auto;
}