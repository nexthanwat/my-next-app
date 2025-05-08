export default function MenuBar() {
  return (
    <div className="flex justify-around bg-blue-500 p-4">
      <a
        className="menu-item ibm-plex-sans-thai-bold"
        href="http://localhost:3000/"
      >
        Home
      </a>
      <a
        className="menu-item ibm-plex-sans-thai-bold"
        href="http://localhost:3000/"
      >
        About Me
      </a>
      <a
        className="menu-item ibm-plex-sans-thai-bold"
        href="http://localhost:3000/state"
      >
        ผลงาน
      </a>
    </div>
  );
}
