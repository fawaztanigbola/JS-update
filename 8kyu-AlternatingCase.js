String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let nword = ""
  for(const char of this){
    if(char >= "A" && char <= "Z"){
      nword += char.toLowerCase()
    }else if(char >= "a" && char <= "z"){
      nword += char.toUpperCase()
    }else{
      nword += char
    }
  }
  return nword
}
