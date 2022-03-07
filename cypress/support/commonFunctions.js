class commonFunctions{
    firstname(){
        var firstname           = '';
        var characters       = 'ABCDEFGHIJKLmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
          firstname += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return firstname;
    }
    lastName(){
    
            var lastname           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
          lastname += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return lastname
    }
    emailIdGenerator(){
        var firstname= this.firstname();
        var lastname=this.lastName();
        var temp1= firstname.substring(0,4);
        var temp2 = lastname.substring(0,4);
        var emailId = temp1.concat(temp2,"@gmail.com");
        return emailId;
    }

    randomPasswordGenerator(){
        var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
    }

    
}
module.exports = new commonFunctions();