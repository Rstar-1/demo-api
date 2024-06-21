const project = require("../../models/projects/ProjectSchema");

// Project add
exports.projectregister = async (req, res) => {
    const { title, subtitle, description } = req.body;

    try {
        const adduser = new project({
            title, subtitle, description,
            picture: req.body.picture,
        });

        await adduser.save();
        res.status(201).json(adduser);
        // console.log(adduser);
    } catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
};

// Project pagination all data
exports.getprojectdata = async (req, res) => {
    try {
        const { offset, search } = req.body;
        const searchObject = {};

        if (search) {
            Object.assign(searchObject, {
                subtitle: {
                    $regex: `${search.toString().trim()}`,
                    $options: "i",
                },
            });
        }
        const projects = await project.find(searchObject)
            .skip(offset)
            .limit(6);
        const totalCount = await project.countDocuments(searchObject);
        res.json({ projects, totalCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Project all data
exports.getprojectalldata = async (req, res) => {
    try {
        const userdata = await project.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
};

// Project single data
exports.getprojectsingledata = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await project.findById({ _id: id });
        console.log(userindividual);
        res.status(201).json(userindividual);
    } catch (error) {
        res.status(422).json(error);
    }
};

// Project update data
exports.updateprojectdata = async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await project.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                subtitle: req.body.subtitle,
                description: req.body.description,
                picture: req.body.picture,
            },
            {
                new: true,
            }
        );

        console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
};

// Project delete data
exports.deleteprojectdata = async (req, res) => {
    try {
        const { id } = req.params;

        const deletuser = await project.findByIdAndDelete({ _id: id });
        console.log(deletuser);
        res.status(201).json(deletuser);
    } catch (error) {
        res.status(422).json(error);
    }
};