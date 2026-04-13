import { FadeLoader } from 'react-spinners';
import useFriend from '../../hooks/useFriend';
import FriendCard from '../../component/ui/FriendCard';

const FriendList = () => {
    const {friends,loading} = useFriend()
    return (
        <div className='w-10/12 mx-auto'>
            <hr className='shadow-sm text-white/50 mt-8 '/>
            <h1 className='text-2xl font-bold my-5'>Your Friends</h1>
            {loading ? 
            <div className='flex justify-center items-center mx-auto'>
                <FadeLoader color='#244D3F'/>
            </div> : 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                    {friends.map(friend =><FriendCard key={friend.id} friend={friend} />)}
                </div>
            }
        </div>
    );
};

export default FriendList;