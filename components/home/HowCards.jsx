import Link from "next/link";

const HowCards = ({ icon, title, body, linkText, link }) => {
  return (
    <div className="w-full text-center mx-auto space-y-4">
      <span className="bg-accent text-primary mx-auto flex justify-center item-center rounded-full w-12 h-12 md:w-16 md:h-16">
        {icon}
      </span>
      <h3 className="font-semibold text-lg md:text-xl text-[#222222]">{title}</h3>
      <p className="text-sm text-[#959595]">{body}</p>
      {linkText && (
        <Link href={link}>
          <a className="btn text-[#222222] border border-accent hover:text-white hover:border-primary text-sm font-normal px-8">
            {linkText}
          </a>
        </Link>
      )}
    </div>
  );
};

export default HowCards;
