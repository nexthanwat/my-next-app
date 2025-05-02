import MenuBar from "@/components/MenuBar"
import Footer from "@/components/Footer"
export default function IndexPage() {
  return (
<div>
  <MenuBar/>
  <div>
    <div className="alert alert-primary" role="alert">
      <p className="ibm-plex-sans-thai-bold font-title">คุโด้ชินอิจิ เป็นนักสืบครับ</p>
    </div>
  </div>
  {/*section 1*/}
  <div className="section1-box">
    <h1 className="section1-name ibm-plex-sans-thai-bold">ผมคุโด้ชินอิจิ</h1>
    <p className="section1-meta-data ibm-plex-sans-thai-extralight">นักสืบที่ไล่ต้อนจนฆาตกรต้องฆ่าตัวตายหนะ</p>
    <img className="section1-profile-img" src="https://cms.dmpcdn.com/moviearticle/2023/06/13/ad01ab90-09c1-11ee-a8d9-bfe5abee7e5f_webp_original.webp" alt="Profile-img" />
    <p className="section1-caption ibm-plex-sans-thai-extralight">ไอความรู้สึกที่ทำให้เป็นฆาตกร ยังไงฉันก็ไม่มีวันเข้าใจหรอก</p>
  </div>
  {/*section 2*/}
  <div className="section2-box">
    <a className="section2-contact-link ibm-plex-sans-thai-bold" href="https://www.facebook.com/thanawat.chantamas">Facbook</a>
    <a className="section2-contact-link ibm-plex-sans-thai-bold" href="https://discord.com/channels/@me">Linkdiscord</a>
    <a className="section2-contact-link ibm-plex-sans-thai-bold" href="https://github.com/nexthanwat">GitHub</a>
    {/*section3*/}
    <div className="section3-box">
      <div className="section3-box-a">
        <h1>Resume</h1>
        <p><strong>Name</strong> Thanawat</p>
        <p><strong>Education</strong> Rajamangala University of Technology Krungthep</p>
        <p><strong>ประสบการณ์</strong> ฝึกงานด้านพัฒนาเว็บไซต์</p>
      </div>
      <div className="section3-box-b">
        <h1>Skills</h1>
        <p><strong>ภาษา</strong> ไทย อังกฤษ</p>
        <p><strong>ทักษะ</strong> HTML CSS JavaScript</p>
        <p><strong>Additional Skills</strong> Node.js, React </p>
        <p><strong>Interests</strong> Web Development, AI, Music</p>
      </div>
      
    </div>
  </div>
  <Footer/>
</div>

  );
}
