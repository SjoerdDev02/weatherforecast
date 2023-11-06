const PressureIndication = ({ pressure }: { pressure: number }) => {
  return (
    <svg width="75" height="100" viewBox="0 0 75 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="29.304" width="75" height="7.32601" rx="3.663" fill="white"/>
        <rect y="63.3701" width="75" height="7.32601" rx="3.663" fill="white"/>
        <text x="0" y="55" fill="white">{pressure} hPa</text>
        <path d="M36.9254 28.9006C37.2702 29.1426 37.7298 29.1426 38.0746 28.9006L55.2073 16.8724C56.0069 16.311 55.6097 15.054 54.6327 15.054H20.3673C19.3903 15.054 18.9931 16.311 19.7927 16.8724L36.9254 28.9006Z" fill="white"/>
        <path d="M38.0736 71.4016C37.7292 71.1605 37.2708 71.1605 36.9264 71.4016L19.7465 83.4308C18.9456 83.9916 19.3424 85.25 20.3201 85.25H54.6799C55.6576 85.25 56.0544 83.9916 55.2535 83.4308L38.0736 71.4016Z" fill="white"/>
        <path d="M32.8126 4.6875C32.8126 2.09867 34.9112 0 37.5001 0V0C40.0889 0 42.1876 2.09867 42.1876 4.6875V15H32.8126V4.6875Z" fill="white"/>
        <path d="M42 95.5C42 97.9853 39.9853 100 37.5 100V100C35.0147 100 33 97.9853 33 95.5V85H42V95.5Z" fill="white"/>
    </svg>
  );
}

export default PressureIndication;