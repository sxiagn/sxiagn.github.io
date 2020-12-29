

window.onload = ()=>{
  const divElement = document.createElement('div')
  divElement.innerHTML = '<img id="sideImg" src="/img/sideImg.jpg"/>'
  divElement.style.padding = '24px 20px 0 20px'
  const sidebar = document.querySelectorAll('.sidebar')[0]
  sidebar.insertBefore(divElement, sidebar.childNodes[0])
  const sideImg = document.getElementById('sideImg')
  sideImg.style.width = '100%'
  sideImg.style.verticalAlign = 'middle'
}
