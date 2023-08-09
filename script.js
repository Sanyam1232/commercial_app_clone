const Men = document.querySelector('.Men');
const Women=document.querySelector('.Women');
const Kids=document.querySelector('.Kids');
const Home=document.querySelector('.Home_living');
const Beauty=document.querySelector('.Beauty');
const menbar=document.querySelector('.menbar');
const womenbar=document.querySelector('.womenbar');
const kidsbar=document.querySelector('.kidsbar');
const beautybar=document.querySelector('.beautybar');
const homebar=document.querySelector('.homebar');
const profilebar=document.querySelector('.profilebar');
const Profile=document.querySelector('.profile');
const topbarWrapper=document.querySelector('.topbar-wrapper');
const homepage=document.querySelector('.container');
const profile=document.querySelector('.profile');
const Bar= document.querySelector('.humsbuger-bar');
const SidebarWrapper = document.querySelector('.sidebar-wrapper');
const Sidebar =document.querySelector('.sidebar');
const searchIcon=document.querySelector('.fas fa-serach');
const search=document.querySelector('.search');

 
const addClass = (element, className) => {
    element.classList.add(className);
  };
const removeClass =(element,className)=>{
  element.classList.remove(className);
}
  Men.addEventListener('click', () => {
    addClass(menbar, 'menbar-display');
   addClass(topbarWrapper,'topbar-wrapper-display');
   removeClass(womenbar,'womenbar-display');
   removeClass(kidsbar,'kidsbar-display');
   removeClass(homebar,'homebar-display');
   removeClass(beautybar,'beautybar-display');
   removeClass(profilebar,'profilebar-display');
  });
  Men.addEventListener('mouseover', () => {
    removeClass(menbar,'menbar-display');
    removeClass(topbarWrapper,'topbar-wrapper-display');
  });
  Women.addEventListener('click', () => {
    addClass(womenbar, 'womenbar-display');
   addClass(topbarWrapper,'topbar-wrapper-display');
   removeClass(menbar,'menbar-display');
   removeClass(kidsbar,'kidsbar-display');
   removeClass(homebar,'homebar-display');
   removeClass(beautybar,'beautybar-display');
   removeClass(profilebar,'profilebar-display');
  });
  Women.addEventListener('mouseover', () => {
    removeClass(womenbar,'womenbar-display');
    removeClass(topbarWrapper,'topbar-wrapper-display');
  });
 
  Kids.addEventListener('click', () => {
    addClass(kidsbar, 'kidsbar-display');
    addClass(topbarWrapper,'topbar-wrapper-display');
   removeClass(womenbar,'womenbar-display');
   removeClass(menbar,'menbar-display');
   removeClass(homebar,'homebar-display');
   removeClass(beautybar,'beautybar-display');
   removeClass(profilebar,'profilebar-display');
  });
 
  Kids.addEventListener('mouseover', () => {
    removeClass(kidsbar,'kidsbar-display');
    removeClass(topbarWrapper,'topbar-wrapper-display');
  });
 Home.addEventListener('click', () => {
    addClass(homebar, 'homebar-display');
    addClass(topbarWrapper,'topbar-wrapper-display');
   removeClass(womenbar,'womenbar-display');
   removeClass(kidsbar,'kidsbar-display');
   removeClass(menbar,'menbar-display');
   removeClass(beautybar,'beautybar-display');
   removeClass(profilebar,'profilebar-display');
  });
  Home.addEventListener('mouseover', () => {
    removeClass(homebar,'homebar-display');
    removeClass(topbarWrapper,'topbar-wrapper-display');
  });
 
  Beauty.addEventListener('click', () => {
    addClass(beautybar, 'beautybar-display');
    addClass(topbarWrapper,'topbar-wrapper-display');
   removeClass(womenbar,'womenbar-display');
   removeClass(kidsbar,'kidsbar-display');
   removeClass(homebar,'homebar-display');
   removeClass(menbar,'menbar-display');
   removeClass(profilebar,'profilebar-display');
  });
  Beauty.addEventListener('mouseover', () => {
    removeClass(beautybarbar,'beautybar-display');
    removeClass(topbarWrapper,'topbar-wrapper-display');
  });
  Profile.addEventListener('click', () => {
    addClass(profilebar, 'profilebar-display');
    addClass(topbarWrapper,'topbar-wrapper-display');
   removeClass(womenbar,'womenbar-display');
   removeClass(kidsbar,'kidsbar-display');
   removeClass(homebar,'homebar-display');
   removeClass(menbar,'menbar-display');
   removeClass(beautybar,'beautybar-display');
  });
  Bar.addEventListener('click' ,() => {
    addClass(SidebarWrapper,'sidebar-wrapper-display');
    addClass(Sidebar,'sidebar-display');
  });
