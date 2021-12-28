import { NextApiHandler } from "next";
import data from "../../../lib/contract.json";

const nft: NextApiHandler = (req, res) => {
  const { metadata } = req.query;
  const nftData = data.find(x => String(x.metadata) === String(metadata));

  if (nftData) {
    res.status(200).json(nftData);
  } else {
    res.status(404).end();
  }
};

export default nft;
