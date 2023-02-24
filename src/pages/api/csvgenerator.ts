import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { Response } from 'express';

interface CustomResponse extends NextApiResponse {
    sendFile: Response['sendFile'];
}

export default function handler(req: NextApiRequest, res: CustomResponse) {
    const data = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 },
    ];

    const csvWriter = createObjectCsvWriter({
        path: 'data.csv',
        header: [
            { id: 'name', title: 'Name' },
            { id: 'age', title: 'Age' },
        ],
    });

    csvWriter.writeRecords(data)
        .then(() => {
            const filePath = path.join(process.cwd(), 'data.csv');
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent('data.csv')}`);
            res.sendFile(filePath);
        })
        .catch((error) => console.error(error));
}
