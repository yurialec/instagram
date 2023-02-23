import { useState } from "react";

export default function ProfileEdit() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <>
            <div className="flex flex-row">
                <div className="w-1/3 p3">
                    <a href="" className="float-right mr-5">
                        <img
                            src="https://randomuser.me/api/portraits/men/34.jpg"
                            width="40"
                            className="rounded-full"
                        />
                    </a>
                </div>
                <div>
                    <h1 className="text-2xl">User101010</h1>
                    <a href="#" className="text-sm text-sky-500 font-bold">
                        Change Profile Photo
                    </a>
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Name
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input
                        type="text"
                        className="border p-1 px-3 w-full "
                        placeholder="Name"
                        value={name}
                    />
                    <p className="text-gray-400 text-xs">
                        Help people discover your account by using the name
                        you're known by: either your full name, nickname, or
                        business name.
                    </p>
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Username
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input
                        type="text"
                        className="border p-1 px-3 w-full"
                        placeholder="Username"
                        value={username}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Website
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input
                        type="text"
                        className="border p-1 px-3 w-full"
                        placeholder="https://www.mywebsite.com"
                        value={website}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Bio
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <textarea
                        className="border p-1 px-3 w-full"
                        rows="3"
                        value={bio}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Email
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input
                        type="text"
                        className="border p-1 px-3 w-full"
                        placeholder="Email"
                        value={email}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Phone Number
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input
                        type="text"
                        className="border p-1 px-3 w-full"
                        placeholder="Phone Number"
                        value={phone}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8" />
                <div className="w-2/3 pr-10">
                    <button
                        className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}