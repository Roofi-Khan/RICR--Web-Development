import jwt from "jsonwebtoken";

export const genToken = (user, res) => {
  try {
    const payload = {
      id: user._id,
      role: user.role || "admin",
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    }); // 1h--hours , 60 for mins , '' empty for forever

    console.log(token);

    res.cookie("parleG", token, {
      maxAge: 1000 * 60 * 60 * 24, //value in ms
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {
    throw error;
  }
};
