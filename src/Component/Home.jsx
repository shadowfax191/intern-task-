import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                data.map(film =>
                    <div className="cursor-pointer" key={film.score} onClick={() => navigate('/details', { state: { filmData: film } })}>
                        <div className=" flex items-center justify-center  ">

                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                                <img className="w-full h-64 object-cover" src={film.show.image?.medium} alt="Profile Photo"/>
                                    
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{film.show.name}</div>
                                    </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Home;