import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x775c5626C98D0879dbf926A30B79f42a048ca8F6'
);

export default instance;