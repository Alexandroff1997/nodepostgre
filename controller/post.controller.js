const db = require('../db/db.js');

class Post {
	async createPost(req, res) {
		const { title, content, personId } = req.body;
		const newPost = await db.query(`INSERT INTO post (title, content, person_id) VALUES ($1, $2, $3) RETURNING *`, [title, content, personId]);
		res.json(newPost.rows[0]); 
	}

	async getPostsByUser(req, res) {
		const id = req.query.id;
		const posts = await db.query(`SELECT * FROM post WHERE person_id = $1`, [id]);
		res.json(posts.rows);
	}
}

module.exports = new Post();