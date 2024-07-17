import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json('Hello World');
});

router.post('/', (req, res) => {
    res.json('Hello World POST');
});

export default router;