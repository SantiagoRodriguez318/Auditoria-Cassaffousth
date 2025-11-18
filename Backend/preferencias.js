import express from 'express';
import cors from 'cors';
import vexor from 'vexor';
import dotenv from 'dotenv';

dotenv.config();

const { Vexor } = vexor;

const vexorInstance = new Vexor({
    publishableKey: process.env.NEXT_PUBLIC_VEXOR_PUBLISHABLE_KEY,
    apiKey: process.env.VEXOR_SECRET_KEY,
    projectId: process.env.VEXOR_PROJECT,
})

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


app.post('/create_payment', async (req, res) => {

    const { BasicPlan } = req.body.BasicPlan;
    const { StandardPlan } = req.body.StandardPlan;
    const { PremiumPlan } = req.body.PremiumPlan;

    if (!BasicPlan && !StandardPlan && !PremiumPlan) {
        return res.status(400).json({ error: 'No se seleccionó ningún plan.' });
    }
    
    try {
        const paymentResponse = await vexorInstance.pay.mercadopago({
            items: [
                {
                    title: 'Plan Básico',
                    quantity: BasicPlan ? 1 : 0,
                }]
        })    
    } catch (error) {
        
        }   
});