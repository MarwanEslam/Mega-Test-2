const FormRequest = require("./models/FormRequest");

const resolvers = {
  Query: {
    getFormRequests: async () => await FormRequest.find().sort({ createdAt: -1 }),
  },
  Mutation: {
    submitForm: async (_, args) => {
      const newRequest = new FormRequest({ ...args });
      return await newRequest.save();
    },
  },
};

module.exports = resolvers;