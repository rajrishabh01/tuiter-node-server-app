import posts from "./tuits.js"

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit)

}

const findTuits = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitId = req.params.tid;
    const tuitBody = req.body;

    const tuitIndex = tuits.findIndex(
        t => t._id.toString() === tuitId
    );

    tuits[tuitIndex] = {...tuits[tuitIndex], ...tuitBody};
    res.sendStatus(200)
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
      t._id.toString() !== tuitdIdToDelete);
    res.sendStatus(200);
  }
  
  

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;

