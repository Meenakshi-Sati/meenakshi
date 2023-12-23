import { useContext, useEffect } from "react";
import { APIContext } from "./APIContext";
import NewsMain from "./NewMain";

function NewsDetail({newsObj, currentCategory}) {
  
  const { setCategory } = useContext(APIContext)

  useEffect(() => {
    setCategory(currentCategory)
  }, [currentCategory])

  return (
    <>
    <NewsMain />
      <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img
          className="card-img-top"
          src={
            !newsObj?.urlToImage
              ? "https://media.istockphoto.com/id/184625088/photo/breaking-news-headline.jpg?s=612x612&w=0&k=20&c=0WNsHBZ8Yu2YeTUjVP8xY05Ist60I00iZHmTOnQErHk="
              : newsObj?.urlToImage
          }
          alt="Card image cap"
        />
        <h5 className="card-title">{newsObj?.title?.slice(0, 30)}...</h5>
        <p className="card-text">
          {newsObj?.description
            ? newsObj?.description?.slice(0, 90)
            : "A group of Kentucky, have won he early Christmas gift scratch-off tickets"}...
        </p>
        <a href={newsObj?.url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
    </>
  );
}

export default NewsDetail;
