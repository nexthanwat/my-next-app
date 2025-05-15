type ImageProfileProps = {
    src: string;
  };
  
  export default function ImageProfile(props: ImageProfileProps) {
    return (
      <div>
        <img className="section1-profile-img" src={props.src} alt="Profile-img" />
      </div>
    );
  }
  