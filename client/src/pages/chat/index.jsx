import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Chat = () => {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast("Vui lòng hoàn thành thông tin.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return <div>Chat page</div>;
};
