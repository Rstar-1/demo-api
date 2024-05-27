const brand = require("../../models/brands/BrandSchema");

// Brand add
exports.brandregister = async (req, res) => {
  const { name } = req.body;

  try {
    const adduser = new brand({
      name,
      picture: req.body.picture,
    });
    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser,"brandadddata");
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

// Brand pagination all data
exports.getbranddata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 6;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        name: {
          $regex: `${req.body.search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const records = await brand.find(searchobject).skip(offset).limit(limit);
    const totalCount = await brand.countDocuments(searchobject);
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

// Brand all data
exports.getbrandalldata = async (req, res) => {
  try {
    const userdata = await brand.find();
    res.status(201).json(userdata);

    //console.log(userdata,"brandalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Brand single data
exports.getbrandsingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await brand.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual,"brandsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Brand update data
exports.updatebranddata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await brand.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        picture: req.body.picture,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updateduser);

    //console.log(updateduser,"brandupdatedata");
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

// Brand delete data
exports.deletebranddata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await brand.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"branddeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
