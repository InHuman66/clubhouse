import {useRouter} from "next/router";


export default function Rooms() {
    const router = useRouter()
    const{id} = router.query
    return (
        <div className={'text-center'}>
            <h1>Profile</h1>
            <p>your id: {id}</p>
        </div>
    )
}