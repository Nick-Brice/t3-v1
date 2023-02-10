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
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
            },
        })
        const result = user;
        const resultArray = [result]
        res.status(200).json(resultArray);
    }
};

export default test;
