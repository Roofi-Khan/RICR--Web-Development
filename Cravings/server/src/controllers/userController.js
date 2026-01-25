import User from "../models/userModel.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("Required All fields");
      error.statusCode = 400;
      return next(error);
    }

    console.log("Old Data", currentUser);

    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobileNumber = mobileNumber;
    await currentUser.save();

    console.log("New Data", currentUser);

    // Another way

    // const updatedUser=await User.findByIdAndUpdate(
    //     {_id:currentUser._id},{
    //         fullName,
    //         email,
    //         mobileNumber,
    //     },
    // {new:true},
    // );
    // console.log("Updated Date:",updatedUser);

    res
      .status(200)
      .json({ message: "User Updated Successfully", data: currentUser });
      console.log("Updating the user")
  } catch (error) {
    next(error);
  }
};
