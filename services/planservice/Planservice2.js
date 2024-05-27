const planstwo = require("../../models/plans/Plans2");

// Premium Plan add
exports.planstworegister = async (req, res) => {
  const { plan } = req.body;
  try {
    const adduser = new planstwo({
      plan,
    });
    await adduser.save();
    res.status(201).json(adduser);
    
    //console.log(adduser,"plantwoadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Premium Plan pagination all data
exports.getplantwodata = async (req, res) => {
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
    const records = await planstwo.find(searchobject).skip(offset).limit(limit);
    const totalCount = await planstwo.countDocuments(searchobject);
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

// Premium Plan all data
exports.getplanalltwodata = async (req, res) => {
  try {
    const userdata = await planstwo.find();
    res.status(201).json(userdata);

    //console.log(userdata,"plantwoalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Premium Plan single data
exports.getplantwosingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await planstwo.findById({ _id: id });
    res.status(201).json(userindividual);
    
    console.log(userindividual, "plantwosingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Premium Plan update data
exports.updateplantwodata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await planstwo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);

    //console.log(updateduser,"plantwoupdatedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Premium Plan delete data
exports.deleteplantwodata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await planstwo.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"plantwodeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
