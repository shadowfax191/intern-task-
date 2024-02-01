/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import BookingForm from "./BookingForm";

const Details = () => {
  const location = useLocation();
  // const userData = JSON.parse(localStorage.getItem('bookingData'));
  const filmData = location.state && location.state.filmData;

  const { summary, genres, rating, externals, ended, url } = filmData.show

  const removeTags = summary.replace(/<\/?[^>]+>/g, '');



  return (
    <div className="max-w-screen-xl mx-auto  px-5">
      <div className="flex justify-end gap-5 p-5">

        <Link to='/'>  <AiOutlineHome className="text-4xl" /></Link>
        <div className="relative">
         <Link to='/booking'><IoCartOutline className="text-4xl" /></Link>  

          {/* <span className="bg-red-500 absolute top-1 left-6 px-1 text-xs rounded-full">{userData.length}</span> */}
        </div>
      </div>
      <div className="  bg-base-200">
        <div className=" lg:flex  items-center gap-10">
          <img src={filmData.show.image?.original} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl pb-3 font-bold">{filmData.show?.name}</h1>
            <p className=" text-lg">Language: {filmData.show?.language}</p>

            <div className="grid grid-cols-2 max-w-xs">
              {
                genres.map((gen, ind) =>
                  <div key={ind} >
                    <li>{gen}</li>
                  </div>
                )
              }
            </div>
            <p className=" text-lg">Rating: {rating?.average}</p>
            <p className=" text-lg">Premiered: {filmData.show?.premiered}</p>
            {
              ended ? <p className=" text-lg">Ended: {ended}</p> : <p className=" text-lg">Status: Running</p>
            }


            <div className="flex gap-5 items-center"><a target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${externals?.imdb}`} > <img className="w-10" src="https://i.ibb.co/sPV43xb/imdb.png" alt="" /></a>
              <a target="_blank" rel="noreferrer" href={url} > <img className="w-8 h-6" src="https://i.ibb.co/r3KNzjw/url.png" alt="" /></a></div>
            <p className="py-6">{removeTags}</p>
            <button className="p-3 bg-blue-200 rounded-2xl" onClick={() => document.getElementById('my_modal_3').showModal()}>Book This</button>
            <dialog id="my_modal_3" className="">
              <div className="p-5 bg-blue-200 rounded-xl">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
               
                <BookingForm filmData={filmData}></BookingForm>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;