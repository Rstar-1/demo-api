const premiumenquiry = require("../../models/plans/EnquiryPremium");

// PremiumEnquiry add
exports.premiumregister = async (req, res) => {
  const { name, message } = req.body;
  try {
    const adduser = new premiumenquiry({
      name,
      message,
    });
    await adduser.save();
    res.status(201).json(adduser);
    
    //console.log(adduser, "premiumadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// PremiumEnquiry all data
exports.getpremiumdata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 4;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        $or: [
          {
            name: {
              $regex: `${req.body.search.toString().trim()}`,
              $options: "i",
            },
          },
          {
            message: {
              $regex: `${req.body.search.toString().trim()}`,
              $options: "i",
            },
          },
        ],
      });
    }
    const records = await premiumenquiry
      .find(searchobject)
      .skip(offset)
      .limit(limit);
    const totalCount = await premiumenquiry.countDocuments(searchobject);
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

// PremiumEnquiry single data
exports.getpremiumsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await premiumenquiry.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "premiumsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// PremiumEnquiry update data
exports.updatepremiumdata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await premiumenquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);
    
    //console.log(updateduser, "premiumupdatedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// PremiumEnquiry delete data
exports.deletepremiumdata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await premiumenquiry.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);
    
    //console.log(deletuser, "premiumdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
