const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
/*colocando ese checkboxes es como decir que la funcion se 
ejecuete cuanod suceda el scroll*/


checkBoxes()
//ejecuta la función

function checkBoxes() {
    
    console.log(window.innerHeight / 5 * 4)
    
    const activator = window.innerHeight / 5 * 4
    //De entreda le pone la clase show a 3

    /*dependiendo de la altura de la vendana del navegador
    se divide en 5 y se multiplica por 4 */

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        /*Devuelve el tamaño de un elemento y su posición en 
        relación con la ventana gráfica */
         
        if(boxTop < activator) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
        /*si la contante boxTop es manos a la contante activator entonces a los
        elementos con la clase box se le agrega los estilos del show */
        
    })
    /*a la constante boxes se le ejecuta en metodo foreach con una 
    funcion flecha  */
    
}