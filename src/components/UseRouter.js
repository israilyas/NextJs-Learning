"use client"
import { useRouter } from "next/navigation"

const UseRouter = () => {
    const router = useRouter()
    console.log("Router",router)
    return (
    <>
      <h1>Use Router</h1>
      <button type="button" onClick={()=>router.push("/admin/dashboard")}>Got to Admin Dashboard</button>
    </>
  )
}

export default UseRouter
