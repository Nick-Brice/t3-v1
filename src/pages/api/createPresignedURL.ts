import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";
import S3 from 'aws-sdk/clients/s3';
const s3 = new S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'eu-west-2',
});

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

    const userId = 'abc123';
    const image = await prisma.image.create({
        data: {
            user_id: userId
        }
    })

    return new Promise((resolve, reject) => {
        s3.createPresignedPost({
            Fields: {
                key: `${userId}/${image.id}`
            },
            Conditions: [
                ["starts-with", "$Content-Type", "image/"],
                ["content-length-range", 0, 1000000],
            ],
            Expires: 30,
            Bucket: 'the-rubbish-project-test-bucket',
        }, (err, signed) => {
            if (err) return reject(err);
            resolve(signed);
        })
    })

    // res.status(200).json('JSON');
}


export default test;
