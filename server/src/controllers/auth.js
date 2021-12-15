const { users } = require("../../models");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.SignUp = async (req, res) => {
  const schema = Joi.object({
    fullname: Joi.string().min(5).required(),
    username: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      status: "bad requests",
    });
  }

  try {
    const cekEmail = await users.findOne({
      where: {
        fullname: req.body.email,
      },
    });

    if (cekEmail) {
      return res.status(400).send({
        status: "bad requests",
        message: "email is Already exists!",
      });
    }

    const { fullname, phone, username, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const data = await users.create({
      fullname: fullname,
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "Server ERROR",
    });
  }
};

exports.signIn = async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(5).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });
  }

  try {
    const { username, password } = req.body;
    const data = await users.findOne({
      where: {
        username: username,
      },
    });

    if (!data) {
      return res.status(400).send({
        status: "failed",
        message: "username/password incorrect",
      });
    }

    const validd = await bcrypt.compare(password, data.password);
    if (!validd) {
      return res.status(400).send({
        status: "failed",
        message: "username/password incorrect",
      });
    }

    const token = jwt.sign(
      { id: data.id, email: data.email },
      process.env.TOKEN_KEY
    );
    res.send({
      status: "success",
      user: {
        data,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "SERVER ERROR",
      message: "ERROR",
    });
  }
};
