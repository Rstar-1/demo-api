const seo = require("../../models/seo/SeoSchema");

// Seo add
exports.seoregister = async (req, res) => {
  const { metatitle, metadescription, metakeyword, metaconcial, metaauthor } =
    req.body;
  try {
    const adduser = new seo({
      metatitle,
      metadescription,
      metakeyword,
      metaconcial,
      metaauthor,
    });
    
    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "seoadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo all data
exports.getseodata = async (req, res) => {
  try {
    const userdata = await seo.find();
    res.status(201).json(userdata);

    // console.log(userdata, "seoalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo single data
exports.getseosingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await seo.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "seosingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo update data
exports.updateseodata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await seo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    //console.log(updateduser, "seoupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo delete data
exports.deleteseodata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await seo.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);
    
    //console.log(deletuser, "seodeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
