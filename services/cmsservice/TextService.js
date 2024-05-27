const text = require("../../models/cms/TextSchema");

// Cms add
exports.textregister = async (req, res) => {
  const { position, title } = req.body;
  try {
    const adduser = new text({
      position,
      title,
    });
    await adduser.save();
    res.status(201).json(adduser);
    
    //console.log(adduser,"cmsadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cms pagination all data
exports.gettextdata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 10;
    if (req.body.offset) {
      offset = req.body.offset;
    }
    const searchobject = {};
     if (req.body.search) {
       Object.assign(searchobject, {
         $or: [
           {
             position: {
               $regex: `${req.body.search.toString().trim()}`,
               $options: "i",
             },
           },
           {
             title: {
               $regex: `${req.body.search.toString().trim()}`,
               $options: "i",
             },
           },
         ],
       });
     }
    const records = await text.find(searchobject).skip(offset).limit(limit);
    const totalCount = await text.countDocuments(searchobject);
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

// Cms all data
exports.gettextalldata = async (req, res) => {
  try {
    const userdata = await text.find();
    res.status(201).json(userdata);
    
    // console.log(userdata,"cmsalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cms single data
exports.gettextsingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await text.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual,"cmssingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cms update data
exports.updatetextdata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await text.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);

    //console.log(deletuser,"cmsupdatedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Cms delete data
exports.deletetextdata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await text.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"cmsdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
