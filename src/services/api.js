const QUESTIONS = "https://opentdb.com/api.php?amount=10";

const getDataFromApi = () => fetch(QUESTIONS).then(response => response.json())


export { getDataFromApi };