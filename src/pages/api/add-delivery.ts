import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const test = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {

        console.log(req.body);

        // Process a POST request
        const user = await prisma.deliveries.create({
            data: {
                record_id: makeid(6),
                delivery_id: makeid(6),
                venue: req.body.venue,
                product_delivered: req.body.product_delivered,
                number_of_products_delivered: req.body.number_of_products_delivered,
                date: req.body.date,
                weight_delivered: req.body.weight_delivered,
                stream: req.body.stream
            },
        })
        const stream = await prisma.venue_Streams.updateMany({
            where: {
                // record_id: req.body.record_id
                name: req.body.product_delivered
            },
            data: {
                number_of_products_delivered: {
                    increment: parseInt(req.body.number_of_products_delivered)
                },
                weight_delivered: {
                    increment: parseInt(req.body.weight_delivered)
                }
            },
        })
        const product = await prisma.venue_Products.updateMany({
            where: {
                // record_id: req.body.record_id
                name: req.body.product_delivered
            },
            data: {
                number_of_deliveries: {
                    increment: 1
                },
                number_of_products_delivered: {
                    increment: parseInt(req.body.number_of_products_delivered)
                },
                weight_delivered: {
                    increment: parseInt(req.body.weight_delivered)
                },
                stock_remaining: {
                    increment: parseInt(req.body.number_of_products_delivered)
                },
            },
        })
        const venue = await prisma.venues.updateMany({
            where: {
                // record_id: req.body.record_id
                name: req.body.venue
            },
            data: {
                number_of_deliveries: {
                    increment: 1
                },
                number_of_restocks: {
                    increment: 1
                },
                number_of_products_delivered: {
                    increment: parseInt(req.body.number_of_products_delivered)
                },
                weight_delivered: {
                    increment: parseInt(req.body.weight_delivered)
                }
            },
        })
        const result = user;
        const resultArray = [result]
        res.status(200).json(resultArray);
    }
};

export default test;
