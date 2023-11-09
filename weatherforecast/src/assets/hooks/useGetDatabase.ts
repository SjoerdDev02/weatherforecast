import axios from 'axios';

const useGetDatabase = () => {
    const getDatabase = async () => {
        const userDatabase = 'http://localhost:3000/users';

        try {
            const response = await axios.get(userDatabase);

            if (response.status !== 200) {
                throw new Error('Fetching van de bestaande database is mislukt. Probeer het opnieuw.');
            }

            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    return getDatabase;
};

export default useGetDatabase;