import React from "react";
import Button from "../resuableComponents/Button";


function LandingPage() {
    return (
        <div className="mx-auto flex flex-col justify-start space-y-48 bg-[url('./assets/images/chessboard.png')] w-full h-screen bg-cover bg-no-repeat bg-center">
            <div className="mx-auto flex flex-col items-center justify-center">
                <h1 className="text-zinc-200 text-4xl font-roboto font-extrabold mt-28 sm:text-5xl lg:text-7xl">MASTER CHESS</h1>
            </div>
            <div className="mx-auto flex flex-col items-center">
                <Button buttontext="PLAY" />
                <Button buttontext="RULES" />
            </div>
        </div>
    );
}

export default LandingPage;