const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

const router = require("express").Router();

//@type     -   GET
//@route    -   /api/profile
//@desc     -   Just for testing
//@access   -   PUBLIC
router.get('/', (req, res) => res.send('User related routes'))



router.post("/add", addToLikedMovies);
router.get("/liked/:email",getLikedMovies)
router.put("/delete",removeFromLikedMovies)
module.exports = router;