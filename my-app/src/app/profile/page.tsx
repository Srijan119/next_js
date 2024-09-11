import Link from "next/link"

export default function profile(){
    const profileId = 100;
    return(
    <>
    <h1>profile</h1>
    <br />
    <Link href="/">Home</Link>
    <br />
    <Link href="profile/1">profile 1</Link>
    <br />
    <Link href="profile/3" replace>profile 3</Link>
    <br />
    <Link href="blog">Blog</Link>

<br />
    <Link href={`profile/${profileId}`}>Profile{profileId}</Link>

    </>
    )
} 