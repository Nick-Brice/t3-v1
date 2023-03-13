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
        const user = await prisma.venue_Streams.create({
            data: {
                record_id: makeid(6),
                name: req.body.name,
                venue: req.body.venue,
                products: req.body.products
            },
        })
        const product = await prisma.venue_Products.update({
            where: {
                record_id: req.body.record_id,
            },
            data: {
                stream: req.body.name
            },
        })
        const venue = await prisma.venues.updateMany({
            where: {
                // record_id: req.body.record_id
                name: req.body.venue
            },
            data: {
                number_of_streams: {
                    increment: 1
                }
            },
        })
        const result = user;
        const resultArray = [result]
        res.status(200).json(resultArray);
    }
};

export default test;