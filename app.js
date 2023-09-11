const { User, Post, Comment } = require('./db/models');

async function run() {
  //   const userWithPosts = await User.findOne({
  //     where: { id: 5 },
  //     include: {
  //       model: Post,
  //       as: 'likedPosts',
  //       where: {
  //         id: 3,
  //       },
  //     },
  //   });
  //   console.log(userWithPosts.toJSON());

  const userWithPosts = await User.findOne({
    where: { id: 5 },
    include: {
      model: Comment,
      include: {
        model: Post,
        where: {
          id: 3,
        },
      },
    },
  });
  console.log(userWithPosts.toJSON());
  //   const postsWithUsers = await Post.findOne({
  //     where: { id: 1 },
  //     include: 'likedBy',
  //   });
  //   console.log(postsWithUsers.map((el) => el.toJSON()));
  //   console.log(postsWithUsers.toJSON());
}

// run();

async function amountOfLikesToPost(postId) {
  return Post.findOne({ where: { id: postId }, include: 'likedBy' }).then(
    (postData) => postData.likedBy.length,
  );
}

amountOfLikesToPost(1).then(console.log);
