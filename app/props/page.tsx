import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import ImageProfile from "@/components/imageProfile";

export default function PropsPage() {
  return (
    <div>
      <MenuBar page={"Props"} />
      <div className="bg-black p-4">
        <h1 className="text-6xl text-center ibm-plex-sans-thai-bold text-yellow-500">
          Props
        </h1>
        <h1 className="text-center text-3xl p-4 font-extrabold text-yellow-500">
          Components รูป
        </h1>
        <ImageProfile src="https://cms.dmpcdn.com/moviearticle/2023/06/13/ad01ab90-09c1-11ee-a8d9-bfe5abee7e5f_webp_original.webp" />
        <ImageProfile src="https://cdn-th.tunwalai.net/files/story/429872/637248857095338946-story.jpg" />
        <p className="text-center text-3xl p-4 ibm-plex-sans-thai-extralight text-yellow-500">
          Props เป็นเหมือน function ที่มีการรับ input จากภายในเพื่อคุม system
          ภายใน
        </p>
      </div>
      <Footer />
    </div>
  );
}
