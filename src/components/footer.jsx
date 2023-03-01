import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="px-40">
        <hr />
      </div>
      <footer className=" w-full p-4 sm:p-6 sm:px-4">
        <div className="mx-auto max-w-[1080px]">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-md text-white sm:text-center">
              © {new Date().getFullYear()}{" "}
              <a href="" className="hover:underline">
                Flowfolio
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

            <AiFillTwitterCircle size={25} className="text-white"/>

              <a
                href="https://github.com/"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <AiFillGithub size={25} className="text-white" />
                
              </a>

            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;
