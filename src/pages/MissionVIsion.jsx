import React from "react";

const MissionVision = () => {
    return (
        <div className="container mt-5 ">
            <div className="row ">
                <h1 className="text-center mb-5">
                    Mission & Vision
                </h1>
                {/* For Mission */}
                <div className="card mb-5">
                    <div className="card-body">
                        <h2 className="card-title text-primary text-center">Mission</h2>
                        <p className="card-text text-center">
                            As an institution of higher learning, UC(PnC) is committed to equip individual
                            with knowledge, skills, and values that will enable them to achieve their
                            professional goals and provide leadership and service for national development.
                        </p>
                    </div>
                </div>
                {/* For Vision */}
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-primary text-center">Vision</h2>
                        <p className="card-text text-center">
                            A primier institution of higher learning in Region IV, developing globally
                            competetive and value-laden professionals and leaders instrumental to community
                            development and nation-building.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;