module.exports = app => {
    app.get('scores', (req, res) => {
        res.send('scores');
    })
}