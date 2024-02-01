import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";


const Cart = () => {
    const userData = JSON.parse(localStorage.getItem('bookingData'));

    return (
        <div className="max-w-screen-xl mx-auto  px-5 py-10">
            <div className="flex justify-end py-4">
                <Link to='/'>  <AiOutlineHome className="text-4xl" /></Link>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    userData.map((user, ind) =>
                        <div key={ind}>
                            <div className="flex   bg-base-100 shadow-xl">
                                <figure><img className="rounded-r-xl" src={user.movieImage.medium} alt="Movie" /></figure>
                                <div className="p-10">
                                    <h2 className="text-2xl font-semibold">{user.movieName}</h2>
                                    <p className="text-lg">Booking Name: {user.name}</p>
                                    <p className="text-lg">Booking Email: {user.email}</p>
                                    <p className="text-lg">Date: {user.date}</p>
                                    <div className=" flex justify-end">

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;