import React, { useState } from "react";
import Modal from "./Modal";

function ModalSettings(props) {

    return (
        <Modal {...props} size="xs">
            <ul className="w-full text-sm">
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Change Password
                    </a>
                </li>
            </ul>
        </Modal>
    );
}

export default ModalSettings;