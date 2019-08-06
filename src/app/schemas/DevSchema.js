import { Schema, model } from 'mongoose';

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'Devschema' }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: 'Devschema' }],
  },
  { timestamps: true }
);

export default model('Devschema', DevSchema);
