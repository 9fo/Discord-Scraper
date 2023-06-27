const pfps = document.getElementsByClassName("avatar-31d8He");

for (let i = 0; i < pfps.length; i++) {
  const src = pfps[i].src;
  
  if (src) {
    const id = src.split("avatars")[1]?.split("/")[1];
    if (id) {
      console.log(id);
    }
  }
}
