const SideMenu =()=>{
    return(
    <div class="sidebar">
      <i class="fab fa-twitter"></i>
      <div class="sidebarOption active">
        <span class="material-icons"> home </span>
        <h2>Home</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> search </span>
        <h2>Explore</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> notifications_none </span>
        <h2>Notifications</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> mail_outline </span>
        <h2>Messages</h2>
      </div><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous"
      />
        <div class="sidebarOption">
        <span class="material-icons"> bookmark_border </span>
        <h2>Bookmarks</h2>
        </div>

      <div class="sidebarOption">
        <span class="material-icons"> list_alt </span>
        <h2>Lists</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> perm_identity </span>
        <h2>Profile</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> more_horiz </span>
        <h2>More</h2>
      </div>
      <button class="sidebar__tweet">Tweet</button>
      </div>
    )
}

export default SideMenu