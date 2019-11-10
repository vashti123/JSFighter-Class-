function attack() {
  // This is how we write to developer console
  // console.log("Rawr! I have attacked!");

  // This is how we get the content of 'outputBox'
  // console.log(document.getElementById('outputBox').innerHTML)

  // This is how we change 'outputBox's innerHTML
  // document.getElementById('outputBox').innerHTML = "New Text <br>"

  let oldText = document.getElementById('outputBox').innerHTML
  document.getElementById('outputBox').innerHTML = "Attacked!<br>"
  document.getElementById('outputBox').innerHTML += "Attacked again!<br>"
  document.getElementById('outputBox').innerHTML += oldText

}
