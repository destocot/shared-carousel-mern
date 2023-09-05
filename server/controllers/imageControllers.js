const Image = require('../models/Image');

const getImages = async (req, res) => {
  try {
    const images = (await Image.find({}).sort({ createdAt: 'desc' })).slice(0, 10);
    res.status(200).json(images);
  } catch (error) {
    console.log('error getting images', error);
    res.status(404).json({ mssg: 'error getting images' });
  }
}

const createImage = async (req, res) => {
  const { name, image } = req.body;

  if (!name) {
    return res.status(404).send({ error: 'name is required' })
  }

  if (name.length < 3) {
    return res.status(404).send({ error: 'name must be at least 3 characters long' })
  }

  const imageUrlRegex = /\.(jpeg|jpg|png)(\?.*)?$/i;
  if (!image || !imageUrlRegex.test(image)) {
    return res.status(404).send({ error: 'valid image url is required' })
  }

  try {
    const exist = await Image.find({ image });
    if (exist.length) {
      return res.status(404).send({ error: 'image already exists' })
    }

    const createdImage = await Image.create({ name, image });
    res.status(200).json({ message: `thanks for sharing ${createdImage.name}` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "unable to create image" });
  }
}



module.exports = { getImages, createImage };