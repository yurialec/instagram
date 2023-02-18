import React, { useState } from "react";
import Modal from "./Modal";
import UserProfile from '../images/UserProfile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalPostActions(props) {
    const { open, setOpen } = props;

    return (
        <Modal open={open} setOpen={setOpen} size="lg">
            <div className="flex flex-row h-full">
                <div className="w-3/5">
                    <img
                        className="rounded-full w-8 max-w-none"
                        src={UserProfile}
                    />
                </div>
                <div className="w-2/5 relative pt-16">
                    <div className="absolute top-0 w-full p-3 flex flex-row border-b">
                        <div className="flex-1">
                            <a href="" className="">
                                <img
                                    className="rounded-full w-8 max-w-none inline"
                                    src={UserProfile}
                                />{" "}
                                <span className="font-medium text-sm ml-2">
                                    User123
                                </span>
                            </a>
                        </div>
                        <div>
                            <a className="" href="">
                                <FontAwesomeIcon icon="ellipsis" />
                            </a>
                        </div>
                    </div>
                    <div className="overflow-scroll h-full pb-48">
                        <div className="flex flex-row p-3">
                            <div>
                                <img
                                    className="rounded-full w-8 max-w-none inline"
                                    src={UserProfile}
                                />
                            </div>
                            <div>
                                <div className="px-3 text-sm">
                                    <span className="font-medium mr-2">
                                        User123
                                    </span>
                                    "velit sed ullamcorper morbi tincidunt
                                    turpis in eu mi bibendum"
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row p-3">
                            <div className="">
                                <img
                                    className="rounded-full w-8 inline max-w-none"
                                    src={UserProfile}
                                />
                            </div>
                            <div className="grow relative">
                                <div className="px-4 text-sm">
                                    <span className="font-medium mr-2">
                                        User569832
                                    </span>
                                    Looks Great!
                                </div>
                                <a className="absolute top-0 right-0 block float-right text-xs cursor-pointer text-red-600">
                                    <FontAwesomeIcon icon="heart" />
                                </a>
                            </div>
                        </div>
                        <div className="basolute bottom-0 w-full border-t bg-white">
                            <div className="header p-3 flex flex-row text-2xl w-full">
                                <div className="flex-1">
                                    <a className='mr-3 text-red-600 cursor-pointer' href=''>
                                        <FontAwesomeIcon icon="heart" />
                                    </a>
                                    <a
                                        className='mr-3 hover:text-gray-500 cursor-pointer' href=''
                                    >
                                        <FontAwesomeIcon icon={['fa', 'comment']} />
                                    </a>
                                    <a className='mr-10 cursor-pointer hover:text-gray-500' href=''>
                                        <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                                    </a>
                                </div>
                                <div className="">
                                    <a className="cursor-pointer">
                                        <FontAwesomeIcon
                                            icon={["far", "bookmark"]}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="font-medium text-sm px-3">
                                1,000
                            </div>
                            <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
                                23 Hours ago
                            </div>

                            <div className="p-3 flex flex-row border-t">
                                <div className="flex items-center">
                                    <a className="text-2xl" href="#">
                                        <FontAwesomeIcon
                                            icon={["fas", "face-smile"]}
                                        />
                                    </a>
                                </div>
                                <div className="flex-1 pr-3 py-1">
                                    <input
                                        className="w-full px-3 py-1 text-sm outline-0"
                                        type="text"
                                        placeholder="Add a comment..."
                                    />
                                </div>
                                <div className="flex items-center text-sm">
                                    <a
                                        className="text-sky-500 font-medium"
                                        href="#"
                                    >
                                        Post
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalPostActions;