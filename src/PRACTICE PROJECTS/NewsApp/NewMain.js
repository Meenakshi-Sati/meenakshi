import { useContext, useEffect, useState } from "react";
import { APIContext } from "./APIContext";
import NewsDetail from "./NewsDetail";
import "./News.css";
import Nav from "./Navbar";

function NewsMain() {
    const [newsArray, setNewsArray] = useState([]);
    const { state, currentPage, setCurrentPage, category } = useContext(APIContext);
    console.log(category)
    useEffect(() => {
        if (state.data && state.data.articles) {
            const APIData = state.data.articles;
            console.log(APIData)
            setNewsArray(APIData);
        }
    }, []);
    console.log(newsArray)

    async function getOtherPages(id) {
        if (id === "prev") {
            setCurrentPage((prev) => prev - 1)
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=108d93ae2489457b8c30bcf37347fabd&page=${currentPage - 1}`
                let response = await fetch(url)
                let data = await response.json()
                if (data && data.articles) {
                    setNewsArray(data.articles);
                }
            }
            catch (error) {
                console.log("Sorry!We got ap roblem")
            }
        } else {

            setCurrentPage((prev) => prev + 1)
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=108d93ae2489457b8c30bcf37347fabd&page=${currentPage + 1}`
                let response = await fetch(url)
                let data = await response.json()
                if (data && data.articles) {
                    setNewsArray(data.articles);
                }
            }
            catch (error) {
                console.log("Sorry!We got a problem")
            }
        }
    }

    return (
        <div>
            <Nav />
            <div id="news-main-div">
                {newsArray.length !== 0 ?
                    newsArray.map((obj, index) => {
                        return <NewsDetail key={index} newsObj={obj} />;
                    })
                    : null
                }
                <button disabled={currentPage === 1} onClick={() => getOtherPages("prev")} id="prev">Previous</button>
                <button disabled={currentPage === 4} onClick={() => getOtherPages("next")} id="next">Next</button>
            </div>
        </div>
    );
}

export default NewsMain;
