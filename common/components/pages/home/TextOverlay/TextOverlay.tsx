import styles from "./TextOverlay.module.scss";

import Link from "next/link";

const TextOverlay = () => {
  const menu_items = ["Who's G-J", "Design", "Craftmanship", "FOR ALL OF US"];

  return (
    <div className="fixed top-0 left-0  h-full w-full flex flex-col justify-between pl-5 py-14">
      <div>
        <h1 className={styles.text}>G-J</h1> <br />
        <div className="flex items-start">
          <h1 className={styles.text}>About</h1>
          <div className="p-0">
            <span className="text-xs font-bold ">
              Handcraft High-End Contemporary <br />
              Products Inspired By Nature
            </span>
          </div>
        </div>
      </div>

      <div>
        <ul>
          {menu_items.map((item) => {
            return (
              <li>
                <Link href="">
                  <a>{item}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TextOverlay;
