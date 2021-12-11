/* start header */
let search = document.querySelector(".head .icon .fas.fa-search");
let box_search = document.querySelector(".search")
search.addEventListener("click",function()
{
box_search.style.cssText="height:100%;opacity:1;"
})
let close = document.querySelector(".search>i");
close.addEventListener("click",function()
{
    box_search.style.cssText ="height:0; opacity:0;"
})
let list = document.querySelector(".fas.fa-bars");
let nav = document.querySelector(".head ul")
list.addEventListener("click",function()
{
    nav.style.cssText="display:flex;"
    if(list.className=="fas fa-bars")
    {
        list.className="fas fa-times";
    }
    else 
    {
        list.className="fas fa-bars";
        nav.style.cssText="display:none;"
    } 
})
/* end header */
/* start home */ 
let check = document.querySelectorAll(".home input");
let label = document.querySelectorAll(".home label")
check[0].addEventListener("change",function()
{
   label[0].style.cssText="background-color: var(--color1)"
   label[1].style.cssText="background-color: #eee"
   label[2].style.cssText="background-color: #eee"
})
check[1].addEventListener("change",function()
{
   label[1].style.cssText="background-color: var(--color1)"
   label[0].style.cssText="background-color: #eee"
   label[2].style.cssText="background-color: #eee"
})
check[2].addEventListener("change",function()
{
   label[2].style.cssText="background-color: var(--color1)"
   label[1].style.cssText="background-color: #eee"
   label[0].style.cssText="background-color: #eee"
})
/* end home */
/* start links */
let link = document.querySelectorAll(".head .nav ul li");
let dish = document.querySelector(".dish");
let about = document.querySelector(".about")
let menu = document.querySelector(".menu")
let review =document.querySelector(".review")
let height1 = getComputedStyle(dish);
let height2 = getComputedStyle(home);
let height3 = getComputedStyle(about);
let height4 = getComputedStyle(menu);
let height5 = getComputedStyle(review);
window.addEventListener("scroll",function()
{
    if(window.scrollY>=parseInt(height2.height))
    {
            for(let i=0; i<link.length; i++)
                if(i!=1)
                    link[i].classList.remove("active")
                else 
                    link[1].classList.add("active");
    }
    if(window.scrollY<parseInt(height2.height))
    {
        for(let i=0; i<link.length; i++)
                if(i!=0)
                    link[i].classList.remove("active")
                else 
                    link[0].classList.add("active");
    }
    if(window.scrollY>=(parseInt(height2.height) + parseInt(height1.height)))
    {
                    for(let i=0; i<link.length; i++)
                        if(i!=2)
                            link[i].classList.remove("active")
                        else 
                            link[2].classList.add("active");
    }
    if(window.scrollY>=(parseInt(height2.height) + parseInt(height3.height) + parseInt(height1.height)))
    {
                    for(let i=0; i<link.length; i++)
                        if(i!=3)
                            link[i].classList.remove("active")
                        else 
                            link[3].classList.add("active");
    }
    if(window.scrollY>=(parseInt(height2.height) + parseInt(height3.height) + parseInt(height1.height) +parseInt(height4.height)))
    {
                    for(let i=0; i<link.length; i++)
                        if(i!=4)
                            link[i].classList.remove("active")
                        else 
                            link[4].classList.add("active");
    }
    if(window.scrollY>=(parseInt(height2.height) + parseInt(height3.height) + parseInt(height1.height) +parseInt(height4.height) + parseInt(height5.height)))
    {
                    for(let i=0; i<link.length; i++)
                        if(i!=5)
                            link[i].classList.remove("active")
                        else 
                            link[5].classList.add("active");
    }
})
/* end links */