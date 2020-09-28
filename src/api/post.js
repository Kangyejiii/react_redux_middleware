const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

//id,title, body

const posts = [
  { id: 1, title: "abc", body: "abc body" },
  { id: 2, title: "22 title", body: "222 body" },
  { id: 3, title: "33 example", body: "3번째 body" },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
