import XIcon from "@/assets/icons/x-social.svg";
import InstaIcon from "@/assets/icons/insta.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/30">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">&copy; 2024 Parveen Inc. All rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li><XIcon /></li>
            <li><InstaIcon /></li>
            <li><TikTokIcon /></li>
            <li><YoutubeIcon /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
