function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div className="flex-1">
        <a href="" className="btn btn-ghost normal-case text-xl">David Bade</a>
      </div>
      <div className="flex-1">
        <a href="" className="btn btn-ghost normal-case text-xl font-ptmono">David Bade</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0 font-ptmono">
          <li><a>Gallery</a></li>
          <li tabindex="0">
            <a>
              Exhibitions
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a>2022</a></li>
              <li><a>2021</a></li>
              <li><a>2020</a></li>
              <li><a>2019</a></li>
              <li><a>2018</a></li>
              <li><a>2017</a></li>
            </ul>
          </li>
          <li><a>CV</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>

    </div >
  )
}
export default Navbar