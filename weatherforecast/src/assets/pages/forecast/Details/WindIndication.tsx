const WindIndication = ({ rotationValue }: { rotationValue: number }) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM53.125 84.375V93.75H46.875V84.375H53.125ZM93.75 46.875H84.375V53.125H93.75V46.875ZM6.25 46.875H15.625V53.125H6.25V46.875ZM53.125 15.625V6.25H46.875V15.625H53.125Z" fill="white"/>
        <path transform={`rotate(${rotationValue} 50 50)`} d="M46.377 68.0622C47.5173 71.8631 52.8994 71.863 54.0396 68.0622L59.5833 49.5833L50.2083 18.3333L40.8333 49.5833L46.377 68.0622Z" style={{ fill: 'var(--dark-blue)' }} />
    </svg>
  );
}

export default WindIndication;
