const display = document.getElementById('display');

let all_allPosts = [];

async function fetchdata() {
  try {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments');

    const jsonusers = await users.json();
    const jsonposts = await posts.json();
    const jsoncomments = await comments.json();

    displaydata(jsonusers, jsonposts, jsoncomments);
  } catch (error) {
    console.error('error to fetching data ', error);
  }
}

fetchdata();

function displaydata(users, posts, comments) {
  for (let i = 0; i < posts.length; i++) {
    const user = users.find(us=> us.id === posts[i].userId);
    const comment = comments.find(cm=> cm.postId === posts[i].id)
      if(user && comments)
      {
        const newPost = {
            id: `${user.id}`,
            userName:`${user.username}`,
            title: `${posts[i].title}`,
            body: posts[i].body,
            published: true,
            comments: [comment.body]
        };
        all_allPosts.push(newPost);
      }
      
    }
  //console.log(all_allPosts);
  aff_post(all_allPosts);
}

function aff_post(posts)
{
    display.innerHTML = '';        
    posts.forEach(post => {
        const carteuser = document.createElement('div');
        carteuser.className = 'carteuser';
        carteuser.innerHTML += `
        <div class="w-[300px] bg-[#676363] text-white p-4 rounded-xl shadow-lg hover:scale-105 hover:bg-[#5a5858] transition-all duration-300">
        <h1 class="font-bold text-lg text-[#ffd700] mb-2">${post.title}</h1>
        <h2 class="text-sm text-gray-200 mb-1">👤 ${post.userName}</h2>
        <h3 class="text-xs mb-2">${post.published}</h3>
        <p class="text-gray-100 mb-2 leading-relaxed">${post.body}</p>
        <p class="bg-[#4e4e4e] p-2 rounded-lg text-sm text-gray-300">Comment : ${post.comments}</p>
        </div>
        `;
        display.appendChild(carteuser);
    });
    
}
//par le userName
function sortByUserName1(a,b)
{
    if (a.userName.toLowerCase() < b.userName.toLowerCase())
    {
        return -1
    }
    if (a.userName.toLowerCase() > b.userName.toLowerCase()){
        
        return 1;
    }
}

function sortByUserName()
{
    display.innerHTML = '';
    all_allPosts.sort(sortByUserName1);
    aff_post(all_allPosts);
}

//par le titre

function sortByPostTitle1(a,b){
    if (a.title.toLowerCase() < b.title.toLowerCase())
    {
        return -1
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()){
        
        return 1;
    }
}

function sortByPostTitle()
{
    display.innerHTML = "";
    all_allPosts.sort(sortByPostTitle1);
    aff_post(all_allPosts);
}

//affichage par n

function getPagePosts(offset, n)
{
    display.innerHTML = "";
    const post = all_allPosts.slice(offset, offset + n);
    aff_post(post);
}

