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
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalPostActions;