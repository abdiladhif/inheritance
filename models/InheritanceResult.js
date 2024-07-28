const mongoose = require('mongoose');

const InheritanceResultSchema = new mongoose.Schema({
  email: { type: String, required: true },
  result: {
    Qaybta: {
      type: Map,
      of: Number,
      required: true,
    },
    references: {
      type: Map,
      of: String,
      required: true,
    },
    LacagtaGuud: { type: Number, required: true },
    Jinsi: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('InheritanceResult', InheritanceResultSchema);
