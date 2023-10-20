var url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-11&sortBy=publishedAt&apiKey=8e6db683e3af46e88b491a2c71aad15b';

const fetchAPIData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
}

fetchAPIData();

