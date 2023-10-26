import {useState, useEffect} from 'react';
type DiscordUser = {
    id: string;
    username: string;
    global_name: string;
    dispkay_name: string;
    avatar: string;
    avatar_decoration: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string;
    banner_color: string;
    accent_color: string;
    locale: string;
    mfa_enabled: boolean;
    premium_type: number;
    email: string;
    verified: boolean;
    bio: string;
    guilds?: {
        id: string;
        name: string;
        icon: string;
        owner: boolean;
        permissions: number;
        features: string[];
        permissions_new: string;
    }[];
    guilds_permissions?: string[];
}

function Test() {
    const [User, setUser] = useState<DiscordUser>();
    const TestFetch = async():Promise<DiscordUser> => {
        const User = await fetch(
            'http://localhost:5000/discord-auth-check',
            {
                method: 'GET',
                credentials: 'include',
                mode: "cors"
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.log(err);
        });
        return User;
    }
    useEffect(() => {
        TestFetch().then(data => {
            setUser(data);
        });
    },[]);
    if (User) {
        return (
            <div>
                <h1>Test</h1>
                <p>{User.username}</p>
                <p>{User.guilds?.map(guild => guild.name)}</p>
            </div>
        );
    } else {
        return (
            <div>
                loading...
            </div>
        );
    }
}
export default Test;