import mongoose from 'mongoose';

let assemblySchema = new mongoose.Schema({
  district: String,
  url: String,
  aides: Array,
  name_kr: String,
  pr_secrs: Array,
  email: String,
  photo: String,
  off_phone: String,
  open_assembly_idx: { type: Number, required: true, unique: true },
  name_cn: String,
  birth: String,
  party: String,
  when_elected: String,
  sc_secrs: Array,
  popong_idx: { type: Number, required: true, unique: true },
  hobby: Array,
  assembly_idx: { type: Number, required: true, unique: true },
  name_en: String,
  committee: Array,
  experience: String,
  homepage: String
}, { collection:'assembly' });

let Assembly = mongoose.model('Assembly', assemblySchema);

export default Assembly;
