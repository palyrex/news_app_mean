var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/posts', function(req, res, next) {
	Post.find(function(err, posts) {
		if(err){return next(err);}

		res.json(posts);
	});
});

app.post('/posts', function(req, res, next) {
	var post = new Post(req.body);

	post.save(function(err, post) {
		if(err){return next(err);}

		res.json(post);
	});
});

app.param('post', function(req, res, next, id) {
	var query = Post.findById(id);

	query.exec(function(err, post) {
		if(err){return next(err);}
		if(!post){return next(new Error("Can't find post"));}

		req.post = post;
		return next();
	});
});

app.get('/posts/:post', function(req, res) {
	res.json(req.post);
});