import React from "react";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <h1 className="display-4 mb-4"> Welcome to Pamantasan ng Cabuayo</h1>
                    <p className="lead">
                        This is the homepage of our Single Page Application built with React Router and Vite.
                    </p>

                    <div className="mt-5">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Pamantasan_ng_Cabuyao.jpg/500px-Pamantasan_ng_Cabuyao.jpg" alt="PNC Campus" className="img-fluid rounded shadow"></img>
                    </div>
                    <div className="mt-4">
                        <p>
                            Explore our website to learn more about PNC's mission, vision, facilities, and how to get in touch with us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;