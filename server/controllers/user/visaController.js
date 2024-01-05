import axios from "axios";

const visaController = {
  getData: async (req, res) => {
    const { from, to } = req.params;
    try {
      const response = await axios.get(
        `https://rough-sun-2523.fly.dev/api/${from}/${to}`
      );

      if (response) {
        console.log("data........",response.data);
        res.json(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default visaController;
