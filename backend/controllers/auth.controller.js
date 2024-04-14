export const checkUser = async (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
};

export const logoutUser = async (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: "Logged out" });
  });
};
