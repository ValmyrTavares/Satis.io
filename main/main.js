(()=>{"use strict";class t{constructor(t,o){this.trigger=document.querySelector(t),this.content=document.querySelector(o)}addEvent(){this.trigger.addEventListener("mouseover",(()=>{this.openModal()})),this.trigger.addEventListener("mouseout",(()=>{this.closeModal()}))}openModal(){this.content.classList.add("show-box")}closeModal(){this.content.classList.remove("show-box")}init(){this.addEvent(),console.log(this.trigger),console.log(this.content)}}new t("#nossaVisao",".nossa-visao").init(),new t("#nossaMissao",".nossa-missao").init(),new t("#nossosValores",".nossos-valores").init(),new class{constructor(t){this.link=document.querySelectorAll(t),this.options={behavior:"smooth",block:"start"}}addEvent(){this.link.forEach((t=>{t.addEventListener("click",(()=>{this.scrollToSection(event)}))}))}scrollToSection(t){t.preventDefault(t);const o=t.currentTarget.getAttribute("href");document.querySelector(o).scrollIntoView(this.options)}init(){this.addEvent(),console.log(this.link)}}(".header-buttons a").init(),console.log("Estamos dentro")})();