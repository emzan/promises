var salame = function(){

  this.message = 'hey'

  this.getName = function(){

    setTimeout(() => {
      console.log(this.message + 'hilatius')
    }, 2000)
  }

}
var hilatius = new salame()

hilatius.getName()
