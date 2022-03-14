export function containerWidth() {
    const boxContainer = document.getElementById('box-container')
    const spanWidthValue = document.getElementById('width-value')

    spanWidthValue.textContent = boxContainer.offsetWidth

    const setSpanValue = () => {
        spanWidthValue.textContent = boxContainer.offsetWidth
    }

    window.onresize = setSpanValue
}
