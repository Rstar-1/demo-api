const image = require("../../models/cms/ImageSchema");

// Cms Image add
exports.imageregister = async (req, res) => {
  const { position } = req.body;

  try {
    const adduser = new image({
      position,
      picture: req.body.picture,
    });
    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser,"cmsimageadddata");
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

// Cms Image pagination all data
exports.getimagedata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 10;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        position: {
          $regex: `${req.body.search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const records = await image.find(searchobject).skip(offset).limit(limit);
    const totalCount = await image.countDocuments(searchobject);
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

// Cms Image all data
exports.getimagealldata = async (req, res) => {
  try {
    const userdata = await image.find();
    res.status(201).json(userdata);
   
    // console.log(userdata,"cmsimagealldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cms Image single data
exports.getimagesingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await image.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual,"cmsimagesingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cms Image update data
exports.updateimagedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await image.findByIdAndUpdate(
      id,
      {
        position: req.body.position,
        picture: req.body.picture,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updateduser);

    //console.log(updateduser,"cmsimageupdatedata");
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

// Cms Image delete data
exports.deleteimagedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await image.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"cmsimagedeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
