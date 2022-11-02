import React from "react";

function Button(props) {
    return (
        <div className="mx-auto flex flex-col my-2">
            <button className="text-zinc-200 text-base bg-slate-600 w-36 py-1.5 border-2 border-orange-200 rounded-full hover:animate-pulse active:scale-75 md:text-lg">{props.buttontext}</button>
        </div>
    );
}

export default Button;