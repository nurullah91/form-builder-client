import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='homePage flex justify-center items-center min-h-screen'>
            <div className='shadow-lg rounded py-10 px-10 bg-purple-900/30'>
              
                <Link className='bg-purple-800 py-3 px-5 mr-3 mt-5 text-white font-semibold rounded' to='/create-forms'>Crate a Form</Link>
               
                <Link className='bg-purple-800 py-3 px-5 mr-3 mt-5 text-white font-semibold rounded' to='/forms'>Forms</Link>
               
            </div>
        </div>
    );
};

export default Home;