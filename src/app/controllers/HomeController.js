require('dotenv').config();

class HomeController {
  async index(req, res) {
    return res.json({ test: 'ok' });
  }
}

export default new HomeController();
