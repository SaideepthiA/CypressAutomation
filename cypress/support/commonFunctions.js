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
        firstname= this.firstname();
        lastname=this.lastName();
        var temp1= firstname.substr(0,4);
        var temp2 = lastname.substr(0,4);
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