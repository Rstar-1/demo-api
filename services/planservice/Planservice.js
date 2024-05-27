const plans = require("../../models/plans/Plans");

// Plan add
exports.plansregister = async (req, res) => {
  const { plan } = req.body;
  try {
    const adduser = new plans({
      plan,
    });
    await adduser.save();
    res.status(201).json(adduser);
    
    //console.log(adduser, "planadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Plan pagination all data
exports.getplandata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 10;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        plan: {
          $regex: `${req.body.search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const records = await plans.find(searchobject).skip(offset).limit(limit);
    const totalCount = await plans.countDocuments(searchobject);
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

// Plan all data
exports.getplanalldata = async (req, res) => {
  try {
    const userdata = await plans.find();
    res.status(201).json(userdata);

    //console.log(userdata,"planalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Plan single data
exports.getplansingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await plans.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "plansingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Plan update data
exports.updateplandata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await plans.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);

    //console.log(updateduser, "planupdatedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Plan delete data
exports.deleteplandata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await plans.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"plandeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
