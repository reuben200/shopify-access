import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

const fetchOrders = async (req, res) => {
    try {  
      const response = await axios.get(
        `https://${SHOPIFY_STORE_URL}/admin/api/2023-01/orders.json?status=any`,  // ✅ Fetch all orders
        {
          headers: {
            "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
          },
        }
      );
    
      res.json(response.data.orders);  // ✅ Ensure only `orders` are sent
    } catch (error) {
      console.error("Shopify API Error:", error.response?.data || error.message);
      res.status(500).json({ error: error.message });
    }
  };
  

export default fetchOrders;





// export const getOrders = async (req, res) => {
//     try {
//       const orders = await Order.find();  // ✅ Fetch all orders
//       res.json(orders);  // ✅ Return orders as JSON response
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };