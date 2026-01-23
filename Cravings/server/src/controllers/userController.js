export const UserUpdate = async (req,res,next) =>{
    try {
        const {fullName,email,mobileNumber} =req.body;
        const currentUser =req.user;

        if(!fullName || !email || !mobileNumber){
            const error = new Error("Required All fields")
            error.statusCode = 401;
            return next(error);
        }

        console.log("Old Data", currentUser);

        currentUser.fullName =fullName;
        currentUser.email =email;
        currentUser.mobileNumber =mobileNumber;
        await currentUser.save();

        console.log("New Data",currentUser);
        res.status(200).json({message:})

    } catch (error) {
        next(error);
        
    }
}