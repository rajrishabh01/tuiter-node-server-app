import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.image = "/lg.jpeg"
    const insertedTuit = await tuitsDao
                             .createTuit(newTuit);
    res.json(insertedTuit)

}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitId = req.params.tid;
    const tuitBody = req.body;

    const status = await tuitsDao
                       .updateTuit(tuitId,
                        tuitBody);
    res.json(status)
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
                       .deleteTuit(tuitdIdToDelete);
    res.json(status);
  }
  
  

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;

