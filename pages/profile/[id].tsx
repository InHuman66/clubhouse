import { useRouter } from 'next/router';
import React from 'react';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';

export default function ProfilePage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header />
            <div className="container mt-30">
                <Profile
                    avatarUrl="http://ecscggo.com/assets/images/users/1.jpg"
                    fullname="Sanya Kis"
                    username="san4ez"
                    about="Test info"
                />
            </div>
        </>
    );
}
