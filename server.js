const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8000, () => {
    console.log('JSON Server is running')
})

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.id = Math.floor(Math.random() * 1000000); // Генерация уникального ID, если он требуется
    }
    next();
});

server.post('/messages', (req, res, next) => {
    const { user_id, recipient_id, message } = req.body;

    if (!user_id || !recipient_id || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    req.body.timestamp = new Date().toISOString();

    next();
});

server.use(router);
