// fetch(
//   "https://newsapi.org/v2/everything?q=IIT&apiKey=6b63213816bf4218b5838719d7153b89"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.articles[0]);
//     data.articles.forEach((ele) => {
//       const html = `<div class="card g-col-6 shadow p-3 mb-5 bg-body rounded-3" style="width: 18rem">
//         <img src=${ele.urlToImage} class="card-img-top" alt="IIT" />
//         <div class="card-body">
//           <h5 class="card-title">${ele.title}</h5>

//           <a href=${ele.url} class="btn btn-primary ">Go to ${ele.source.name}</a>
//         </div>
//       </div>`;
//       sec.insertAdjacentHTML("beforeend", html);
//     });
//   });

const searchbtn = document.querySelector(".search");
const field = document.querySelector(".field");
searchbtn.addEventListener("click", function () {
  // console.log("clicked");
  // console.log(field.value);
  const want = field.value;
  const sec = document.querySelector(".new");
  sec.innerHTML = "";
  fetch(
    `https://newsapi.org/v2/everything?q=${want}&apiKey=6b63213816bf4218b5838719d7153b89`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      if (!data.totalResults) throw new Error(res.status);
      data.articles.forEach((ele) => {
        const html = `<div class="card g-col-6 shadow p-3 mb-5 bg-body rounded-3" style="width: 18rem">
          <img src=${ele.urlToImage} class="card-img-top" alt="IIT" />
          <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            
            <a href=${ele.url} class="btn btn-primary ">Go to ${ele.source.name}</a>
          </div>
        </div>`;
        sec.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch((err) => {
      const html = `<div style="text-align:center; margin:4%; font-size:3vw" >No match Found 🔎</div>`;
      sec.insertAdjacentHTML("beforeend", html);
    });
});
