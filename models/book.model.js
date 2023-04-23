module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    nama: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    published: {type: Number, required: true},
  });

  schema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;

    return object;
  });
  return mongoose.model('books', schema);
};
