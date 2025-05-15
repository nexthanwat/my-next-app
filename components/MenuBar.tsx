import Link from "next/link";

type MenuBarProps = {
  page: string;
};
export default function MenuBar(props: MenuBarProps) {
  return (
    <div>
      <div className="flex justify-around bg-black p-5 text-3xl text-bold text-yellow-500">
        <Link href="/" className="ibm-plex-sans-thai-bold">
          HOME
        </Link>
        <Link href="/state" className="ibm-plex-sans-thai-bold">
          StatePage
        </Link>
        <Link href="/props" className="ibm-plex-sans-thai-bold">
          props
        </Link>
        <Link href="/use-effect" className="ibm-plex-sans-thai-bold">
          TV series
        </Link>
      </div>

      <div className="p-4 bg-yellow-500">
        <p className="text-2xl font-extrabold text-center text-black">
          ตอนนี้คุณอยู่ที่หน้า {props.page}
        </p>
      </div>
    </div>
  );
}
