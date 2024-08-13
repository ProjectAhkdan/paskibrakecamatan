import Benner from "./components/Benner";
import Profil from "./profil/page";
import TahapanSeleksi from "./Tahapan Seleksi/page";

export default function Home() {
  return (
   <div className=" scroll-smooth">
    <Benner />
    <Profil />
    <TahapanSeleksi />
   </div>
  );
}
