module.exports = mongoose => {
    const Envs = mongoose.model(
      "envs",
      mongoose.Schema(
        {
          id: String,
          modifiedBy: String,
          variables: [
            {
              key: String,
              value: String
            }
          ]
        },
        { timestamps: true }
      )
    );
  
    return Envs;
  };