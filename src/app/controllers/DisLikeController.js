import DevSchema from '../schemas/DevSchema';

class DisLikeController {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;
    console.log('user::::', user);
    const loggedDev = await DevSchema.findById(user);
    const targetDev = await DevSchema.findById(devId);

    // codigo entre 400 e 499 usuario informou alguma coisa errada
    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    const { _id: idtargetDev } = targetDev;

    loggedDev.dislikes.push(idtargetDev);
    await loggedDev.save();

    return res.json(targetDev);
  }
}

export default new DisLikeController();
