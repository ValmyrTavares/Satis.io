import OpenCloseModal from './module/OpenCloseModal.js'
import ScrollSuave from './module/ScrollSuave.js'

 const modalVisao = new OpenCloseModal("#nossaVisao",".nossa-visao")
 modalVisao.init();

const modalMissao = new OpenCloseModal("#nossaMissao",".nossa-missao")
modalMissao.init();

const modalValores = new OpenCloseModal("#nossosValores",".nossos-valores")
modalValores.init();

const scroll = new ScrollSuave(".header-buttons a")

scroll.init()
console.log("Estamos dentro")




