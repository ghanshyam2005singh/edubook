import { Connection, PublicKey } from "@solana/web3.js";

const SOLANA_NETWORK = "https://api.devnet.solana.com";
const connection = new Connection(SOLANA_NETWORK);

export const getAccountInfo = async (publicKey) => {
    try {
        const accountInfo = await connection.getAccountInfo(new PublicKey(publicKey));
        return accountInfo;
    } catch (error) {
        console.error("Error fetching Solana account info:", error);
    }
};
