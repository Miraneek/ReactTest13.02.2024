import {useState} from "react";

export function Movie({movieName, addFavourite}){
    const [numberOfUpvotes, setupvotes] = useState(0);

    function handleClick(number){
        if (numberOfUpvotes + number >= 0){
            setupvotes(numberOfUpvotes + number)
        }
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className={"movie"}>
            <h2>
                {movieName}
            </h2>
            <p>Browse movies, TV Shows. and music on your device</p>

            <div className={"buttons"}>
                <div>
                    <button onClick={() => handleClick(1)} onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}>Upvote
                    </button>
                    <button onClick={() => handleClick(-1)} onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}>Downvote
                    </button>
                    <button onClick={() => addFavourite(movieName)}>Add to favourites</button>
                </div>
                {isHovering && (
                    <span className={"upvotes"}>{numberOfUpvotes}</span>
                )}
            </div>
        </div>
    )

}