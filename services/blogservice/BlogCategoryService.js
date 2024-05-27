const blogcategory = require("../../models/blogs/BlogCategorySchema");

// Category add
exports.blogcategoryregister = async (req, res) => {
  const { category } = req.body;
  try {
    const adduser = new blogcategory({
      category,
    });
    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser,"categoryadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Category all data
exports.getcategorydata = async (req, res) => {
  try {
    const userdata = await blogcategory.find();
    res.status(201).json(userdata);
    
    //console.log(userdata,"categoryalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Category single data
exports.getcategorysingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await blogcategory.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual,"categorysingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Category update data
exports.updatecategorydata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await blogcategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateduser);

    //console.log(updateduser,"categoryupdateedata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Category delete data
exports.deletecategorydata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await blogcategory.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser,"categorydeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
