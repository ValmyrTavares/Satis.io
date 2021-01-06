export default class OpenCloseModal{
    constructor(trigger, content){
        this.trigger = document.querySelector(trigger)
        this.content = document.querySelector(content)        
    }

    addEvent(){
        this.trigger.addEventListener('mouseover',()=>{
            this.openModal()
        })
        this.trigger.addEventListener('mouseout',()=>{
            this.closeModal()
        })
    }

    openModal(){    
      this.content.classList.add("show-box")
    }

    closeModal(){        
        this.content.classList.remove("show-box")
    }

    init(){
      this.addEvent()   
      console.log(this.trigger)  
      console.log(this.content)     
    }
}



