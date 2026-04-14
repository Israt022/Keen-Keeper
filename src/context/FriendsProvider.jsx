import { Children, createContext, useState } from "react";

export const friendsContext = createContext();

const FriendsProvider = ({children}) => {
    // const {friends,loading} = useFriend()
    const [call,setCall] = useState([])
    const [texts,setTexts] = useState([])
    const [videos,setVideos] = useState([])
    const data = {
        call,
        setCall,
        texts,
        setTexts,
        videos,
        setVideos
        
    }
    return (
        <friendsContext.Provider value={data}>
            {children}
        </friendsContext.Provider>
    );
};

export default FriendsProvider;