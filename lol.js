var topbarNavigator=document.querySelector(".topbar-navigator");
var subNavInner=document.querySelector(".sub-nav-inner");
var ulWrapper=document.querySelector(".ul-wrapper");
topbarNavigator.onmouseover=function () {
    subNavInner.style.display="block";
}
ulWrapper.onmouseleave=function () {
    subNavInner.style.display="none";
}

var topbarUser=document.querySelector(".topbar-user");
var topbarPrompt2=document.querySelector(".topbar-prompt2");
topbarUser.onmouseover=function () {
    topbarPrompt2.style.visibility="visible";
    topbarUser.style.backgroundColor=" rgba(27,27,27,0.5)";
}
topbarUser.onmouseleave=function(){
    topbarPrompt2.style.visibility="hidden";
    topbarUser.style.backgroundColor="";
}
//这里是menuUl的切换
var menuUl=document.querySelector(".menu ul");
var menuUlLis=document.querySelectorAll(".menu ul li");
var pages=document.querySelectorAll(".page-wrapper>div")
menuUl.addEventListener("click",function(e){
    if(e.target.nodeName!=="LI") return;
    //点击menuUl时出现下划线，其它下划线去掉
    for(var i=0;i<menuUlLis.length;i++){
        menuUlLis[i].classList.remove("border-bottom");
    }
    var currentLi=e.target;
    currentLi.classList.add("border-bottom");
    //页面切换
    var index=getTabIndex(menuUlLis,"border-bottom");
    for(var k=0;k<pages.length;k++){
        if(!pages[k].classList.contains("hide")){
            pages[k].classList.add("hide");
        }
    }
    pages[index].classList.remove("hide");
})

//下面是promo-menu的onmouseover效果
var promoMenu=document.querySelector(".promo-menu");
var promoMenuLis=document.querySelectorAll(".promo-menu>li");
var promoImagesUl=document.querySelector(".promo-images>ul");
promoMenu.onmouseover=function (e) {
    var currentLi=e.target;
    for(var i=0;i<promoMenuLis.length;i++){
        promoMenuLis[i].classList.remove("on");
    }
    currentLi.classList.add("on");
    //这里做图片移动效果
    var index=getTabIndex(promoMenuLis,"on");
    promoImagesUl.style.marginLeft=index*(-820)+"px";
}
setInterval(function(){
    var index=getTabIndex(promoMenuLis,"on");
    if(index!==promoMenuLis.length-1){
        addClassFromIndex(promoMenuLis,index+1,"on");
        promoImagesUl.style.marginLeft=(index+1)*(-820)+"px";
    }else{
        addClassFromIndex(promoMenuLis,0,"on");
        promoImagesUl.style.marginLeft=0;
    }
},5000);


//下面给content-middle-tab处添加onmouseover效果
var contentMiddleTabUl=document.querySelector(".content-middle-tab ul");
var contentMiddleTabUlLis=document.querySelectorAll(".content-middle-tab ul li");
addClassForTab(contentMiddleTabUl,contentMiddleTabUlLis,"mouseover","current");

//下面给content-middle-news处添加切换
var contentMiddleNews=document.querySelectorAll(".content-middle-news");
var showIndex;
contentMiddleTabUl.addEventListener("mouseover",function(){
    showIndex=getTabIndex(contentMiddleTabUlLis,"current");
    addClassFromIndex(contentMiddleNews,showIndex,"show");
})
