import type { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";
import { randomUUID } from "crypto";
import { prisma } from "../../server/db/client";

const s3 = new S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: "v4",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const ex = (req.query.fileType as string).split("/")[1];

    // const Key = `${randomUUID()}.${ex}`;

    const userId = 'abc123';
    const images = await prisma.image.findMany({
        where: {
            user_id: userId
        }
    })

    let uploadUrlArray: any = [];

    await Promise.all(
        images.map(async (image) => {
            const s3Params = {
                Bucket: process.env.BUCKET_NAME,
                Key: `${userId}/${image.id}.${image.filetype}`
            };

            const uploadUrl = await s3.getSignedUrl("getObject", s3Params);
            uploadUrlArray.push(uploadUrl);
        })
    ).then(() => {
        // console.log("uploadUrlArray", uploadUrlArray);
        res.status(200).json({
            uploadUrlArray
        });
    }
    );

    // images.forEach(async (image) => {
    //     const s3Params = {
    //         Bucket: process.env.BUCKET_NAME,
    //         Key: `${userId}/${image.id}`
    //     };

    //     const uploadUrl = await s3.getSignedUrl("getObject", s3Params);
    //     uploadUrlArray.push(uploadUrl);
    // })



}