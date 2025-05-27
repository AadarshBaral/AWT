const { PrismaClient } = require('../../../prisma/generated/prisma');
const prisma = new PrismaClient();

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await prisma.category.create({ data: { name } });
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create category' });
    }
};

exports.createCard = async (req, res) => {
    try {
        const { question, answer, categoryId } = req.body;
        const card = await prisma.card.create({
            data: {
                question,
                answer,
                categoryId,
            },
        });
        res.json(card);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create card' });
    }
};

exports.getCardsByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const cards = await prisma.card.findMany({
            where: { categoryId: id },
        });
        res.json(cards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
};

exports.getAllCards = async (req, res) => {
    try {
        const cards = await prisma.card.findMany({
            include: { category: true },
        });
        res.json(cards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
};

exports.updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer, categoryId } = req.body;
        const updateData = {};
        if (question !== undefined) updateData.question = question;
        if (answer !== undefined) updateData.answer = answer;
        if (categoryId !== undefined) updateData.categoryId = categoryId;

        const updatedCard = await prisma.card.update({
            where: { id },
            data: updateData,
        });
        res.json(updatedCard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update card' });
    }
};

exports.deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCard = await prisma.card.delete({
            where: { id },
        });
        res.json(deletedCard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete card' });
    }
};
