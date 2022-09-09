import React from 'react'
import './navigationBar.css'
import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
} from "react-circular-menu";
const NavigationBar = () => {
    const CircleMenuItemStyle = { border: "3px solid #64CCC9", boxShadow: "5px 10px #888888" }
    return (
        <div className='nav-position'>
            <CircleMenu
                startAngle={-90}
                rotationAngle={360}
                itemSize={1.5}
                radius={4}
                style={CircleMenuItemStyle}
                rotationAngleInclusive={false}>
                <CircleMenuItem
                    onClick={() => alert("Clicked the item")}
                    tooltip="Email"
                    tooltipPlacement={TooltipPlacement.Right}
                    style={CircleMenuItemStyle}
                >
                </CircleMenuItem>
                <CircleMenuItem tooltip="Help"
                 style={CircleMenuItemStyle}>

                </CircleMenuItem>
                <CircleMenuItem tooltip="Location"
                    style={CircleMenuItemStyle}
                >

                </CircleMenuItem>
                <CircleMenuItem tooltip="Info"
                    style={CircleMenuItemStyle}
                >

                </CircleMenuItem>
            </CircleMenu>
        </div>

    )
}

export default NavigationBar