const handler = (req, res) => {
    // http://localhost:3000/api/hello
    res.status(200).json({ text: 'Hello' })
}

export default handler;