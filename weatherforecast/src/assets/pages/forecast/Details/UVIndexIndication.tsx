const UVIndexIndication = ({ uvIndex }: { uvIndex: number }) => {
    let uvIndication = 6;

    if (uvIndex > 10) {
        uvIndication = 288.5;
    } else if (uvIndex === 0) {
        uvIndication === 6;
    } else {
        uvIndication = 288.5 / 10 * uvIndex;
    }

    return (
        <svg width="294" height="20" viewBox="0 0 294 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="15" width="10" height="294" transform="rotate(-90 0 15)" fill="url(#paint0_linear_13_856)"/>
            <circle cx={uvIndication} cy="10" r="9" fill="white" stroke="#000032" strokeWidth="2" />
            <defs>
                <linearGradient id="paint0_linear_13_856" x1="5" y1="15" x2="5" y2="309" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#14C832"/>
                    <stop offset="0.497097" stopColor="#C89600"/>
                    <stop offset="1" stopColor="#FF0000"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default UVIndexIndication;