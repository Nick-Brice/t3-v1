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

        // Process a POST request
        const user = await prisma.user.create({
            data: {
                email: 'failure',
                name: 'failure',
            },
        })
        const result = user;
        const resultArray = [result]
        res.status(200).json(resultArray);
    } else if (req.method === 'GET') {
        // Handle any other HTTP method
        const user = await prisma.user.findMany();
        res.status(200).json(user);
    } else if (req.method === 'DELETE') {
        const deleteUsers = await prisma.user.deleteMany({})
        res.status(200).json(deleteUsers);
    } else if (req.method === 'PUT') {
        const updateUser = await prisma.user.update({
            where: {
                email: 'failure',
            },
            data: {
                email: makeid(15),
            },
        })
        const result = updateUser;
        const resultArray = [result]
        res.status(200).json(resultArray);
    }
};

export default test;
