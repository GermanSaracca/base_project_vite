/* 
    Esta funcion es solo para mostrar el ancho del contenedor padre del elemento 
    que usa container queries para el ejemplo
*/
export function containerWidth() {
    const boxContainer = document.getElementById('box-container')
    const spanWidthValue = document.getElementById('width-value')

    spanWidthValue.textContent = boxContainer.offsetWidth

    const setSpanValue = () => {
        spanWidthValue.textContent = boxContainer.offsetWidth
    }

    window.onresize = setSpanValue
}
