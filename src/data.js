const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);

let pagesStore = JSON.parse(pagesJson);

export default {
    getAllPages(){
        return pagesStore;
    },
    getSinglePage(index){
        console.log("getSinglePage function triggered");
        console.log(pagesStore[index]);
        return pagesStore[index];
    }
}