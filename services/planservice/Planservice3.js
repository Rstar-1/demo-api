const plansthird = require("../../models/plans/Plans3");

// SuperPremium Plan add
exports.plansthirdregister = async (req, res) => {
  const { plan } = req.body;
  try {
    const adduser = new plansthird({
      plan,
    });
    await adduser.save();
    res.status(201).json(adduser);
    
    //console.log(adduser,"planthirdadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// SuperPremium Plan pagination all data
exports.getplanthirddata = async (req, res) => {
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
    const records = await plansthird.find(searchobject).skip(offset).limit(limit);
    const totalCount = await plansthird.countDocuments(searchobject);
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

// SuperPremium Plan all data
exports.getplanallthirddata = async (req, res) => {
  try {
    const userdata = await plansthird.find();
    res.status(201).json(userdata);

    //console.log(userdata, "planthirdalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// SuperPremium Plan single data
exports.getplanthirdsingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await plansthird.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual,"planthirdsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// SuperPremium Plan update data
exports.updateplanthirddata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await plansthird.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
   
    //console.log(updateduser,"planthirdupdatedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// SuperPremium Plan delete data
exports.deleteplanthirddata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await plansthird.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"planthirddeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
