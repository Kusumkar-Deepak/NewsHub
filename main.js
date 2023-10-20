// // const apiKey = ""; 

// const apiKey = 'd61a21fea1fa4ec4b1bb593d3ab1f2fd';

// document.getElementById('searchButton').addEventListener('click', () => {
//   const searchQuery = document.getElementById('searchInput').value;

//   // Check if a search query is provided
//   if (searchQuery.trim() !== '') {
//     fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         // Clear previous results
//         document.getElementsByClassName('info').innerHTML = '';

//         // Process and display the news articles
//         data.articles.forEach(article => {
//           const articleElement = document.createElement('div');
//           articleElement.innerHTML = `
//             <h2>${article.title}</h2>
//             <p>${article.description}</p>
//             <a href="${article.url}" target="_blank">Read more</a>
//           `;
//           document.querySelector('.info').appendChild(articleElement);
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//       });
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const apiKey = 'd61a21fea1fa4ec4b1bb593d3ab1f2fd'; // Replace with your News API key
//     const searchButton = document.getElementById('searchButton');
//     const searchInput = document.getElementById('searchInput');
//     // const newsContainer = document.querySelector('.info');
//     const newsContainer = document.querySelector('.info');
//     const newsDetailsContent = document.querySelector('.news-details-content');
//     const newsCloseBtn = document.querySelector('.news-close-btn');
  
//     // Function to fetch news articles
//     const fetchNews = async (query) => {
      
//       try {
//         const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
//         const data = await response.json();
//         console.log(data);
//         newsContainer.innerHTML = "";
//         data.articles.forEach((article) => {
//           const newsDiv = document.createElement('div');
//           newsDiv.classList.add('news-article');
//           newsDiv.innerHTML = `
//             <h2>${article.title}</h2>
//             <p>${article.description}</p>
//             <a href="${article.url}" target="_blank">Read more</a>
//           `;
  
//           const button = document.createElement('button');
//           button.textContent = "View Details";
//           newsDiv.appendChild(button);
  
//           // Adding event listener to view details button
//           button.addEventListener('click', () => {
//             openNewsPopup(article);
//           });
  
//           newsContainer.appendChild(newsDiv);
//         });
//       } catch (error) {
//         newsContainer.innerHTML = "<h2>Error in Fetching News...</h2>";
//       }
//     }
  
//     // Function to open the news details popup
//     const openNewsPopup = (article) => {
//       newsDetailsContent.innerHTML = `
//         <h2 class="newsTitle">${article.title}</h2>
//         <p>${article.content}</p>
//         <a href="${article.url}" target="_blank">Read more</a>
//       `
//       newsDetailsContent.parentElement.style.display = "block";
//     }
  
//     // Event listener for the search button
//     searchButton.addEventListener('click', (e) => {
//       e.preventDefault();
//       const searchQuery = searchInput.value.trim();
//       if (!searchQuery) {
//         newsContainer.innerHTML = `<h2>Type a search query in the input field.</h2>`;
//         return;
//       }
//       fetchNews(searchQuery);
//     });
  
//     // Event listener to close the news details popup
//     newsCloseBtn.addEventListener("click", () => {
//       newsDetailsContent.parentElement.style.display = "none";
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
  const apiKey = 'd61a21fea1fa4ec4b1bb593d3ab1f2fd'; // Replace with your News API key
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const newsContainer = document.querySelector('.info');

  const fetchNews = async (query) => {
      try {
          const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
          const data = await response.json();
          newsContainer.innerHTML = "";
          data.articles.forEach((article) => {
              const newsDiv = document.createElement('div');
              newsDiv.classList.add('news-article');
              newsDiv.innerHTML = `
                  <h2>${article.title}</h2>
                  <img src="${article.urlToImage}" alt="News Image">
                  <p>${article.description}</p>
                  <a href="${article.url}" target="_blank">Read more</a>
              `;

              newsContainer.appendChild(newsDiv);
          });
      } catch (error) {
          newsContainer.innerHTML = "<h2>Error in Fetching News...</h2>";
      }
  }

  searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const searchQuery = searchInput.value.trim();
      if (!searchQuery) {
          newsContainer.innerHTML = `<h2>Type a search query in the input field.</h2>`;
          return;
      }
      fetchNews(searchQuery);
  });
});
  