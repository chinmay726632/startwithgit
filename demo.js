 console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });

  const getButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

   const getColdDrink =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coldrink'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    let [ popcorn, butter, coldrink ] =
    await Promise.all([ getPopcorn, getButter, getColdDrink  ]);

    console.log(`got ${popcorn}, ${butter}, ${coldrink}`);


  return ticket;

};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
const posts = [];
let lastActivityTime = null;

async function createPost(post) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  posts.push(post);
  resolve();
  }, 2000);
  });
  }

  async function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  lastActivityTime = new Date();
  resolve();
  }, 1000);
  });
  }

  async function deleteLastPost() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  if (posts.length > 0) {
  const deletedPost = posts.pop();
  resolve(deletedPost);
  } else {
  reject("ERROR: NO POSTS FOUND");
  }
  }, 1500);
  });
  }

  function getAllPostsAndActivityTime() {
  console.log("All posts: ", posts);
  console.log("Last activity time: ", lastActivityTime);
  }

  async function main() {
  try {
  await createPost({ title: "First Post", body: "This is my first post." });
  await updateLastUserActivityTime();
  getAllPostsAndActivityTime();
  const deletedPost = await deleteLastPost();
  console.log("Post deleted: ", deletedPost);
  getAllPostsAndActivityTime();
  } catch (error) {
  console.log(error);
  }
  }

  main();