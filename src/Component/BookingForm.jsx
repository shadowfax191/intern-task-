

const BookingForm = (filmdata) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('bookingData')) || []
        const name = e.target.name.value
        const email = e.target.email.value
        const date = e.target.date.value
        const movieName = filmdata.filmData.show.name
        const movieImage = filmdata.filmData.show.image

        const userData = {
            movieName,
            movieImage,
            name, email, date
        }

        data.push(userData)

        const setData = JSON.stringify(data)
        localStorage.setItem('bookingData', setData);
    }
    return (
        <div className="w-56 ">
            <p className="text-xl py-2">{filmdata.filmData.show.name}</p>
            <p className="text-xl py-2">Runtime: {filmdata.filmData.show.runtime} min</p>

            <form onSubmit={handleSubmit} action="">
                <p>Booking Name</p>
                <input type="text" name="name" className="rounded-lg p-1" placeholder="Name" required />
                <p>Email</p>
                <input type="email" name="email" className="rounded-lg p-1" placeholder="Email" required />
                <p>Chose a date:</p>
                <input type="date" name="date" required /> <br />
                <div className="flex justify-center">

                    <input className="px-2 mt-4 border-2 border-blue-500 rounded-xl text-lg cursor-pointer " type="submit" value='Book now ' />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;