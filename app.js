const urls = [
    'https://api.example.com/data1.json',
    'https://api.example.com/data2.json',
    'https://api.example.com/data3.json'
];


Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json());
})).then(dataArray => {
    console.log(dataArray);
}).catch(error => {
    console.error('Error fetching data:', error);
});