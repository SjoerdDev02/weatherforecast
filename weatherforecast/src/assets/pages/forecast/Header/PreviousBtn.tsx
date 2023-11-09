const PreviousBtn = ({ onClick }: { onClick: () => void }) => {

    return (
        <button onClick={onClick}>
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14L30 0.143593L30 27.8564L0 14Z" style={{ fill: 'var(--white)' }} />
            </svg>
        </button>
    );
  }
  
  export default PreviousBtn;