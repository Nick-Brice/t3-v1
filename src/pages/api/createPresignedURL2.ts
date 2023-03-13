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
    const ex = (req.query.fileType as string).split("/")[1];
    if (typeof ex == 'string') {

        console.log(ex);

        const Key = `${randomUUID()}.${ex}`;

        const userId = 'abc123';
        const image = await prisma.image.create({
            data: {
                user_id: userId,
                filetype: ex
            }
        })

        const s3Params = {
            Bucket: process.env.BUCKET_NAME,
            Key: `${userId}/${image.id}.${ex}`,
            Expires: 60,
            ContentType: `image/${ex}`,
        };
        const uploadUrl = await s3.getSignedUrl("putObject", s3Params);

        // console.log("uploadUrl", uploadUrl);

        res.status(200).json({
            uploadUrl,
            key: Key,
        });
    }

}