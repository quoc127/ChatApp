import { useAppStore } from "@/store"

export const Profile = () => {
  const {userInfo} = useAppStore()
  return(
    <div>Profile page
      <div>Email: {userInfo.email}</div>
    </div>
  )
}