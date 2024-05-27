const blogs = require("../../models/blogs/BlogSchema");

// Blog add
exports.blogregister = async (req, res) => {
  const { title, category, desc } = req.body;

  try {
    const adduser = new blogs({
      title,
      category,
      desc,
      picture: req.body.picture,
    });
    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser,"blogadddata");
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

// Blog pagination all data
exports.getblogdata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 6;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        title: {
          $regex: `${req.body.search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const records = await blogs.find(searchobject).skip(offset).limit(limit);
    const totalCount = await blogs.countDocuments(searchobject);
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

// Blog all data
exports.getallblogdata = async (req, res) => {
  try {
    const userdata = await blogs.find();
    res.status(201).json(userdata);

    //console.log(userdata,"blogsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blog single data
exports.getsingleblogdata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await blogs.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual,"blogsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blog update data
exports.updateblogdata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await blogs.findByIdAndUpdate(
      id,
      {
        picture: req.body.picture,
        title: req.body.title,
        category: req.body.category,
        desc: req.body.desc,
        status: req.body.status,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updateduser);
    
    console.log(updateduser, "blogupdatedata");
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

// Blog delete data
exports.deleteblogdata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await blogs.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"blogdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
