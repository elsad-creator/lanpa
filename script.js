function sekliDeis() {
    let qapali = document.getElementById("qapali")
    let aciq = document.getElementById("aciq")
    let button = document.querySelector("button")

    
    if (qapali.style.display === "block") {
      qapali.style.display = "none"
      aciq.style.display = "block"
      button.innerText = "off"
      button.style.color = "black"
      button.style.backgroundColor = "red"
    } else {
        qapali.style.display = "block"
        aciq.style.display = "none"
        button.innerText = "on"
        button.style.color = "black"
        button.style.backgroundColor = "green"
    }
  }
  sekliDeis()