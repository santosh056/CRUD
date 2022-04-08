const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://codelover14:19981006@login-system.xlqfi.mongodb.net/santosh-coll?retryWrites=true&w=majority",{
}).then(()=> {
    console.log("connected");
}).catch((err) =>{
    console.log("Error",err);
})
