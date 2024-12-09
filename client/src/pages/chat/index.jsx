import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ContactContainer } from "./components/contacts-container";
import { EmptyChatContainer } from "./components/empty-chat-container";
import { ChatContainer } from "./components/chat-container";

export const Chat = () => {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast("Vui lòng hoàn thành thông tin.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return (
    <div className="flex h-[100vh] text-white overflow-hidden">
      <ContactContainer />
      {/* <EmptyChatContainer /> */}
      <ChatContainer />
    </div>
  );
};
