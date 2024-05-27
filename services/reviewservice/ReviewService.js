const review = require("../../models/reviews/ReviewSchema");

// Review add
exports.reviewsregister = async (req, res) => {
  const { fullname, message } = req.body;
  try {
    const adduser = new review({
      fullname,
      message,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "reviewadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Review pagination all data
exports.getreviewdata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 6;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        fullname: {
          $regex: `${req.body.search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const records = await review.find(searchobject).skip(offset).limit(limit);
    const totalCount = await review.countDocuments(searchobject);
    res.status(200).json({
      data: records,
      total: totalCount,
      totalCount: totalCount,
    });
  } catch (error) {
    console.error("Error fetching basic data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Review all data
exports.getreviewalldata = async (req, res) => {
  try {
    const userdata = await review.find();
    res.status(201).json(userdata);
    
    //console.log(userdata, "reviewalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Review single data
exports.getreviewsingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await review.findById({ _id: id });
    res.status(201).json(userindividual);
    
    //console.log(userindividual,"reviewsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Review update data
exports.updatereviewdata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await review.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);

    console.log(updateduser, "reviewupdatedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Review delete data
exports.deletereviewdata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await review.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);
    
    //console.log(deletuser, "reviewdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
