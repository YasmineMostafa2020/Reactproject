import R from "./assets/images/R.jpg";
function Home(){
return(
    <div className="row my-5 mx-4 text-center align-items-center">
        <div className="col-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero optio totam nesciunt fugit, ab corrupti.</div>
        <figure className="w-25 col-5 offset-2"><img src={R} alt="" className="w-100 rounded-circle"/></figure>

        </div>
    );
}
export default Home;