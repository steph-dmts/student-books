const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0">
      <h1 className="ml-2 mt-2 mb-4 text-2xl font-bold">Student Books</h1>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Discover</a>
        </li>
      </ul>
      <div>
        <span>Refer a friend</span>
      </div>
      <ul>
        <li>
          <a href="">Reading</a>
        </li>
        <li>
          <a href="">Want to read</a>
        </li>
        <li>
          <a href="">Completed</a>
        </li>
      </ul>
      <div>
        Notebook
      </div>
    </div>
  );
};

export default Sidebar;
