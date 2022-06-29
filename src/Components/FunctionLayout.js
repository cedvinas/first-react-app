import React from "react";
import ClassNavigationMenu from './ClassNavigationMenu';
import FunctionBodyContainer from './FunctionBodyContainer'

export default function FunctionLayout(props) {
    return (
        <div>
            <FunctionBodyContainer />
            <ClassNavigationMenu />
        </div>
    )
}

