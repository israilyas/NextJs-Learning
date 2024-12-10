import Link from "next/link";

const LearnLink = () => {
    const id = 2
    return (
        <>
           <Link href="/admin/dashboard">Go To Admin Dashboard</Link>
           {/* Dynamic Routing */}
           <Link href={`/user/profile/${id}`}>Go To User Profile</Link>
        </>
    )
}

export default LearnLink
