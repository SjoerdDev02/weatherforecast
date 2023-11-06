import { CSSProperties } from 'react';
import VisitorLayout from '../../layouts/VisitorLayout/VisitorLayout';
import Glass from '../../components/Glass/Glass';
import Button from '../../components/Button/Button';

const NotFound = () => {
    const backgroundImg = {
        phone: "/backgrounds/notFound/phone-notFound-bg.jpg",
        desktop: "/backgrounds/notFound/desktop-notFound-bg.jpg",
    };
    
    const glassStyles: CSSProperties = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "0.5rem",
        padding: "1rem",
        margin: "2rem",
        width: "30vw",
        minHeight: "30vh",
        color: "var(--white)",
    };

    return (
        <VisitorLayout background={backgroundImg}>
            <Glass customStyles={glassStyles}>
                <h1>Page not found</h1>
                <h4>Sorry, we couldn't find the page you were looking for. Check your spelling and otherwise use the button to go to the Homepage</h4>
                <Button page='/'>Go to the Homepage</Button>
            </Glass>
        </VisitorLayout>
    );
}

export default NotFound;