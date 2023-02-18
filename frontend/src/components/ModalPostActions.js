import React, { useState } from "react";
import Modal from "./Modal";

function ModalPostActions(props) {
    return (
        <Modal {...props} size="xs">
            <ul className="w-full text-sm">
                <li>
                    <a href="#" className="border-b text-center text-red-600 py-3 block">
                        Report
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center text-red-600 py-3 block">
                        Unfollow
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Go to post
                    </a>
                </li>
                <li>
                    <a
                        href=""
                        onClick={() => props.setOpen(true)}
                        className="text-center py-3 block"
                    >
                        Cancel
                    </a>
                </li>
            </ul>
        </Modal>
    );
}

export default ModalPostActions;