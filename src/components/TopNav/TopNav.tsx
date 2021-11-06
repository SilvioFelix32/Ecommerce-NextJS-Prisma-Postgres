import styles from "./Header.module.css";

const TopNav = () => {
  return (
    <div className="bg-gray500 text-gray100 hidden lg:block">
      <div className="flex justify-between">
        <ul className={`flex ${styles.topLeftMenu}`}>
          <li>
            <a href="https://github.com/SilvioFelix32">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/silviofelix32/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
