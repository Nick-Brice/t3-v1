const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.get('/sum', async (req, res) => {
  const values = await prisma.value.findMany();
  const sum = values.reduce((total, current) => total + current.amount, 0);
  res.send({ sum });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
